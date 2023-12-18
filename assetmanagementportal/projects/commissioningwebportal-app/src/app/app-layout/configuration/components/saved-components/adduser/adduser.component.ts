import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GenericConfigurationService } from '../../../services/generic-configuration.service';
import { ConfirmModalComponent } from 'projects/commissioningwebportal-app/src/app/shared/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {
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
  @Input() assetHeader:string;

  popupObjectMessage: any = {};


  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal,
    private fb: FormBuilder, private genericConfigurationService: GenericConfigurationService) {
    this.defalutLeninTypeData = this.genericConfigurationService.defaultFourmulaData(this.selectedController).DefaultFormulasLeninType.DefaultFormulas;
    this.formulaNameList = this.leninTypeFormulaList();
  }

  ngOnInit(): void {
    console.log(this.selectedController);

    this.initializeForm();
  }
  initializeForm() {
    this.defalutLeninTypeData = this.genericConfigurationService.defaultFourmulaData(this.selectedController).DefaultFormulasLeninType.DefaultFormulas;
    this.formulaNameList = this.leninTypeFormulaList();
    this.formulaTypeList = this.genericConfigurationService.formulaType();
    this.formulaNumberList = this.genericConfigurationService.formulaNumber();
    this.addFormulaForm = this.fb.group({
      FormulaType: new FormControl(this.formulaTypeList[0].value, Validators.required),
      FormulaNumber: new FormControl(this.formulaNumberList[0], Validators.required),
      FormulaName: new FormControl(this.formulaNameList, [Validators.required])
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

  requestAsset() {
    this.addFormulaForm['submitted'] = true;
    // if (!this.addFormulaForm.valid) {
    //   return;
    // }
    // check formula number exit or not
    let value = {
      index: this.index,
      modifyFormulaValue: this.addFormulaForm.value,
    }
    let formulaArray = this.controlValue;
    let selectedFormulaValue = value.modifyFormulaValue.FormulaNumber;
    let filterformulaIndex = {};
    let popupFlag = true;

    if (popupFlag) {
      const modalRef = this.modalService.open(ConfirmModalComponent, { size: 'sm', windowClass: 'el-confirm-modal' });
      modalRef.componentInstance.messageText = "Are you proceed for request";
      modalRef.componentInstance.confirmText = "Yes";
      modalRef.componentInstance.cancelText = "Cancel";
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

  handleSpace(event: any) {
    if (event.target.selectionStart === 0 && event.code === 'Space') {
      event.preventDefault();
    }
  }

}
