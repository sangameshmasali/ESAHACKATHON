import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GenericConfigurationService } from '../../../services/generic-configuration.service';
import { ConfirmModalComponent } from 'projects/commissioningwebportal-app/src/app/shared/confirm-modal/confirm-modal.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { AlertService } from 'projects/commissioningwebportal-app/src/app/modules';

@Component({
  selector: 'app-createasset',
  templateUrl: './createasset.component.html',
  styleUrls: ['./createasset.component.scss']
})
export class CreateassetComponent implements OnInit {

  addAssetForm!: FormGroup;
  formulaTypeList: any[];
  formulaNumberList: any[];
  formulaNameList: any;
  showFormulaName: boolean = false;
  defalutLeninTypeData: any;


  @Input() index: any;
  @Output() formValue = new EventEmitter();
  @Input() i: any;
  @Input() controlValue: any;
  IsInvalid: boolean = false;
  @Input() selectedController: any;
  @Input() assetHeader:string;
  @Input() assetList:any;

  popupObjectMessage: any = {};


  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal,
    private fb: FormBuilder, private genericConfigurationService: GenericConfigurationService,
    private spinner:NgxSpinnerService, private router:Router, private alert:AlertService) {
  }

  ngOnInit(): void {
    console.log(this.selectedController);

    this.initializeForm();
  }
  initializeForm() {
    this.addAssetForm = this.fb.group({
      AssetName: new FormControl('', Validators.required),
      UniqueIdentifier: new FormControl('', Validators.required),
    });
  }
  // Get control value
  get AssetName() {
    return this.addAssetForm.get('AssetName') as FormControl;
  }
  get UniqueIdentifier() {
    return this.addAssetForm.get('UniqueIdentifier') as FormControl;
  }

  createAsset() {
    this.addAssetForm['submitted'] = true;
    if (!this.addAssetForm.valid) {
      return;
    }
    let value :any={
      data:this.addAssetForm.value
    };
    // check formula number exit or not
    let popupFlag = true;
    if (popupFlag) {
      const modalRef = this.modalService.open(ConfirmModalComponent, { size: 'sm', windowClass: 'el-confirm-modal' });
      modalRef.componentInstance.messageText = "Are you proceed for request";
      modalRef.componentInstance.confirmText = "Yes";
      modalRef.componentInstance.cancelText = "Cancel";
      modalRef.result.then(res => {
        if (res) {
          let jsonObj:any= {
            AssetName :this.addAssetForm.get('AssetName')?.value,
            UniqueIdentifier : this.addAssetForm.get('UniqueIdentifier')?.value,
          };
          this.genericConfigurationService.createAsset(jsonObj).subscribe(res => {
            this.spinner.hide();
            if (res) {
              this.router.navigate([this.genericConfigurationService.routePath.concat('/saved-configuration')]);
              this.alert.success("Asset created successfully", this.genericConfigurationService.setTimeOutValue, true);
            }
          }, (err: any) => {
            console.log(err);
            this.alert.error("Something went wrong while saving data", this.genericConfigurationService.setTimeOutValue, true);
            this.spinner.hide();
          });
          this.activeModal.close(value);
        }
        else {
          this.activeModal.close();
        }
      });
    }
    else {
      this.activeModal.close(value);
    }

  }

  handleSpace(event: any) {
    if (event.target.selectionStart === 0 && event.code === 'Space') {
      event.preventDefault();
    }
  }
}
