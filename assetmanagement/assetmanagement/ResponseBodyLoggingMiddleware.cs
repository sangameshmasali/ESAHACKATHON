using Microsoft.ApplicationInsights.DataContracts;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace assetmanagement
{
    public class ResponseBodyLoggingMiddleware
    {
        private readonly RequestDelegate _next;

        public ResponseBodyLoggingMiddleware(RequestDelegate next)
        {
            this._next = next;
        }
        public async Task InvokeAsync(HttpContext context)
        {
            var originalBody = context.Response.Body;
            using var newBody = new MemoryStream();
            context.Response.Body = newBody;

            try
            {
                await this._next(context);
            }
            finally
            {
                newBody.Seek(0, SeekOrigin.Begin);
                var bodyText = await new StreamReader(context.Response.Body).ReadToEndAsync();
                if(bodyText == "")
                {
                    if (context.Response.StatusCode == StatusCodes.Status401Unauthorized)
                    {
                        bodyText = "Authorization has been denied for this request.";
                    }
                    else if (context.Response.StatusCode == StatusCodes.Status405MethodNotAllowed)
                    {
                        bodyText = "The requested resource does not support http method";
                    }
                    else if (context.Response.StatusCode == StatusCodes.Status406NotAcceptable || context.Response.StatusCode == StatusCodes.Status404NotFound || context.Response.StatusCode == StatusCodes.Status400BadRequest)
                    {
                        bodyText = "The request is not found or not accepted. Please check the input request";
                    }
                    else if (context.Response.StatusCode == StatusCodes.Status500InternalServerError)
                    {
                        bodyText = "Internal server error";
                    }
                    else
                    {
                        bodyText = "Some error occurred.";
                    }
                    await context.Response.WriteAsync(bodyText);
                }

                // Write response body to App Insights
                var requestTelemetry = context.Features.Get<RequestTelemetry>();
                requestTelemetry?.Properties.Add("ResponseBody", bodyText);
                newBody.Seek(0, SeekOrigin.Begin);
                await newBody.CopyToAsync(originalBody);
            }
        }
    }
}
