import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { userProfile } from 'projects/commissioningwebportal-app/src/app/models/user';
import { LoggerService } from '../../../../core';

const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userData= new userProfile();
  userDataFlag: boolean = false;
  constructor(private http: HttpClient,private spinner: NgxSpinnerService, private loggerService:LoggerService) { }

  ngOnInit() {
    this.getUserProfile();
  }

  getUserProfile(){
    this.spinner.show();
    this.loggerService.getUserDetails().subscribe(res=>{
      this.userData = res;
      this.userDataFlag = true;
      this.spinner.hide();
    });
  }

}
