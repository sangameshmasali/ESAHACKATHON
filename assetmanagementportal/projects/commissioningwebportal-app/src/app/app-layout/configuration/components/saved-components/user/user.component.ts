import { NgbActiveModal, NgbModal,NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { userProfile } from 'projects/commissioningwebportal-app/src/app/models/user';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertService } from 'projects/commissioningwebportal-app/src/app/modules/alert/alert.service';
import { ConfirmModalComponent } from 'projects/commissioningwebportal-app/src/app/shared/confirm-modal/confirm-modal.component';
import { LoggerService } from '../../../../core';
import { GenericConfigurationService } from '../../../services/generic-configuration.service';
import { ShareConfigurationModelComponent } from '../../share-configuration/share-configuration.component';
import { flagService } from '../../../services/flag-service';
import { CreateassetComponent } from '../createasset/createasset.component';
import { AdduserComponent } from '../adduser/adduser.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  noConfig: boolean = false;
  userData: userProfile;
  disbaleBtn: boolean = false;
  isEditFlag: boolean = false;
  popupObjectMessage: any = {};
  dateAndTime: any;
  userList:any;


  constructor(private router: Router, public activeModal: NgbActiveModal, private modalService: NgbModal, private genericConfigurationService: GenericConfigurationService, private translate: TranslateService,
    private spinner: NgxSpinnerService, private alert: AlertService, private loggerService: LoggerService,
    private flagService: flagService) { }


  ngOnInit(): void {
    this.getUserList();
    this.translate.setDefaultLang('en-US');
    this.getTranslation();

  }


  // convered Unix epoch time

  converdDateFormat(data) {
    data.forEach((ele, index) => {
      if (ele._ts) {
        let unixTimestamp = ele._ts;
        let milliseconds = unixTimestamp * 1000 // 1575909015000
        let dateObject = new Date(milliseconds)
        data[index]._ts = dateObject;
      }
    });
    return data;
  }

  getUserList() {
    this.spinner.show();
    this.genericConfigurationService.getUserDetails("").subscribe(user => {
      if(user){
        this.userList = user;
      }
      this.spinner.hide();
    })
    this.spinner.hide();
  }

  // Delete the config file

  deleteConfigFiles(userId) {
    const modalRef = this.modalService.open(ConfirmModalComponent, { size: 'sm', windowClass: 'el-confirm-modal' });
    modalRef.componentInstance.messageText = "Are you sure you want to delete this configuration?";
    modalRef.componentInstance.confirmText = this.popupObjectMessage.confirmWithYes;
    modalRef.componentInstance.cancelText = this.popupObjectMessage.cancelText;
    modalRef.result.then(res => {
      if (res) {
        this.spinner.show();
        let reqData: any = userId;
        //let body = { body: reqData };
        this.genericConfigurationService.deleteUser(reqData).subscribe((res) => {
          if (res) {
            this.getUserList();
            this.alert.success(res.body, this.genericConfigurationService.setTimeOutValue, true);
            if (this.userList.length == 0) {
              this.noConfig = true;
            }
            this.spinner.hide();
          }
        }, (err: any) => {
          this.alert.error("Unable to delete file");
          this.spinner.hide();
        });
      }
      else {
        this.activeModal.close(false);
      }
    });
  }

  editConfigFiles(getEditData, passingisEditId) {
    let editConfigObj = this.genericConfigurationService.editConfigJson(getEditData);
    this.genericConfigurationService.masterData.value.configurationDetails = editConfigObj.configurationDetails;
    this.genericConfigurationService.masterData.value.controllerProductSettings = editConfigObj.controllerProductSettings;
    if (editConfigObj.configurationDetails?.ControllerApplication?.value?.toLocaleLowerCase() === 'ab300'){
      this.genericConfigurationService.masterData.value.watersettings = editConfigObj.watersettings;
      this.genericConfigurationService.masterData.value.washersettings = editConfigObj.washersettings;
    }
    else{
      this.genericConfigurationService.masterData.value.washersettings = editConfigObj.washersettings;
      this.genericConfigurationService.masterData.value.watersettings = editConfigObj.watersettings;
    }
    this.genericConfigurationService.masterData.value.formula = editConfigObj.formula;
    this.genericConfigurationService.masterData.value.isEditFlag = true;
    this.genericConfigurationService.masterData.value.storePreviousConfigId = passingisEditId;
    this.genericConfigurationService.masterData.value.OneditStoreSelectedData = editConfigObj;
    this.genericConfigurationService.masterData.value.oNeditStoreSelectedRegion = editConfigObj.controllerProductSettings.Region;
    this.genericConfigurationService.setLocalStorage(this.genericConfigurationService.masterData.value);
    this.genericConfigurationService.masterData.value.isWasherEdited = false;
    this.genericConfigurationService.masterData.value.editedWasherindex = 0;
    this.genericConfigurationService.masterData.value.hideWasherContent = [];
    this.genericConfigurationService.masterData.value.hasProductError = false;
    this.flagService.updateNumero("NO FLAG");
    if (editConfigObj.configurationDetails?.ControllerApplication?.value?.toLocaleLowerCase() === 'ab300')
      this.router.navigate([this.genericConfigurationService.routePath.concat('/ab300-reviewandfinalise')]);
    else
      this.router.navigate([this.genericConfigurationService.routePath.concat('/reviewfinalise')]);

  }

  addUser() {
    const modalRef = this.modalService.open(AdduserComponent, { size: '564' });
    //modalRef.componentInstance.index = i;
    modalRef.componentInstance.assetHeader = "Add New User";
    //modalRef.componentInstance.selectedController = this.selectedController;
    const promise = modalRef.result.then(
      res => {
        this.getUserList();
      },
      dismiss => { }
    );
  }
  getTranslation() {
    this.translate.get([
      'confirmText', 'cancelText', 'confirmWithYes', 'ShareToUsers', 'Name', 'EmailAddress', 'SendInvitation', 'InvalidEmailId', 'TextAreaPlaceHolder'
    ]).subscribe(texts => {
      this.popupObjectMessage = {
        confirmText: texts.confirmText,
        cancelText: texts.cancelText,
        confirmWithYes: texts.confirmWithYes,
        ShareToUsers: texts.ShareToUsers,
        Name: texts.Name,
        EmailAddress: texts.EmailAddress,
        SendInvitation: texts.SendInvitation,
        InvalidEmailId: texts.InvalidEmailId,
        TextAreaPlaceHolder: texts.TextAreaPlaceHolder
      };
    });
  }

  ShareConfiguration(jsonData) {
    this.alert.success("", 0, true);
    let ngbModalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: false
    };
    const modalRef = this.modalService.open(ShareConfigurationModelComponent, ngbModalOptions);
    modalRef.componentInstance.jsonData = jsonData;
    modalRef.componentInstance.ShareToUsers = this.popupObjectMessage.ShareToUsers;
    modalRef.componentInstance.Name = this.popupObjectMessage.Name;
    modalRef.componentInstance.EmailAddress = this.popupObjectMessage.EmailAddress;
    modalRef.componentInstance.SendInvitation = this.popupObjectMessage.SendInvitation;
    modalRef.componentInstance.InvalidEmailId = this.popupObjectMessage.InvalidEmailId;
    modalRef.componentInstance.TextAreaPlaceHolder = this.popupObjectMessage.TextAreaPlaceHolder;
    const promise = modalRef.result.then(
      res => {
        if (res) {
          //this.getPortalConfigFiles();
        }
      },
      dismiss => { }
    );
  }
}
