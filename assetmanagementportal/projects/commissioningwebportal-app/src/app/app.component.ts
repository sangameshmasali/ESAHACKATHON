import { Component, Inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RoutesRecognized } from '@angular/router';
import { MsalBroadcastService, MsalGuardConfiguration, MsalService, MSAL_GUARD_CONFIG } from '@azure/msal-angular';
import { EventMessage, EventType, InteractionStatus, RedirectRequest } from '@azure/msal-browser';
import { filter, Subject, takeUntil } from 'rxjs';
import { GenericConfigurationService } from './app-layout/configuration/services/generic-configuration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(@Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
  private authService: MsalService,
  private msalBroadcastService: MsalBroadcastService, 
  private router:Router,
  private genericConfigurationService:GenericConfigurationService,
  private activatedroute: ActivatedRoute){ 
  }

  title = 'commissioningwebportal-app';
  isIframe = false;
  loginDisplay = false;
  private readonly _destroying$ = new Subject<void>();

  ngOnInit(): void {
    this.isIframe = window !== window.parent && !window.opener;
    this.setLoginDisplay();
    this.msalBroadcastService.msalSubject$
      .pipe(
        filter((msg: EventMessage) => msg.eventType === EventType.ACCOUNT_ADDED || msg.eventType === EventType.ACCOUNT_REMOVED),
      )
      .subscribe((result: EventMessage) => {
        if (this.authService.instance.getAllAccounts().length === 0) {
          window.location.pathname = "/";
        } else {
          this.setLoginDisplay();
        }
      });
    
    this.msalBroadcastService.inProgress$
      .pipe(
        filter((status: InteractionStatus) => status === InteractionStatus.None),
        takeUntil(this._destroying$)
      )
      .subscribe(() => {
        this.setLoginDisplay();
        this.checkAndSetActiveAccount();
        
      })

      //method used make sure user get success state after logged in
      this.authService.instance.addEventCallback((event) => {
        if (event?.eventType === EventType.LOGIN_SUCCESS && event?.payload?.account) {
          let accountDetail =  this.authService.instance.getAllAccounts()[0];
            localStorage.setItem('userDetail',JSON.stringify(accountDetail));
          this.router.navigate([this.genericConfigurationService.routePath.concat('/saved-configuration')]);
   
        }
      });
      
      //calling router event to fetch current route
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          if (this.authService.instance.getAllAccounts().length && event.url =='/') {
            let accountDetail =  this.authService.instance.getAllAccounts()[0];
            localStorage.setItem('userDetail',JSON.stringify(accountDetail));
            this.router.navigate([this.genericConfigurationService.routePath.concat('/saved-configuration')]);
             } 
          }
      });
  }
  

  setLoginDisplay() {
    this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
  }

  checkAndSetActiveAccount(){
    /**
     * If no active account set but there are accounts signed in, sets first account to active account
     * To use active account set here, subscribe to inProgress$ first in your component
     * Note: Basic usage demonstrated. Your app may require more complicated account selection logic
     */
    let activeAccount = this.authService.instance.getActiveAccount();

    if (!activeAccount && this.authService.instance.getAllAccounts().length > 0) {
      let accounts = this.authService.instance.getAllAccounts();
      this.authService.instance.setActiveAccount(accounts[0]);
    }
  }

  ngOnDestroy(): void {
    this._destroying$.next(undefined);
    this._destroying$.complete();
  }

}
