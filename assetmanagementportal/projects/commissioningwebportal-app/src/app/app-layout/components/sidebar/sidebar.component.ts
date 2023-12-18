import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { GenericConfigurationService } from '../../configuration/services/generic-configuration.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router, private authService: MsalService, private genericConfigurationService:GenericConfigurationService) { }

  ngOnInit(): void {
  }
  navToWebPortal() {
    this.router.navigate([this.genericConfigurationService.routePath.concat('/saved-configuration')]);
  }

  logOut(){
    this.authService.logoutRedirect()
    localStorage.removeItem('userDetail')
    this.router.navigate(['/']);
  }

}
