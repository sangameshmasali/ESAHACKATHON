import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdvanceSignalMode, RevertFormulas, SignalMode, WashersData } from 'projects/commissioningwebportal-app/src/assets/data/washersettings';
import { GenericConfigurationService } from '../../../services/generic-configuration.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { SclsdataserviceService } from '../../../services/sclsdataservice.service';
import { TranslateService } from '@ngx-translate/core';
import { LclsPockets, PocketNames, SclsRegion } from 'projects/commissioningwebportal-app/src/assets/data';


@Component({
  selector: 'app-washersettings',
  templateUrl: './washersettings.component.html',
  styleUrls: ['./washersettings.component.scss']
})
export class WashersettingsComponent implements OnInit {
  washerSettingsForm!: FormGroup;

  masterData: any = {};
  masterData$: any = null;

  signalFilterTimeSec: any = [];
  postFlushTime: any = [];
  revertFormula: any = RevertFormulas;
  loadCapacityLbOrKg: any = [];
  signalMode: any = SignalMode;
  advanceSingnalMode: any = AdvanceSignalMode;
  selectedUniteofMeasure: any;
  openIndex: number = 0;
  capacityValue: any = [];
  isEditFlag: boolean;
  naValue: any;
  hideWasherContent: boolean[] = [];
  onPageload: boolean = false;
  editedWasherindex: number;
  isCollapsed: boolean;
  oNeditStoreSelectedRegion: string;
  OneditStoreSelectedData: any;
  popupObjectMessage: any = {};
  washersData: any = WashersData;
  maxLength: number;
  selectedController: string;
  selectedSignalMode: string;
  hasProductError: boolean = false;
  regionSlected: any = null;
  sclsRegions: any = SclsRegion;
  pocketNames = PocketNames;

  constructor(private router: Router,
    private fb: FormBuilder,
    private genericConfigurationService: GenericConfigurationService, private sclsdataserviceService: SclsdataserviceService, private translate: TranslateService,) {
    this.masterData$ = this.genericConfigurationService.masterData.subscribe(data => {
      if (data) {
        this.masterData = data;
        this.isEditFlag = this.masterData.isEditFlag;
        this.initializeForm();
        this.capacityBasedOnUnitOfMeasure();
        this.naValue = this.genericConfigurationService.notAValue[0].value;
        this.oNeditStoreSelectedRegion = JSON.parse(JSON.stringify(this.masterData.oNeditStoreSelectedRegion));
        this.OneditStoreSelectedData = JSON.parse(JSON.stringify(this.masterData.OneditStoreSelectedData));
      }
    });
    this.postFlushTime = this.sclsdataserviceService.postflushTimeData();
    this.signalFilterTimeSec = this.sclsdataserviceService.signalFilterTimeData();
  }

  ngOnInit(): void {
    this.initializeForm();
    this.translate.setDefaultLang('en-US');
    this.getTranslation();
  }

  initializeForm() {
    this.selectedController = this.masterData?.configurationDetails?.ControllerApplication?.value?.toLocaleLowerCase();
    this.regionSlected = this.genericConfigurationService.getRegionName();
    this.maxLength = this.washersData.find(x => x.value === this.selectedController).maxLength;
    this.washerSettingsForm = new FormGroup({
      getWasherControlsArray: this.fb.array(this.createWasherItem())
    });
    this.washerSettingsForm;
    this.onPageload = true;
    this.washerSettingsForm.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe((data: any) => {
      this.masterData['washersettings'] = this.washerSettingsForm.value.getWasherControlsArray;
      this.genericConfigurationService.setLocalStorage(this.masterData);
    });
    if (this.masterData?.washersettings && this.masterData?.hideWasherContent?.length > 1 && this.masterData?.editedWasherindex != 0) {
      for (let i = 0; i <= this.masterData?.washersettings?.length - 1; i++) {
        this.toggleWasher(i);
      }
      this.onPageload = false;
    }
    else {
      this.toggleWasher(0);
      this.onPageload = false;
    }
    if (this.isEditFlag) {
      this.hasProductError = this.genericConfigurationService.isProductDataValid(this.selectedController, this.masterData?.controllerProductSettings?.Region, this.masterData);
    }
  }

  getTranslation() {
    this.translate.get([
      'washerCapacityToolTip', 'AdvancedSignalModeToolTip'
    ]).subscribe(texts => {
      this.popupObjectMessage = {
        washerCapacityToolTip: texts.washerCapacityToolTip,
        AdvancedSignalModeToolTip: texts.AdvancedSignalModeToolTip
      };
    });
  }

  createWasherItem() {
    let formData: any = [];
    let data = this.masterData?.washersettings;
    if (data) {
      for (let eachData of data) {
        this.selectedSignalMode = eachData.SignalMode.value;
        let capacity;
        if (eachData?.Capacity) {
          capacity = this.getCapacity(eachData?.Capacity);
        }
        let formObj = this.fb.group({
          WasherNumber: new FormControl(eachData?.WasherNumber || 1, Validators.required),
          WasherName: new FormControl(eachData?.WasherName || 'Washer 1', Validators.required),
          Capacity: new FormControl(capacity || this.addCapacity(), Validators.required),
          SignalMode: new FormControl(eachData?.SignalMode || this.signalMode[0], Validators.required),
          RevertFormula: new FormControl(eachData?.RevertFormula || this.revertFormula[this.washersData.find(x => x.value === this.selectedController).revertFormulaDefaultId], Validators.required),
          PostFlushTime: new FormControl(eachData?.PostFlushTime || this.postFlushTime[29], Validators.required),
          AdvancedSignalMode: new FormControl(this.selectedSignalMode == 'Standard' ? this.genericConfigurationService?.notAValue[0].value : eachData?.AdvancedSignalMode, Validators.required),
          SignalFilterTime: new FormControl(eachData?.SignalFilterTime || this.signalFilterTimeSec[1], Validators.required)
        })
        formData.push(formObj);
      }
    }
    else {
      this.selectedSignalMode = data?.SignalMode;
      let capacity;
      if (data?.Capacity) {
        capacity = this.getCapacity(data?.Capacity);
      }
      let formObj = this.fb.group({
        WasherNumber: new FormControl(data?.WasherNumber || 1, Validators.required),
        WasherName: new FormControl(data?.WasherName || 'Washer 1', Validators.required),
        Capacity: new FormControl(capacity || this.addCapacity(), Validators.required),
        SignalMode: new FormControl(data?.SignalMode || this.signalMode[0], Validators.required),
        RevertFormula: new FormControl(data?.RevertFormula || this.revertFormula[this.washersData.find(x => x.value === this.selectedController).revertFormulaDefaultId], Validators.required),
        PostFlushTime: new FormControl(data?.PostFlushTime || this.postFlushTime[29], Validators.required),
        AdvancedSignalMode: new FormControl(data?.AdvancedSignalMode || this.genericConfigurationService?.notAValue[0].value, Validators.required),
        SignalFilterTime: new FormControl(data?.SignalFilterTime || this.signalFilterTimeSec[1], Validators.required)
      });
      formData.push(formObj);
    }
    return formData;
  }

  createWasherForm() {
    return this.fb.group({
      WasherNumber: new FormControl(this.getWasherControlsArray.length + 1, Validators.required),
      WasherName: new FormControl(`Washer ${this.getWasherControlsArray.length + 1}`, Validators.required),
      Capacity: new FormControl(this.addCapacity(), Validators.required),
      SignalMode: new FormControl(this.signalMode[0], Validators.required),
      RevertFormula: new FormControl(this.revertFormula[this.washersData.find(x => x.value === this.selectedController).revertFormulaDefaultId], Validators.required),
      PostFlushTime: new FormControl(this.postFlushTime[29], Validators.required),
      AdvancedSignalMode: new FormControl(this.genericConfigurationService?.notAValue[0].value, Validators.required),
      SignalFilterTime: new FormControl(this.signalFilterTimeSec[1], Validators.required)
    });
  }

  copyWasherForm(copyForm) {
    return this.fb.group({
      WasherNumber: new FormControl(this.getWasherControlsArray.length + 1, Validators.required),
      WasherName: new FormControl(`Washer ${this.getWasherControlsArray.length + 1}`, Validators.required),
      Capacity: new FormControl(copyForm.value.Capacity, Validators.required),
      SignalMode: new FormControl(copyForm.value.SignalMode, Validators.required),
      RevertFormula: new FormControl(copyForm.value.RevertFormula, Validators.required),
      PostFlushTime: new FormControl(copyForm.value.PostFlushTime, Validators.required),
      AdvancedSignalMode: new FormControl(copyForm.value.AdvancedSignalMode, Validators.required),
      SignalFilterTime: new FormControl(copyForm.value.SignalFilterTime, Validators.required)
    });
  }

  removeWasher(index) {
    this.getWasherControlsArray.removeAt(index);
    for (let item in this.getWasherControlsArray.controls) {
      (this.washerSettingsForm.get('getWasherControlsArray') as FormArray).at(parseInt(item)).get('WasherNumber')?.patchValue(parseInt(item) + 1);
      (this.washerSettingsForm.get('getWasherControlsArray') as FormArray).at(parseInt(item)).get('WasherName')?.patchValue(`Washer ${parseInt(item) + 1}`);
    }
    if (this.masterData.hasOwnProperty('formula')) {
      this.masterData?.formula?.splice(index, 1);
      let indexRemoval = this.hideWasherContent.indexOf(index);
      this.hideWasherContent.splice(indexRemoval, 1);
    }
    if (!(this.getWasherControlsArray.length > 1)) {
      this.hideWasherContent[0] = true;
    }
  }

  toggleWasher(i) {
    if (this.onPageload) {
      if (this.masterData?.hideWasherContent && this.masterData?.hideWasherContent[i]) {
        this.hideWasherContent[i] = true;
        return;
      }
      if (this.masterData?.washersettings?.length == 1 || !(this.masterData?.hideWasherContent?.length > 1) || this.masterData?.editedWasherindex === 0) {
        this.hideWasherContent[0] = true;
        return;
      }
    }
    else {
      this.hideWasherContent[i] = !this.hideWasherContent[i];
      if (this.masterData?.washersettings) {
        for (let i = 0; i <= this.masterData?.washersettings?.length - 1; i++) {
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

  navigateToReviewPage() {
    this.washerSettingsForm['submitted'] = true;
    if (!this.washerSettingsForm.valid) {
      return;
    }
    this.genericConfigurationService.navigateToReviewPage(this.selectedController);
  }

  addAndCopyWasher(index, isWasherCopy) {
    if (this.getWasherControlsArray.length <= this.maxLength) {
      this.toggleWasher(this.getWasherControlsArray.length);
      if (index < 0) {
        this.getWasherControlsArray.push(this.createWasherForm());
        this.setAdvanceSignalModeValue(this.getWasherControlsArray.length - 1);
      }
      else {
        this.getWasherControlsArray.push(this.copyWasherForm(this.getWasherControlsArray.controls[index]));
      }
      if (this.isEditFlag) {
        this.addWasherNew(index, isWasherCopy);
      }
      this.hideWasherContent[index] = true;
    }
  }

  // Added code for add the washer with default formula
  addWasherNew(index, isWasherCopy) {
    let defalutData = this.genericConfigurationService.defaultFourmulaData(this.selectedController);
    let dividerValue = 15;
    let parentIndex = -1;
    let formulaData: any = {
      formulaControlsArray: []
    }
    let formulaControlsData
    if (isWasherCopy) {
      formulaControlsData = this.masterData?.formula[index].formulaControlsArray;
    }
    else {
      formulaControlsData = defalutData[this.regionSlected].FormulaSummaryInfo
    }
    formulaControlsData.forEach((parentItem, index) => {
      if (index % dividerValue == 0) {
        parentIndex = parentIndex + 1;
      }
      let formulaChildIndex = index;
      let newObj: any = {
        FormulaNumber: parentItem?.FormulaNumber,
        ForumlaName: defalutData[this.regionSlected].WasherDetailsList[parentIndex].Data[formulaChildIndex].FormulaName,
        SignalList: []
      }
      if (isWasherCopy) {
        parentItem.SignalList.forEach((signalList) => {
          let newObjSignal: any = {
            Id: signalList?.Id,
            ActualAmount: signalList.ActualAmount,
            ProductAmount: signalList?.ProductAmount,
            ProductName: signalList?.ProductName,
            SignalNumber: signalList?.SignalNumber,
            ProductDelay: signalList?.ProductDelay,
            Number: signalList?.Number
          }
          newObj['SignalList'].push(newObjSignal);
        });
        formulaData.formulaControlsArray?.push(newObj);
      }
      else {
        parentItem.FormulaSummaryList.forEach((signalList) => {
          //Fetch newly selected product value when default product altered
          let selectedProductName = this.getProductName(signalList?.ProductName, signalList?.Number);
          let newObjSignal: any = {
            Id: signalList?.Id,
            ActualAmount: this.genericConfigurationService.productAmountConversion(this.masterData?.controllerProductSettings?.UnitOfMeasure.value, signalList.ActualProductAmount, this.selectedController),
            ProductAmount: this.genericConfigurationService.productAmountConversion(this.masterData?.controllerProductSettings?.UnitOfMeasure.value, signalList.ActualProductAmount, this.selectedController),
            ProductName: selectedProductName,
            SignalNumber: signalList?.Signal,
            ProductDelay: signalList?.ProductDelay,
            Number: signalList?.Number
          }
          newObj['SignalList'].push(newObjSignal);
        });
        formulaData.formulaControlsArray?.push(newObj);
      }
    });
    this.masterData.formula.push(formulaData);
  }


  addCapacity() {
    this.selectedUniteofMeasure = this.masterData?.controllerProductSettings?.UnitOfMeasure;
    let region = this.masterData?.controllerProductSettings?.Region;
    if (this.selectedUniteofMeasure.value == 'Standard') {
      return this.genericConfigurationService.defaultCapacity(this.selectedController)[0].value;
    } else if (this.selectedUniteofMeasure.value !== 'Standard' && region == 'Europe') {
      return this.genericConfigurationService.defaultCapacity(this.selectedController)[2].value;
    }
    else {
      return this.genericConfigurationService.defaultCapacity(this.selectedController)[1].value;
    }
  }

  get getWasherControlsArray() {
    return this.washerSettingsForm.controls['getWasherControlsArray'] as FormArray;
  }

  capacityBasedOnUnitOfMeasure() {
    this.selectedUniteofMeasure = this.masterData.controllerProductSettings.UnitOfMeasure;
    if (this.selectedUniteofMeasure.value == 'Standard') {
      return this.loadCapacityLbOrKg = this.genericConfigurationService.capacityLBData(this.selectedController);
    }
    else {
      return this.loadCapacityLbOrKg = this.genericConfigurationService.capacityKgData(this.selectedController);
    }
  }

  setAdvanceSignalModeValue(index) {
    let signalModeValue = this.getFormArrayElement(index, 'SignalMode');
    if (signalModeValue.value == 'Standard') {
      this.setFormArrayElement(index, 'AdvancedSignalMode', this.genericConfigurationService.notAValue[0].value);
    }
    else {
      this.setFormArrayElement(index, 'AdvancedSignalMode', this.advanceSingnalMode[0]);
    }
  }

  onChagneSignalMode(index) {
    this.setAdvanceSignalModeValue(index);
  }

  setFormArrayElement(index, formControlName, value) {
    (this.washerSettingsForm.get('getWasherControlsArray') as FormArray).at(parseInt(index)).get(formControlName)?.patchValue(value);
  }
  getFormArrayElement(index, formControlName) {
    return (this.washerSettingsForm.get('getWasherControlsArray') as FormArray).at(parseInt(index)).get(formControlName)?.value;
  }
  getFormArrayElementControl(index, formControlName) {
    return (this.washerSettingsForm.get('getWasherControlsArray') as FormArray).at(parseInt(index)).get(formControlName);
  }


  ngOnDestroy(): void {
    if (this.masterData$) {
      this.masterData$.unsubscribe();
    }
    this.masterData['washersettings'] = this.washerSettingsForm.value.getWasherControlsArray;
    this.genericConfigurationService?.setLocalStorage(this.masterData);
    this.genericConfigurationService?.masterData.next(this.masterData);
  }

  ControllerProductPage() {
    this.masterData['washersettings'] = this.washerSettingsForm.value.getWasherControlsArray;
    this.genericConfigurationService?.setLocalStorage(this.masterData);
    this.genericConfigurationService?.masterData.next(this.masterData);
    this.router.navigate([this.genericConfigurationService.routePath.concat('/controller-productsetting')]);
  }

  formulaPage() {
    this.washerSettingsForm['submitted'] = true;
    if (!this.washerSettingsForm.valid) {
      return;
    }
    this.masterData['washersettings'] = this.washerSettingsForm.value.getWasherControlsArray;
    this.genericConfigurationService?.setLocalStorage(this.masterData);
    this.genericConfigurationService?.masterData.next(this.masterData);
    this.updateMasterData();
    this.router.navigate([this.genericConfigurationService.routePath.concat('/formula')]);
  }

  //updating masterdata on editing 
  updateMasterData() {
    if (this.masterData?.washersettings?.length == 1 || this.isCollapsed) {
      this.genericConfigurationService.masterData.value.editedWasherindex = 0;
      this.genericConfigurationService.masterData.value.isWasherEdited = false;
    }
    else {
      this.genericConfigurationService.masterData.value.isWasherEdited = true;
      this.genericConfigurationService.masterData.value.editedWasherindex = this.isCollapsed ? 0 : this.editedWasherindex;
      this.genericConfigurationService.masterData.value.hideWasherContent = this.hideWasherContent;
    }
    this.genericConfigurationService.setLocalStorage(this.genericConfigurationService.masterData.value);
  }

  //used to fetch prodcut name 
  //FOr SCLS we are fetching based on json only
  //FOr LCLS we are fetching based on json and append with pocket value
  fetchProductName(productName: any, productNumber: any, regionName: any) {
    if (this.selectedController?.toLowerCase() === this.washersData.find(x => x.id === 1).value)
      productName = this.genericConfigurationService.getProductName(productName, regionName);
    if (this.selectedController?.toLowerCase() === this.washersData.find(x => x.id === 2).value) {
      let lclsPockets = LclsPockets;
      productNumber = lclsPockets?.find(x => x.id === productNumber)?.value;
      productName = this.genericConfigurationService.fetchProductwithPocketNumberLCLS(productName, productNumber, this.selectedController);
    }
    return productName;
  }


  //// Matching the selected pocket value at configuration setting with default json and return of the appropriate product name
  getProductName(pName, pocketNumber: any) {
    if (this.selectedController.toLocaleLowerCase() === this.washersData.find(x => x.id === 1).value) {
      let pocketObj: any = this.genericConfigurationService.getRegionBasedData(this.selectedController, this.regionSlected);
      let pocketName: string = '';
      Object.keys(pocketObj).forEach(eachPocketKey => {
        pocketObj[eachPocketKey].forEach(eachObj => {
          if (eachObj.value == pName) {
            pocketName = eachPocketKey;
          }
        })
      })
      let keyName = this.pocketNames[pocketName];
      if (this.masterData?.controllerProductSettings[keyName]?.value) {
        return this.masterData?.controllerProductSettings[keyName]?.value;
      }
      return pName;
    }
    if (this.selectedController.toLocaleLowerCase() === this.washersData.find(x => x.id === 2).value) {
      let lclsPockets = LclsPockets;
      let pocketName: string = '';
      let pocketNum = lclsPockets?.find(x => x.id === pocketNumber)?.value;
      if (pocketNum) {
        pocketName = pocketNum;
      }
      if (this.masterData?.controllerProductSettings[pocketName]?.value) {
        return this.masterData?.controllerProductSettings[pocketName]?.value + '-' + lclsPockets?.find(x => x.id === pocketNumber)?.appendValue;
      }
      return pName;
    }
  }

  //Get the capacity based on UOM
  getCapacity(value) {
    if (this.masterData?.controllerProductSettings?.UnitOfMeasure?.value === 'Standard' && value.toLocaleLowerCase().includes('kg'))
      return this.genericConfigurationService.convertKGtoLb(value);
    else if (this.masterData?.controllerProductSettings?.UnitOfMeasure?.value === 'Metric' && value.toLocaleLowerCase().includes('lb'))
      return this.genericConfigurationService.convertKGtoLb(value);
    else
      return value;
  }
}
