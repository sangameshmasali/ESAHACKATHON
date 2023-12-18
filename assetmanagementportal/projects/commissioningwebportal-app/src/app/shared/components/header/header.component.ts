import { Component, OnInit } from '@angular/core';
import { Router, Event, ActivatedRoute } from '@angular/router';
import { GenericConfigurationService } from '../../../app-layout/configuration/services/generic-configuration.service';
import { flagService } from '../../../app-layout/configuration/services/flag-service';
import { WashersData } from 'projects/commissioningwebportal-app/src/assets/data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  detailsPage: boolean = false;
  controllerSettingPage: boolean = false;
  washerSettingPage: boolean = false;
  formulaPage: boolean = false;
  reviewFinalize: boolean = false;
  editConfig: boolean = false
  masterData: any = {};
  masterData$: any = null;
  isEditFlag: boolean;
  storePreviousConfigId = null;
  flag$: any = null;
  flag: any = "";
  selectedController: any;
  washersData: any = WashersData;


  constructor(private activatedroute: ActivatedRoute,
    private router: Router, private genericConfigurationService: GenericConfigurationService,
    private FlagService: flagService) {
    this.masterData$ = this.genericConfigurationService.masterData.subscribe(data => {
      if (data) {
        this.masterData = data;
        this.isEditFlag = this.masterData.isEditFlag;
        this.storePreviousConfigId = this.masterData.storePreviousConfigId;
      }
    })
    this.flag$ = this.FlagService.flag$.subscribe(data => {
      this.flag = data;
    })
    this.selectedController = this.masterData?.configurationDetails?.ControllerApplication?.value?.toLocaleLowerCase();

    let currentUrl = activatedroute.snapshot.routeConfig?.path;

    if (this.isEditFlag && this.storePreviousConfigId != null) {
      this.detailsPage = true;
      this.controllerSettingPage = true;
      this.washerSettingPage = true;
      this.formulaPage = true;
      this.reviewFinalize = true;
      this.editConfig = true;
      //This is to alert the user on invalid formula and redirect to formula list page
      if (this.flag != 'NO FLAG') {
        if (currentUrl == 'reviewfinalise') {
          alert(this.flag);
          this.router.navigate([this.genericConfigurationService.routePath.concat('/formula')]);
        }
        if (currentUrl == 'ab300-reviewandfinalise') {
          alert(this.flag);
          this.router.navigate([this.genericConfigurationService.routePath.concat('/watersettings')]);
        }
      }
    }
    else {
      if (currentUrl == "configuration-details") {
        this.detailsPage = true;
      }
      else if (currentUrl == "controller-productsetting") {
        this.detailsPage = true;
        this.controllerSettingPage = true;
      }
      else if (currentUrl == "alcscontroller-pumpsetting") {
        this.detailsPage = true;
        this.controllerSettingPage = true;
      }
      else if (currentUrl == "washersettings") {
        this.detailsPage = true;
        this.controllerSettingPage = true;
        this.washerSettingPage = true;
      }
      else if (currentUrl == "watersettings") {
        this.detailsPage = true;
        this.controllerSettingPage = true;
        this.washerSettingPage = true;
      }
      else if (this.selectedController.toLocaleLowerCase() != this.washersData.find(x => x.id === 3).value && currentUrl == "formula") {
        this.detailsPage = true;
        this.controllerSettingPage = true;
        this.washerSettingPage = true;
        this.formulaPage = true;
      }
      else if (this.selectedController.toLocaleLowerCase() != this.washersData.find(x => x.id === 3).value && currentUrl == "reviewfinalise") {
        this.detailsPage = true;
        this.controllerSettingPage = true;
        this.washerSettingPage = true;
        this.formulaPage = true;
        this.reviewFinalize = true;
        this.editConfig = false;
      }
      else if (currentUrl == "ab300-reviewandfinalise") {
        this.detailsPage = true;
        this.controllerSettingPage = true;
        this.washerSettingPage = true;
        this.formulaPage = true;
        this.reviewFinalize = true;
        this.editConfig = false;
      }
    }
  }

  ngOnInit(): void {

  }
}
