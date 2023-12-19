using assetmanagement.Model;
using Microsoft.ApplicationInsights.DataContracts;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Extensions;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace assetmanagement
{
    public class RequestBodyLoggingMiddleware : IMiddleware
    {
        public async Task InvokeAsync(HttpContext context, RequestDelegate next)
        {
            var method = context.Request.Method;

            // Ensure the request body can be read multiple times
            context.Request.EnableBuffering();

            // Only if we are dealing with POST or PUT, GET and others shouldn't have a body
            if (context.Request.Body.CanRead && (method == HttpMethods.Post || method == HttpMethods.Put || method == HttpMethods.Get || method == HttpMethods.Patch))
            {
                // Leave stream open so next middleware can read it
                using var reader = new StreamReader(
                    context.Request.Body,
                    Encoding.UTF8,
                    detectEncodingFromByteOrderMarks: false,
                    bufferSize: 512, leaveOpen: true);

                var requestBody = await reader.ReadToEndAsync();
                //Prepare Request Log Entry
                var logEntry = await GenerateRequestData(context, requestBody);
                // Reset stream position, so next middleware can read it
                context.Request.Body.Position = 0;

                // Write request body to App Insights
                var msg = await DoLog(logEntry);
                var requestTelemetry = context.Features.Get<RequestTelemetry>();
                requestTelemetry?.Properties.Add("RequestBody", msg);

            }

            // Call next middleware in the pipeline
            await next(context);
        }

        private async Task<string> DoLog(RequestResponseLog logData)
        {
            return await System.Threading.Tasks.Task.Run(() =>
            {
                Dictionary<string, string> props = new Dictionary<string, string>();
                var dic = new Dictionary<string, string>
                {
                    { "request_url", logData.RequestURL }
                };
                string msg = JsonConvert.SerializeObject(logData).Replace("\\\"", "\"");
                //_logger.LogTrace($"_Request_Response_ { msg }", SeverityLevel.Information, dic);
                return msg;
            });
        }

        private async Task<RequestResponseLog> GenerateRequestData(HttpContext request, string requestBody)
        {
            var requestUrl = string.Format("{0} {1}", request.Request.Method, request.Request.GetEncodedUrl());
            var requestMessageStr = requestBody;
            string ipAddress = request.Connection.RemoteIpAddress.ToString();
            //string ipAddress = _httpContextAccessor.HttpContext?.Connection?.RemoteIpAddress?.ToString();
            //var context = (HttpContextBase)request.Properties["MS_HttpContext"];
            request.Request.Headers.TryGetValue("UserId", out var userId);
            request.Request.Headers.TryGetValue("ClientType", out var clientName);
            request.Request.Headers.TryGetValue("DeviceId", out var deviceId);
            request.Request.Headers.TryGetValue("Trackid", out var trackid);
            string user = string.Empty;

            // log Data
            var logEntry = new RequestResponseLog()
            {
                UserHostIp = ipAddress,
                RequestURL = requestUrl,
                RequestData = requestMessageStr,
                IdentityUsername = user,
                Timestamp = DateTime.Now,
                ClientUsername = userId,
                ClientType = clientName,
                DeviceId = deviceId,
                Trackid = trackid
            };
            return logEntry;
        }
    }
}
