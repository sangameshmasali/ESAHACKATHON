import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { userProfile } from 'projects/commissioningwebportal-app/src/app/models/user';
import { AlertService } from 'projects/commissioningwebportal-app/src/app/modules/alert/alert.service';
import { ConfirmModalComponent } from 'projects/commissioningwebportal-app/src/app/shared/confirm-modal/confirm-modal.component';
import { LoggerService } from '../../../../core';
import { GenericConfigurationService } from '../../../services/generic-configuration.service';
import { ShareConfigurationModelComponent } from '../../share-configuration/share-configuration.component';
import { flagService } from '../../../services/flag-service';
import { CreateassetComponent } from '../createasset/createasset.component';
import { AssetrequestmodelComponent } from '../assetrequestmodel/assetrequestmodel.component';

@Component({
  selector: 'app-saved-configuration',
  templateUrl: './saved-configuration.component.html',
  styleUrls: ['./saved-configuration.component.scss']
})
export class SavedConfigurationComponent implements OnInit {

  portalConfigData: any;
  noConfig: boolean = false;
  userData: userProfile;
  disbaleBtn: boolean = false;
  isEditFlag: boolean = false;
  popupObjectMessage: any = {};
  dateAndTime: any;


  constructor(private router: Router, public activeModal: NgbActiveModal, private modalService: NgbModal, private genericConfigurationService: GenericConfigurationService, private translate: TranslateService,
    private spinner: NgxSpinnerService, private alert: AlertService, private loggerService: LoggerService,
    private flagService: flagService) { }


  ngOnInit(): void {
    this.getPortalConfigFiles();
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

  getPortalConfigFiles() {
    this.spinner.show();
    let userEmail = '';
    this.loggerService.getUserDetails().subscribe(res => {
      if (res) {
        userEmail = res.mail;
    
      }
    });


  }

  // Delete the config file

  deleteConfigFiles(getConfigId) {
    const modalRef = this.modalService.open(ConfirmModalComponent, { size: 'sm', windowClass: 'el-confirm-modal' });
    modalRef.componentInstance.messageText = "Are you sure you want to delete this configuration?";
    modalRef.componentInstance.confirmText = this.popupObjectMessage.confirmWithYes;
    modalRef.componentInstance.cancelText = this.popupObjectMessage.cancelText;
    modalRef.result.then(res => {
      if (res) {
        this.spinner.show();
        let reqData: any = {
          Id: getConfigId
        };
        let body = { body: reqData };
        this.genericConfigurationService.deleteUpsertConfigFile(body).subscribe((res) => {
          if (res) {
            this.portalConfigData = this.portalConfigData.filter(o => o.id !== getConfigId);
            this.alert.success(res, this.genericConfigurationService.setTimeOutValue, true);
            if (this.portalConfigData.length == 0) {
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

  fetchAssetHistory(asset, assetId) {
    this.genericConfigurationService.getAssetHostory(assetId).subscribe(res => {
      if (res) {
        this.genericConfigurationService.masterData.value.AssetHistory = res.body;
      }
    },(err: any) => {
      this.noConfig = true;
      this.spinner.hide();
    });
      this.router.navigate([this.genericConfigurationService.routePath.concat('/assethistory')]);
  }

  addAsset() {
    const modalRef = this.modalService.open(CreateassetComponent, { size: '564' });
    //modalRef.componentInstance.index = i;
    modalRef.componentInstance.assetHeader = "Create New Asset";
    //modalRef.componentInstance.selectedController = this.selectedController;
    const promise = modalRef.result.then(
      res => {
        if (res) {
        }
      },
      dismiss => { }
    );
  }

  assetRequest() {
    const modalRef = this.modalService.open(AssetrequestmodelComponent, { size: '564' });
    //modalRef.componentInstance.index = i;
    modalRef.componentInstance.assetHeader = "Asset Request";
    //modalRef.componentInstance.selectedController = this.selectedController;
    const promise = modalRef.result.then(
      res => {
        if (res) {
        }
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
          this.getPortalConfigFiles();
        }
      },
      dismiss => { }
    );
  }
}
