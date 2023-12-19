using assetmanagement.Interface;
using assetmanagement.Repository;
using assetmanagement.Service;
using Microsoft.AspNetCore.Authentication.AzureAD.UI;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.Azure.KeyVault;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Clients.ActiveDirectory;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.Jwt;
using NSwag;
using NSwag.Generation.Processors.Security;
using Owin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using OpenApiOAuthFlow = NSwag.OpenApiOAuthFlow;
using OpenApiOAuthFlows = NSwag.OpenApiOAuthFlows;
using OpenApiSecurityScheme = NSwag.OpenApiSecurityScheme;

namespace assetmanagement
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }
        // This method gets called by the runtime. Use this method to add services to the container.
        public async void ConfigureServices(IServiceCollection services)
        {
            services.AddSingleton<IConfiguration>(Configuration);
            services.AddControllers()
            .AddJsonOptions(options =>
            {
                options.JsonSerializerOptions.PropertyNamingPolicy = null;
            });
            services.AddMvc(options =>
            {
                options.Filters.Add(new ProducesAttribute("application/json"));
            });

            services.AddCors(option =>
            {
                option.AddPolicy("AllCors", builder =>
                {
                    builder.AllowAnyOrigin();
                    builder.AllowAnyHeader();
                    builder.AllowAnyMethod();
                });
            });

            //services.AddSwaggerDocument();
            services.AddSwaggerDocument(config =>
            {
                config.DocumentName = "OpenAPI 2";
                config.Title = "Mobile Commissioning-SFDC-API-CI";
                //config.OperationProcessors.Add(new OperationSecurityScopeProcessor("oauth2"));
                config.AddSecurity("JWT Token", Enumerable.Empty<string>(),
                    new OpenApiSecurityScheme()
                    {
                        Type = OpenApiSecuritySchemeType.ApiKey,
                        Name = "Authorization",
                        In = OpenApiSecurityApiKeyLocation.Header,
                        Description = "Copy this into the value field: Bearer {token}"
                    }
                );

                config.AddSecurity("oauth2", new OpenApiSecurityScheme()
                {
                    Type = OpenApiSecuritySchemeType.OAuth2,
                    Flows = new OpenApiOAuthFlows()
                    {
                        Implicit = new OpenApiOAuthFlow()
                        {
                            AuthorizationUrl = "https://login.microsoftonline.com/c1eb5112-7946-4c9d-bc57-40040cfe3a91/oauth2/v2.0/authorize",
                            TokenUrl = "https://login.microsoftonline.com/c1eb5112-7946-4c9d-bc57-40040cfe3a91/oauth2/v2.0/token",
                            Scopes = new Dictionary<string, string>
                   {
                               {"8c18bc08-2e94-498e-a609-f5e81ea55ac0/user_impersonation", "Reads" }
                   }
                        }
                    }
                }
                );
                config.OperationProcessors.Add(new OperationSecurityScopeProcessor("oauth2"));
                config.OperationProcessors.Add(new OperationSecurityScopeProcessor("JWT Token"));
            });


            services.AddAuthentication(sharedOptions =>
            {
                sharedOptions.DefaultScheme = AzureADDefaults.AuthenticationScheme;
            }).AddJwtBearer("AzureAD", options =>
            {
                options.Authority = Configuration.GetValue<string>("AzureAD:Instance") + Configuration.GetValue<string>("AzureAD:TenantId");
                options.TokenValidationParameters = new TokenValidationParameters()
                {
                    ValidIssuer = Configuration.GetValue<string>("AzureAD:Issuer"),
                    ValidAudiences = new List<string> { Configuration.GetValue<string>("AzureAD:Audience"), Configuration.GetValue<string>("AzureAD:AudienceenVision") }
                };
            });

            services.AddApplicationInsightsTelemetry(Configuration["APPLICATIONINSIGHTS_CONNECTION_STRING"]);

            //services.AddTransient<RequestBodyLoggingMiddleware>();
            //services.AddTransient<ResponseBodyLoggingMiddleware>();

            InjectDependencies(services);

            // method to get key vault
            var keyVaultClient = new KeyVaultClient(new KeyVaultClient.AuthenticationCallback(
            async (string authority, string resource, string scope) =>
            {
                var authContext = new AuthenticationContext(authority);
                ClientCredential clientCred = new ClientCredential(Configuration.GetValue<string>("AzureKeyVaultClientID"), Configuration.GetValue<string>("AzureKeyVaultClientSecret"));
                AuthenticationResult result = await authContext.AcquireTokenAsync(resource, clientCred);

                if (result == null)
                    throw new InvalidOperationException("Failed to obtain the JWT token");

                return result.AccessToken;
            }
                        ));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            //app.UseRequestBodyLogging();
            //app.UseResponseBodyLogging();
            app.UseCors("AllCors");
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseSwagger();
            app.UseSwaggerUi3(c =>
            {
                c.AdditionalSettings.Add("displayRequestDuration", true);
            });
            app.UseRouting();
            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }

        public void InjectDependencies(IServiceCollection services)
        {
            services.AddSingleton<IUserRepository, UserRepository>();
            services.AddSingleton<IEmailService, EmailService>();
            services.AddSingleton<IAssetRepository, AssetRepository>();
            services.AddSingleton(new HttpClient());
        }
    }
}
