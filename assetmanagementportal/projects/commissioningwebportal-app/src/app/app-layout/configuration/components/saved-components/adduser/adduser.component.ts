import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GenericConfigurationService } from '../../../services/generic-configuration.service';
import { ConfirmModalComponent } from 'projects/commissioningwebportal-app/src/app/shared/confirm-modal/confirm-modal.component';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { AlertService } from 'projects/commissioningwebportal-app/src/app/modules';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {
  addEmployee!: FormGroup;
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


  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal,private spinner:NgxSpinnerService,
    private fb: FormBuilder, private genericConfigurationService: GenericConfigurationService, private alert:AlertService,
    private router:Router) {
    
  }

  ngOnInit(): void {
    console.log(this.selectedController);
    console.log(this.assetHeader);

    this.initializeForm();
  }
  initializeForm() {
   
    this.addEmployee = this.fb.group({
      EmployeeId: new FormControl('', Validators.required),
      EmployeeName: new FormControl('', Validators.required),
      Email: new FormControl('', [Validators.required])
    });
  }

  // Get control value
  get EmployeeId() {
    return this.addEmployee.get('FormulaType') as FormControl;
  }
  get EmployeeName() {
    return this.addEmployee.get('FormulaNumber') as FormControl;
  }
  get Email() {
    return this.addEmployee.get('FormulaName') as FormControl;
  }

  addUser() {
    this.addEmployee['submitted'] = true;
    if (!this.addEmployee.valid) {
      return;
     }
    // check formula number exit or not
    let value = {
      userData: this.addEmployee.value,
    }
    let popupFlag = true;
    if (popupFlag) {
      const modalRef = this.modalService.open(ConfirmModalComponent, { size: 'sm', windowClass: 'el-confirm-modal' });
      modalRef.componentInstance.messageText = "Are you proceed for request";
      modalRef.componentInstance.confirmText = "Yes";
      modalRef.componentInstance.cancelText = "Cancel";
      modalRef.result.then(res => {
        if (res) {
          this.spinner.show();
          let jsonObj:any= {
            EmployeeId :this.addEmployee.get('EmployeeId')?.value,
            EmployeeName : this.addEmployee.get('EmployeeName')?.value,
            Email:this.addEmployee.get('Email')?.value,
            IsAdmin:false 
          };
          this.genericConfigurationService.createUser(jsonObj).subscribe(res => {
            this.spinner.hide();
            if (res) {
              this.router.navigate([this.genericConfigurationService.routePath.concat('/user')]);
              this.alert.success("User created successfully", this.genericConfigurationService.setTimeOutValue, true);
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

}
