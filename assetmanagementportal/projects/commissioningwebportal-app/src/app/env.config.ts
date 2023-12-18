import { InjectionToken, Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { MsalGuardConfiguration, MsalInterceptorConfiguration } from "@azure/msal-angular";
import { BrowserCacheLocation, InteractionType, IPublicClientApplication, LogLevel, PublicClientApplication } from "@azure/msal-browser";


// API url provider
@Injectable()
export class BaseAPIService {
  public baseCommissoioningwebApi: string = environment.baseCommissoioningwebApi;
}
export const BASE_API_PROVIDER = new InjectionToken<BaseAPIService>(
  'BASE_API_PROVIDER'
);
export const BaseApiProvider = {
  provide: BASE_API_PROVIDER,
  useClass: BaseAPIService
};

// common global configs
@Injectable()
export class BaseConfigProvider {

}
export const BASE_CONFIG_PROVIDER = new InjectionToken<BaseConfigProvider>(
  'BASE_CONFIG_PROVIDER'
);
export const BaseConfiguration = {
  provide: BASE_CONFIG_PROVIDER,
  useClass: BaseConfigProvider
};

// MSAL auth config factory methods
const isIE = window.navigator.userAgent.indexOf("MSIE ") > -1 || window.navigator.userAgent.indexOf("Trident/") > -1;

export function MSALInstanceFactory(): IPublicClientApplication {
     return new PublicClientApplication({
       auth: {
         clientId: '8c18bc08-2e94-498e-a609-f5e81ea55ac0',
         authority: 'https://login.microsoftonline.com/c1eb5112-7946-4c9d-bc57-40040cfe3a91',
         redirectUri: environment.appRedirectUri,
         postLogoutRedirectUri: '/'
       },
       cache: {
         cacheLocation: BrowserCacheLocation.LocalStorage,
         storeAuthStateInCookie: isIE, // set to true for IE 11. Remove this line to use Angular Universal
       },
       system: {
         loggerOptions: {
           loggerCallback,
           logLevel: LogLevel.Info,
           piiLoggingEnabled: false
         }
       }
     });
   }

    export function loggerCallback(logLevel: LogLevel, message: string) {
     console.log(message);
   }

   
export function MSALInterceptorConfigFactory(): MsalInterceptorConfiguration {
const protectedResourceMap = new Map<string, Array<string>>();
protectedResourceMap.set('https://graph.microsoft.com/v1.0/me', ['user.read']); // Prod environment. Uncomment to use.
protectedResourceMap.set('', ['8c18bc08-2e94-498e-a609-f5e81ea55ac0/user_impersonation']);
return {
 interactionType: InteractionType.Redirect,
 protectedResourceMap
};
}

export function MSALGuardConfigFactory(): MsalGuardConfiguration {
return { 
 interactionType: InteractionType.Redirect,
 authRequest: {
   scopes: ['user.read']
 },
 loginFailedRoute: '/login-failed'
};
}