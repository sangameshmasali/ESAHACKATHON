import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlcsPockets, UnitOfMeasure } from 'projects/commissioningwebportal-app/src/assets/data/controller-productsetting';
import { GenericConfigurationService } from '../../../services/generic-configuration.service';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { WashersData } from 'projects/commissioningwebportal-app/src/assets/data';

@Component({
  selector: 'app-alcscontroller-pumpsetting',
  templateUrl: './alcscontroller-pumpsetting.component.html',
  styleUrls: ['./alcscontroller-pumpsetting.component.scss']
})
export class AlcscontrollerPumpsettingComponent implements OnInit {

  alcsControllerForm!: FormGroup;
  unitOfMeasure= UnitOfMeasure;
  selectedController:any;
  masterData :any={};
  isEditFlag:boolean=false;
  hasProductError:boolean=false;
  timer:boolean=false;
  masterData$:any = null;
  popupObjectMessage:any={};
  pumpData: any = {};
  washersData: any = WashersData;
  selectedRegion: string;


  constructor(private fb:FormBuilder, private genericConfigurationService:GenericConfigurationService,
    private router:Router,private translateService:TranslateService) {
      this.masterData$ = this.genericConfigurationService.masterData.subscribe(data => {
        if (data) {
          this.masterData = data;
          this.isEditFlag = this.masterData.isEditFlag;
        }
      });
     }

  ngOnInit(): void {
    this.masterData = this.genericConfigurationService.masterData.getValue();
    this.selectedController = this.masterData?.configurationDetails?.ControllerApplication?.value;
    this.selectedRegion = "NorthAmerica";
    this.Initialization();
    this.translateService.setDefaultLang('en-US');
    this.getTranslation();
  }

  Initialization()
  {
    let data = this.masterData?.controllerProductSettings;
    this.pumpData = this.genericConfigurationService.getRegionBasedData(this.selectedController, this.selectedRegion);
    this.alcsControllerForm = this.fb.group({
      UnitOfMeasure : new FormControl(data?.UnitOfMeasure || this.unitOfMeasure[0].value, Validators.required),
      Timer:new FormControl(data?.Timer || this.timer, Validators.required),
      PumpOne: new FormControl(data?.PumpOne, Validators.required),
      PumpTwo: new FormControl(data?.PumpTwo, Validators.required),
      PumpThree: new FormControl(data?.PumpThree, Validators.required),
      PumpFour: new FormControl(data?.PumpFour),
      PumpFive: new FormControl(data?.PumpFive),
      PumpSix: new FormControl(data?.PumpSix),
    });
    this.setFormValueWithProductItem(data);

    this.alcsControllerForm.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe((data: any) => {
      this.masterData['controllerProductSettings'] = this.alcsControllerForm.value;
      this.genericConfigurationService.setLocalStorage(this.masterData);
    });
  }

  onChangeUnitofMeasure(getUom) {
    this.masterData['controllerProductSettings'] = this.alcsControllerForm.value;
  }

  backtoDetailsPage()
  {
    this.masterData['controllerProductSettings'] = this.alcsControllerForm.value;
    this.genericConfigurationService.setLocalStorage(this.masterData);
    this.genericConfigurationService.masterData.next(this.masterData);
    this.router.navigate([this.genericConfigurationService.routePath.concat('/configuration-details')]);
  }

  navigateToReviewPage() {

  }

  nextPage() {
    this.alcsControllerForm['submitted'] = true;
    if (!this.alcsControllerForm.valid) {
      return;
    }
    this.genericConfigurationService.masterData.value.isWasherEdited = false;
    this.genericConfigurationService.masterData.value.editedWasherindex = 0;
    this.genericConfigurationService.masterData.value.hideWasherContent = [];
    this.masterData['controllerProductSettings'] = this.alcsControllerForm.value;
    this.genericConfigurationService.setLocalStorage(this.masterData);
    this.genericConfigurationService.masterData.next(this.masterData);
  }

  getTranslation() {
    this.translateService.get([
      'ControllerCOnfig', 'Uom', 'Timer', 'Relay', 'Event', 
      'back', "review", "next", "PumpSettings","Mode"
    ]).subscribe(texts => {
      this.popupObjectMessage = {
        back: texts.back,
        review: texts.review,
        next: texts.next,
        ControllerCOnfig:texts.ControllerCOnfig,
        Uom:texts.Uom,
        Timer:texts.Timer,
        Relay:texts.Relay,
        Event:texts.Event,
        PumpSettings:texts.PumpSettings,
        Mode:texts.Mode
      };
    });
  }

  get UnitOfMeasure() {
    return this.alcsControllerForm.get('UnitOfMeasure') as FormControl;
  }
  get Time() {
    return this.alcsControllerForm.get('Time') as FormControl;
  }

  // get product form value
  get PumpOne() {
    return this.alcsControllerForm.get('PumpOne') as FormControl;
  }
  get PumpTwo() {
    return this.alcsControllerForm.get('PumpTwo') as FormControl;
  }
  get PumpThree() {
    return this.alcsControllerForm.get('PumpThree') as FormControl;
  }
  get PumpFour() {
    return this.alcsControllerForm.get('PumpFour') as FormControl;
  }
  get PumpFive() {
    return this.alcsControllerForm.get('PumpFive') as FormControl;
  }
  get PumpSix() {
    return this.alcsControllerForm.get('PumpSix') as FormControl;
  }

  // set the prodcut form value create and edit
  setFormValueWithProductItem(data) {
    this.PumpOne.setValue(data?.PumpOne ? data?.PumpOne : this.GetProductFromDefaultData('Pump1'));
    this.PumpTwo.setValue(data?.PumpTwo ? data?.PumpTwo : this.GetProductFromDefaultData('Pump2'));
    this.PumpThree.setValue(data?.PumpThree ? data?.PumpThree : this.GetProductFromDefaultData('Pump3'));
    this.PumpFour.setValue(data?.PumpFour ? data?.PumpFour : this.GetProductFromDefaultData('Pump4'));
    this.PumpFive.setValue(data?.PumpFive ? data?.PumpFive : this.GetProductFromDefaultData('Pump5'));
    this.PumpSix.setValue(data?.PumpSix ? data?.PumpSix : this.GetProductFromDefaultData('Pump6'));
    this.updateProductName();
  }

  GetProductFromDefaultData(item) {
    let data;
    switch (item?.toLowerCase()) {
      case 'pump1':
        data = this.pumpData?.Pump1[0]
        break;
      case 'pump2':
        data = this.pumpData?.Pump2[0]
        break;
      case 'pump3':
        data = this.pumpData?.Pump3[0]
        break;
      case 'pump4':
        data = this.pumpData?.Pump4[0]
        break;
      case 'pump5':
        data = this.pumpData?.Pump5[0]
        break;
      case 'pump6':
        data = this.pumpData?.Pump6[0]
        break;
    }
    return data;
  }

  updateProductName() {
    let lclsPockets = AlcsPockets;
    lclsPockets.forEach(element => {
      this.updateLocalStorageFormulaProductName(element.id);
    });
  }

  //update local storage for LCLS
  updateLocalStorageFormulaProductName(pocketNumber: number) {
    let lclsPockets = AlcsPockets;
    let pocketNum = lclsPockets?.find(x => x.id === pocketNumber)?.value;
    if (pocketNumber && pocketNumber >= 4 && pocketNum) {
      for (var i = pocketNumber + 1; i <= 6; i++) {
        let pocket = lclsPockets?.find(x => x.id === i)?.value;
        if (pocket) {
          let indexPocket = lclsPockets?.find(x => x.id === pocketNumber)?.value
          if (this[pocketNum].value.value === 'NONE' && (i != pocketNumber + 1) || indexPocket && (this[indexPocket].value.value === 'NONE' || this[indexPocket].value === 'NONE')) {
            let value = this.pumpData.Pump4[0];
            this[pocket].setValue(value);
            this[pocket].disable();
          }
          else {
            let nextPocket = lclsPockets?.find(x => x.id === pocketNumber + 1)?.value
            if (nextPocket)
              this[nextPocket].enable();
          }
        }
      }
    }
  }

  onPocketValueChange(id: number) {
    this.updateLocalStorageFormulaProductName(id);
  }
}
