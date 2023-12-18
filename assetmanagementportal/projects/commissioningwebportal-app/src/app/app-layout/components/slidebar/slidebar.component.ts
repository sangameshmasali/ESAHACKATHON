import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { GenericConfigurationService } from '../../configuration/services/generic-configuration.service';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
    selector: 'app-slidebar',
    templateUrl: './slidebar.component.html',
    styleUrls: ['./slidebar.component.scss']

})
export class SlideBarComponent implements AfterViewInit, OnInit {
    collapse = false;
    @ViewChild(MatSidenav)
    sidenav: MatSidenav;
    hideMobile: boolean = false;

    constructor(private router: Router, private authService: MsalService,
        private breakpointObserver: BreakpointObserver,
        private genericConfigurationService: GenericConfigurationService,
        private cd:ChangeDetectorRef) { }

    ngOnInit(): void {
       
    }

    toggleSidebar() {
        this.collapse = !this.collapse;
    }
    ngAfterViewInit(){
        this.breakpointObserver
        .observe(['(max-width: 1023px)'])
        .subscribe((state: BreakpointState) => {
            if(state.matches){
                this.sidenav.mode='over'
                this.sidenav.close();
                this.hideMobile = false;
            }
            else{
                this.sidenav.mode='side'
                this.sidenav.open();
                this.hideMobile = true;
            }
        });
        this.cd.detectChanges();
    }
    
    navToWebPortal() {
        this.router.navigate([this.genericConfigurationService.routePath.concat('/saved-configuration')]);
        if(this.sidenav.mode =='over'){
        this.collapse = this.collapse;
        this.sidenav.close();
        }else{
            //this.collapse = !this.collapse;
        }
    }

    profileClick(){
        if(this.sidenav.mode =='over'){
            this.collapse = !this.collapse;
            this.sidenav.close();
        }else{
            this.collapse = !!this.collapse
        }
    }

    logOut() {
        this.authService.logoutRedirect()
        localStorage.removeItem('userDetail')
        this.router.navigate(['/']);
    }
}