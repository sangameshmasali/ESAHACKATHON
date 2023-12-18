import { AfterViewChecked, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertService } from 'projects/commissioningwebportal-app/src/app/modules';
import { GenericConfigurationService } from '../../../services/generic-configuration.service';
import { SclsdataserviceService } from '../../../services/sclsdataservice.service';

@Component({
  selector: 'app-ab300-reviewandfinalise',
  templateUrl: './ab300-reviewandfinalise.component.html',
  styleUrls: ['./ab300-reviewandfinalise.component.scss']
})
export class AB300ReviewfinaliseComponent implements OnInit, AfterViewChecked {

  ab300reviewfinaliseForm!: FormGroup;
  masterData: any = {};
  masterData$: any = null;
  selectedController: string;
  reviewSummaray: any[];
  reviewPageData: any[];
  isEditFlag: boolean;
  labelObjectMessages: any = {};
  onPageload: boolean = false;
  hideWasherContent: boolean[] = [];
  editedWasherindex: any;
  isCollapsed: boolean;

  constructor(private router: Router, private spinner: NgxSpinnerService, private alert: AlertService,
    private translate: TranslateService, public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private genericConfigurationService: GenericConfigurationService, private sclsdataserviceService: SclsdataserviceService,
    private modalService: NgbModal, private readonly changeDetectorRef: ChangeDetectorRef) {
    this.masterData$ = this.genericConfigurationService.masterData.subscribe(data => {
      if (data) {
        this.selectedController = data?.configurationDetails?.ControllerApplication?.value;
        this.masterData = data;
        this.isEditFlag = this.masterData.isEditFlag;
        this.initializeForm();
        this.reviewSummaray = this.showReviewsummaryData();
      }
    });
  }

  ngOnInit(): void {
    this.translate.setDefaultLang('en-US');
    this.getTranslation();
    let reviewSummarayDetials = this.reviewPageData;
    this.reviewSummaray = reviewSummarayDetials;
  }

  initializeForm() {
    this.ab300reviewfinaliseForm = new FormGroup({
    });
    this.onPageload = true;
    this.selectedController = this.masterData?.configurationDetails?.ControllerApplication?.value;
    if (this.masterData?.watersettings && this.masterData?.hideWasherContent?.length > 1 && this.masterData?.editedWasherindex != 0) {
      for (let i = 0; i <= this.masterData?.watersettings?.length - 1; i++) {
        this.toggleWasher(i);
      }
      this.onPageload = false;
    }
    else {
      this.toggleWasher(0);
      this.onPageload = false;
    }
  }

  showReviewsummaryData(): any {
    let data = this.masterData;
    let arr1 = data.watersettings;
    this.reviewPageData = data.watersettings;
    return arr1;
  }

  ngAfterViewChecked(): void {
    this.changeDetectorRef.detectChanges();
  }

  toggleWasher(i) {
    if (this.onPageload) {
      if (this.masterData?.hideWasherContent && this.masterData?.hideWasherContent[i]) {
        this.hideWasherContent[i] = true;
        return;
      }
      if (this.masterData?.watersettings?.length == 1 || !(this.masterData?.hideWasherContent.length > 1) || this.masterData.editedWasherindex === 0) {
        this.hideWasherContent[0] = true;
        return;
      }
    }
    else {
      this.hideWasherContent[i] = !this.hideWasherContent[i];
      if (this.masterData?.watersettings) {
        for (let i = 0; i <= this.masterData?.watersettings?.length - 1; i++) {
          if (this.hideWasherContent[i]) {
            this.isCollapsed = false;
            break;
          } else {
            this.isCollapsed = true;
          }
        }
      }
      this.updateMasterData();
    }
  }

  //updating masterdata on editing 
  updateMasterData() {
    if (this.masterData?.watersettings?.length == 1 || this.isCollapsed) {
      this.genericConfigurationService.masterData.value.editedWasherindex = 0;
      this.genericConfigurationService.masterData.value.isWasherEdited = false;
    }
    else {
      this.genericConfigurationService.masterData.value.isWasherEdited = true;
      this.genericConfigurationService.masterData.value.editedWasherindex = this.editedWasherindex;
      this.genericConfigurationService.masterData.value.hideWasherContent = this.hideWasherContent;
    }
    this.genericConfigurationService.setLocalStorage(this.genericConfigurationService.masterData.value);
  }

  // Get the tranlation text 
  getTranslation() {
    this.translate.get([
      'createSuccessMessage', 'updateSuccessMessage', 'back', 'CreateConfiguration', 'UpdateConfiguration',
      'Region', 'DateTime', 'Uom', 'Bow', 'TimeZone', 'Type', 'Disinfectant', 'Feeder', 'pHSetpoint', 'DisinfectantSensor',
      'DisinfectantSetpoint', 'FlowMeter', 'pHinOverfeed', 'DisinfectantInOverfeed', 'Aux1', 'FeederType', 'DaysOfWeek',
      'TimeOfDay', 'Duration', 'Aux2'
    ]).subscribe(texts => {
      this.labelObjectMessages = {
        CreateSuccessMessage: texts.createSuccessMessage,
        UpdateSuccessMessage: texts.updateSuccessMessage,
        back: texts.back,
        CreateConfiguration: texts.CreateConfiguration,
        UpdateConfiguration: texts.UpdateConfiguration,
        Region: texts.Region,
        DateTime: texts.DateTime,
        Uom: texts.Uom,
        Bow: texts.Bow,
        TimeZone: texts.TimeZone,
        Type: texts.Type,
        Disinfectant: texts.Disinfectant,
        Feeder: texts.Feeder,
        pHSetpoint: texts.pHSetpoint,
        DisinfectantSensor: texts.DisinfectantSensor,
        DisinfectantSetpoint: texts.DisinfectantSetpoint,
        FlowMeter: texts.FlowMeter,
        pHinOverfeed: texts.pHinOverfeed,
        DisinfectantInOverfeed: texts.DisinfectantInOverfeed,
        Aux1: texts.Aux1,
        FeederType: texts.FeederType,
        DaysOfWeek: texts.DaysOfWeek,
        TimeOfDay: texts.TimeOfDay,
        Duration: texts.Duration,
        Aux2: texts.Aux2
      };
    });
  }

  backToPerviousPage() {
    this.genericConfigurationService.setLocalStorage(this.masterData);
    this.genericConfigurationService.masterData.next(this.masterData);
    this.updateMasterData();
    this.router.navigate([this.genericConfigurationService.routePath.concat('/watersettings')]);
  }

  // Redirect To Save Configurathion page
  redirectoSaveConfigPge() {
    this.router.navigate([this.genericConfigurationService.routePath.concat('/saved-configuration')]);
  }

  // Create Configurations code goes here
  createConfiguration() {
    this.spinner.show();
    // get the user details
    let jsonObj = this.genericConfigurationService.createFinalJsonData(this.masterData);
    this.genericConfigurationService.CreateUpsertConfigFile(jsonObj, this.masterData).subscribe(res => {
      this.spinner.hide();
      if (res) {
        this.redirectoSaveConfigPge();
        if (this.isEditFlag) {
          this.alert.success(this.labelObjectMessages.UpdateSuccessMessage, this.genericConfigurationService.setTimeOutValue, true);
        }
        else {
          this.alert.success(this.labelObjectMessages.CreateSuccessMessage, this.genericConfigurationService.setTimeOutValue, true);
        }
      }
    }, (err: any) => {
      this.alert.error("Something went wrong while saving data", this.genericConfigurationService.setTimeOutValue, true);
      this.spinner.hide();
    });
  }

  //navigate to respected screen on edit button click
  onEditClick(routeTo: any, selectedWasher: any,parentIndex) {
    if (selectedWasher && selectedWasher != '') {
      this.editedWasherindex = selectedWasher;
      this.updateMasterData();
    } else {
      if (routeTo == 'water') {
        this.router.navigate([this.genericConfigurationService.routePath.concat('/watersettings')]);
      }
      if (routeTo == 'controllersetting') {
        this.router.navigate([this.genericConfigurationService.routePath.concat('/controller-productsetting')]);
      }
    }
  }

  getTime(time: any) {
    if (time) {
      let hour = time?.hour?.toString().length == 1 ? '0' + time.hour : time.hour;
      let min = time?.minute?.toString().length == 1 ? '0' + time.minute : time.minute;
      return hour + ':' + min;
    }
    else {
      return "00:00";
    }
  }

  getDays(data: any, auxNum: number) {
    return this.genericConfigurationService.getDays(data, auxNum, false);
  }
}