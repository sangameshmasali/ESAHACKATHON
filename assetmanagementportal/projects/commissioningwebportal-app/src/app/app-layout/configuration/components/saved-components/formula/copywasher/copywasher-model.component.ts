import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from 'projects/commissioningwebportal-app/src/app/shared/confirm-modal/confirm-modal.component';
import { TranslateService } from '@ngx-translate/core';
import { AlertModalComponent } from 'projects/commissioningwebportal-app/src/app/shared/alert-modal/alert-modal.component';

@Component({
  selector: 'app-copywasher-model',
  templateUrl: './copywasher-model.component.html',
  styleUrls: ['./copywasher-model.component.scss']
})
export class CopyWasherModelComponent implements OnInit {
  copyWasherForm!: FormGroup;
  showFormulaName: boolean = false;
  defalutLeninTypeData: any;
  selectedWasher: any=[];
  isConfirmDisabled: boolean = false;
  washers: any[];

  @Input() index: any;
  @Input() washerList: any[];
  @Output() formValue = new EventEmitter();

  popupObjectMessage: any = {};

  constructor(public activeModal: NgbActiveModal, private translate: TranslateService,
    private modalService: NgbModal, private router: Router,
    private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.initializeForm();
    this.translate.setDefaultLang('en-US');
    this.getTranslation();
  }

  initializeForm() {
    this.washers = [];
    for (let i = 0; i < this.washerList.length; i++) {
      if (i != this.index) {
        this.washerList[i].radioChecked = false;
        this.washers.push(this.washerList[i]);
      }
    }
  }

  onChange(id)
  {
    this.washers.forEach(item => {
      //Making check and uncheck on click on radio button 
      if (item.WasherNumber == id) {
          item.selected = item.selected? false:true;
          item.radioChecked = item.radioChecked?false:true;
          if(item.radioChecked)
          {
            this.selectedWasher.push(id);
          }
          if(!item.radioChecked)
          {
            var index = this.selectedWasher.indexOf(id);
            if (index !== -1) {
              this.selectedWasher.splice(index, 1);
            }
          }
      }
    })
    this.washers.find(x=>x.radioChecked === true) ? this.isConfirmDisabled = true :this.isConfirmDisabled = false;
  }

  confirmationClick() {
    let value = {
      index: this.index,
      modifyFormulaValue: this.selectedWasher
    }
    if (value) {
      let toWashers="";
      this.selectedWasher.forEach(element => {
        toWashers += ' Washer '+element+',' ;
      });
      const modalRef = this.modalService.open(AlertModalComponent, { size: 'sm', windowClass: 'el-confirm-modal' });
      modalRef.componentInstance.overRideFormula = this.popupObjectMessage.overRideFormula;
      modalRef.componentInstance.copyWasherAlertMessage = "This action will copy all formulas from " + this.washerList[this.index].WasherName + " to "+toWashers.slice(0,-1);
      modalRef.componentInstance.confirmPopupText = this.popupObjectMessage.confirmPopupText;
      modalRef.result.then(res => {
        if (res) {
          this.activeModal.close(value);
        }
      });
    }
  }

  getTranslation() {
    this.translate.get([
      'alertHeader', 'copyWasherAlertMessage', 'confirmText', 'confirmPopupText','copyWasherSubTitle'
      ,'copyFormulaText','overRideFormula','copyFromText','copyToText'
    ]).subscribe(texts => {
      this.popupObjectMessage = {
        overRideFormula: texts.overRideFormula,
        copyWasherAlertMessage: texts.copyWasherAlertMessage,
        confirmText: texts.confirmText,
        confirmPopupText: texts.confirmPopupText,
        copyWasherSubTitle:texts.copyWasherSubTitle,
        copyFormulaText :texts.copyFormulaText,
        copyFromText : texts.copyFromText,
        copyToText : texts.copyToText
      };
    });
  }
}
