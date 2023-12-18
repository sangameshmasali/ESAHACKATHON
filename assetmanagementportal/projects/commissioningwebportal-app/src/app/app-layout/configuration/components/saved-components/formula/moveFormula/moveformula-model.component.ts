import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from 'projects/commissioningwebportal-app/src/app/shared/confirm-modal/confirm-modal.component';
import { TranslateService } from '@ngx-translate/core';
import { AlertModalComponent } from 'projects/commissioningwebportal-app/src/app/shared/alert-modal/alert-modal.component';
import { GenericConfigurationService } from '../../../../services/generic-configuration.service';
import { SclsdataserviceService } from '../../../../services/sclsdataservice.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-moveformula-model',
    templateUrl: './moveformula-model.component.html',
    styleUrls: ['./moveformula-model.component.scss']
})
export class MoveFormulaModelComponent implements OnInit {
    moveFormulaForm!: FormGroup;
    formulaTypeList: any[];
    positionList: any[];
    formulaNumberList: any[];
    nonSelectedformulaList: any[];
    isFormulaSelected: boolean = false;
    updatedFormulaList: any =[];
    disableBtn: boolean;

    @Input() index: any;
    @Output() formValue = new EventEmitter();
    @Input() formulaList: any[];
    popupObjectMessage: any = {};

    constructor(public activeModal: NgbActiveModal, private translate: TranslateService, private modalService: NgbModal, private router: Router,
        private fb: FormBuilder, private genericConfigurationService: GenericConfigurationService, private sclsdataserviceService: SclsdataserviceService) {
    }

    ngOnInit(): void {
        this.initializeForm();
        this.translate.setDefaultLang('en-US');
        this.getTranlsatoin();
    }

    initializeForm() {
        this.formulaNumberList = this.formulaList;
        if (this.formulaNumberList.length > 1) {
            this.disableBtn = false;
        } else {
            this.disableBtn = true;
        }
        this.positionList = this.sclsdataserviceService.positionList();
    }

    getTranlsatoin() {
        this.translate.get([
            'overRideFormula', 'messageText', 'confirmText', 'cancelText','headerReorderFormula','subheaderReorderFormula'
        ]).subscribe(texts => {
            this.popupObjectMessage = {
                overRideFormula: texts.overRideFormula,
                messageText: texts.messageText,
                confirmText: texts.confirmText,
                cancelText: texts.cancelText,
                headerReorderFormula:texts.headerReorderFormula,
                subheaderReorderFormula : texts.subheaderReorderFormula

            };
        });
    }
    
//event trigger on drag and drop
    onDrop(event: CdkDragDrop<string[]>) {
        if (event.previousContainer === event.container) {
          moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
          this.updatedFormulaList = event.container.data;
        } else {
          transferArrayItem(event.previousContainer.data,
            event.container.data,
            event.previousIndex,
            event.currentIndex);
        }
      }
      
      onApplyClick()
      {
        if(this.updatedFormulaList != null)
        {
            this.formValue.emit(this.updatedFormulaList);
            this.activeModal.close();
        }
      }
}