import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormControlDirective, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from 'projects/commissioningwebportal-app/src/app/shared/confirm-modal/confirm-modal.component';
import { GenericConfigurationService } from '../../../../../services/generic-configuration.service';
import { SclsdataserviceService } from '../../../../../services/sclsdataservice.service';
import { TranslateService } from '@ngx-translate/core';
import { CustomValidator } from 'projects/commissioningwebportal-app/src/app/shared';

@Component({
  selector: 'app-addformula-model',
  templateUrl: './addformula-model.component.html',
  styleUrls: ['./addformula-model.component.scss']
})
export class AddformulaModelComponent implements OnInit {

  addFormulaForm!: FormGroup;
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

  popupObjectMessage: any = {};


  constructor(public activeModal: NgbActiveModal, private translate: TranslateService, private modalService: NgbModal, private router: Router,
    private fb: FormBuilder, private genericConfigurationService: GenericConfigurationService, private sclsdataserviceService: SclsdataserviceService) {
    this.defalutLeninTypeData = this.genericConfigurationService.defaultFourmulaData(this.selectedController).DefaultFormulasLeninType.DefaultFormulas;
    this.formulaNameList = this.leninTypeFormulaList();
  }

  ngOnInit(): void {
    console.log(this.selectedController);

    this.initializeForm();
    this.translate.setDefaultLang('en-US');
    this.getTranlsatoin();
  }
  initializeForm() {
    this.defalutLeninTypeData = this.genericConfigurationService.defaultFourmulaData(this.selectedController).DefaultFormulasLeninType.DefaultFormulas;
    this.formulaNameList = this.leninTypeFormulaList();
    this.formulaTypeList = this.genericConfigurationService.formulaType();
    this.formulaNumberList = this.genericConfigurationService.formulaNumber();
    this.addFormulaForm = this.fb.group({
      FormulaType: new FormControl(this.formulaTypeList[0].value, Validators.required),
      FormulaNumber: new FormControl(this.formulaNumberList[0], Validators.required),
      FormulaName: new FormControl(this.formulaNameList, [Validators.required, Validators.pattern(CustomValidator.NoWhitespaceRegExp)])
    });
    this.onChangeFormulaType(this.FormulaType);
  }
  onChangeFormulaType($event) {
    // set null formulaname value whenever change happen
    this.addFormulaForm.controls['FormulaName'].setValue(null);
    if ($event.value == 'LinenType') {
      this.showFormulaName = true;
    }
    else {
      this.showFormulaName = false;
    }
  }
  leninTypeFormulaList() {
    let formData: any = [];
    for (let item of this.defalutLeninTypeData) {
      formData.push(item.FormulaName);
    }
    return formData;
  }


  // Get control value
  get FormulaType() {
    return this.addFormulaForm.get('FormulaType') as FormControl;
  }
  get FormulaNumber() {
    return this.addFormulaForm.get('FormulaNumber') as FormControl;
  }
  get FormulaName() {
    return this.addFormulaForm.get('FormulaName') as FormControl;
  }

  modifyFormula() {

    this.addFormulaForm['submitted'] = true;
    if (!this.addFormulaForm.valid) {
      return;
    }
    // check formula number exit or not
    let value = {
      index: this.index,
      modifyFormulaValue: this.addFormulaForm.value,
    }
    let formulaArray = this.controlValue;
    let selectedFormulaValue = value.modifyFormulaValue.FormulaNumber;
    let filterformulaIndex = {};
    let popupFlag = false;

    let formulaIndex = null;

    // showing popup formula exit or not based on popupFlag 
    formulaArray.forEach((value, index) => {
      if (value.FormulaNumber == selectedFormulaValue) {
        formulaIndex = index;
        if (value.ForumlaName !== '(Unused)') {
          popupFlag = true;
        }
      }
    });

    if (value) {
      if (popupFlag) {
        const modalRef = this.modalService.open(ConfirmModalComponent, { size: 'sm', windowClass: 'el-confirm-modal' });
        modalRef.componentInstance.overRideFormula = this.popupObjectMessage.overRideFormula;
        modalRef.componentInstance.messageText = this.popupObjectMessage.messageText;
        modalRef.componentInstance.confirmText = this.popupObjectMessage.confirmText;
        modalRef.componentInstance.cancelText = this.popupObjectMessage.cancelText;
        modalRef.result.then(res => {
          if (res) {
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
  }

  getTranlsatoin() {
    this.translate.get([
      'overRideFormula', 'messageText', 'confirmText', 'cancelText'
    ]).subscribe(texts => {
      this.popupObjectMessage = {
        overRideFormula: texts.overRideFormula,
        messageText: texts.messageText,
        confirmText: texts.confirmText,
        cancelText: texts.cancelText
      };
    });
  }

  handleSpace(event: any) {
    if (event.target.selectionStart === 0 && event.code === 'Space') {
      event.preventDefault();
    }
  }
}
