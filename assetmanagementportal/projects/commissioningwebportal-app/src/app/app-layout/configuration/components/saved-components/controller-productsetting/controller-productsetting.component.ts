import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AB300Region, AB300RegionBasedData, CommanLanguages, FormulaSelector, LclsPockets, LclsRegion, LclsRegionBasedData, SclsRegion, SecondaryLanguage, TmLangauage, UnitOfMeasure } from 'projects/commissioningwebportal-app/src/assets/data/controller-productsetting';
import { GenericConfigurationService } from '../../../services/generic-configuration.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { SclsdataserviceService } from '../../../services/sclsdataservice.service';
import { LclsdataserviceService } from '../../../services/lclsdataservice.service';
import { CustomValidator } from 'projects/commissioningwebportal-app/src/app/shared';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'projects/commissioningwebportal-app/src/app/shared/alert-modal/alert-modal.component';
import { Facilities, WashersData } from 'projects/commissioningwebportal-app/src/assets/data';
import { MatIconRegistry } from "@angular/material/icon"
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-controllerconfiguration-productsetting',
  templateUrl: './controller-productsetting.component.html',
  styleUrls: ['./controller-productsetting.component.scss']
})
export class ControllerProductsetting implements OnInit, OnChanges {
  region: any;
  form: FormGroup;
  unitOfMeasure = UnitOfMeasure;
  formulaSelector = FormulaSelector;
  uniqueLanguage = CommanLanguages;
  secondaryLanguage = SecondaryLanguage
  controllerFormConfigurationForm!: FormGroup;
  masterData: any = {};
  masterData$: any = null;
  regionSelectionData: any = {};
  capacityValue: any[];
  dataStore: any[];
  initialFlag: boolean = false;
  isEditFlag: boolean;
  selectedFormulaEditData: any[];
  storeRegionName: string;
  oNeditStoreSelectedRegion: string;
  OneditStoreSelectedData: any;
  selectedController: string;
  hasProductError: boolean = false;
  productList: any[];
  popupObjectMessage: any = {};
  oldProductData: any = {};
  selectedRegion: string;
  washersData: any = WashersData;
  lclsRegionBasedData = LclsRegionBasedData;
  ab300RegionBasedData = AB300RegionBasedData;
  facility: any = Facilities;
  isFacility: boolean = true;
  sclsRegions: any = SclsRegion;
  isLockedproductList: any = {
    isproductOneLocked: false,
    isProductTwoLocked: false,
    isProductThreeLocked: false,
    isProductFourLocked: false,
    isProductFiveLocked: false
  }
  lclsRegions: any = LclsRegion;

  constructor(private router: Router,
    private fb: FormBuilder, private genericConfigurationService: GenericConfigurationService,
    private sclsdataserviceService: SclsdataserviceService, public activeModal: NgbActiveModal, private modalService: NgbModal,
    private lclsdataserviceService: LclsdataserviceService, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer,
    private translate: TranslateService) {
    matIconRegistry.addSvgIcon(
      `locked`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/images/Locked.svg")
    )
    this.form = this.fb.group({
      published: true,
      credentials: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.masterData = this.genericConfigurationService.masterData.getValue();
    this.selectedFormulaEditData = this.masterData?.formula;
    this.selectedController = this.masterData?.configurationDetails?.ControllerApplication?.value;
    this.dataStore = this.masterData?.formula;
    this.isEditFlag = this.masterData.isEditFlag;
    this.oNeditStoreSelectedRegion = JSON.parse(JSON.stringify(this.masterData.oNeditStoreSelectedRegion));
    this.OneditStoreSelectedData = JSON.parse(JSON.stringify(this.masterData.OneditStoreSelectedData));
    this.getRegion(this.selectedController);
    this.storeRegionName = this.selectedRegion = this.masterData?.controllerProductSettings?.Region ?? this.region.find(x => x.id == 1).value;
    this.regionSelectionData = this.genericConfigurationService.getRegionBasedData(this.selectedController, this.region.find(x => x.id == 1).value);
    this.productList = this.genericConfigurationService.getPocketData(this.selectedController, this.selectedRegion ? this.selectedRegion : "NorthAmerica");
    this.initializeForm();
    this.isControllerDataValid();
    if (this.selectedController.toLocaleLowerCase() === this.washersData.find(x => x.id === 1).value && this.masterData?.isLockedError)
      this.updateErrorForIsLockedProduct();
    this.translate.setDefaultLang('en-US');
    this.getTranslation();
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngAfterViewInit() {
    if (this.masterData?.isEditFlag)
      this.isControllerDataValid();
  }

  getRegion(controller: string) {
    if (controller?.toLowerCase() === this.washersData.find(x => x.id === 1).value) {
      this.region = SclsRegion;
    }
    if (controller?.toLowerCase() === this.washersData.find(x => x.id === 2).value) {
      this.region = LclsRegion;
    }
    if (controller?.toLowerCase() === this.washersData.find(x => x.id === 3).value) {
      this.region = AB300Region;
    }
  }

  initializeForm() {
    let data = this.masterData?.controllerProductSettings;
    if (this.selectedController?.toLocaleLowerCase() === this.washersData.find(x => x.id === 1).value) {
      this.controllerFormConfigurationForm = this.fb.group({
        Region: new FormControl(data?.Region || this.region[0].value, Validators.required),
        UnitOfMeasure: new FormControl(data?.UnitOfMeasure || this.unitOfMeasure[0], Validators.required),
        NumberOfWashers: new FormControl(data?.NumberOfWashers || 1, Validators.required),
        FormulaSelector: new FormControl(data?.FormulaSelector || this.formulaSelector[0], Validators.required),
        PrimaryLanguage: new FormControl(data?.PrimaryLanguage || this.uniqueLanguage[0], Validators.required),
        SecondaryLanguage: new FormControl(data?.SecondaryLanguage || this.uniqueLanguage[0], Validators.required),
        TmLangauage: new FormControl(data?.TmLangauage || this.uniqueLanguage[0], Validators.required),
        TimeZone: new FormControl(data?.TimeZone, Validators.required),
        ProductOne: new FormControl(data?.ProductOne, Validators.required),
        ProductTwo: new FormControl(data?.ProductTwo, Validators.required),
        ProductThree: new FormControl(data?.ProductThree, Validators.required),
        ProductFour: new FormControl(data?.ProductFour),
        ProductFive: new FormControl(data?.ProductFive),
        //Facility is used to add additional formulas to the washers, Lodging and Long Term care are two types
        //currently applies to NA of SCLS
        Facility: new FormControl(data?.facility || this.facility[0], Validators.required)
      });
      //Facility is used to add additional formulas to the washers, Lodging and Long Term care are two types
      //currently applies to NA of SCLS
      if (this.Region.value == this.sclsRegions[0].value) {
        this.Facility.setValue(this.masterData?.controllerProductSettings?.Facility ? this.masterData?.controllerProductSettings?.Facility : this.facility[0]?.value);
      }
    }
    if (this.selectedController?.toLocaleLowerCase() === this.washersData.find(x => x.id === 2).value) {
      this.controllerFormConfigurationForm = this.fb.group({
        Region: new FormControl(data?.Region || this.region[0].value, Validators.required),
        UnitOfMeasure: new FormControl(data?.UnitOfMeasure || this.unitOfMeasure[0], Validators.required),
        NumberOfWashers: new FormControl(data?.NumberOfWashers || 1, Validators.required),
        FormulaSelector: new FormControl(data?.FormulaSelector || this.formulaSelector[0], Validators.required),
        PrimaryLanguage: new FormControl(data?.PrimaryLanguage || this.uniqueLanguage[0], Validators.required),
        SecondaryLanguage: new FormControl(data?.SecondaryLanguage || this.uniqueLanguage[0], Validators.required),
        TmLangauage: new FormControl(data?.TmLangauage || this.uniqueLanguage[0], Validators.required),
        TimeZone: new FormControl(data?.TimeZone, Validators.required),
        ProductOne: new FormControl(data?.ProductOne, Validators.required),
        ProductTwo: new FormControl(data?.ProductTwo, Validators.required),
        ProductThree: new FormControl(data?.ProductThree, Validators.required),
        ProductFour: new FormControl(data?.ProductFour),
        ProductFive: new FormControl(data?.ProductFive),
        ProductSix: new FormControl(data?.ProductSix),
        ProductSeven: new FormControl(data?.ProductSeven),
        ProductEight: new FormControl(data?.ProductEight),
        isLockedPkt1: new FormControl(data?.IsLocked),
      });
    }
    if (this.selectedController?.toLocaleLowerCase() === this.washersData.find(x => x.id === 3).value) {
      this.controllerFormConfigurationForm = this.fb.group({
        Region: new FormControl(data?.Region || this.region[0].value, Validators.required),
        UnitOfMeasure: new FormControl(data?.UnitOfMeasure || this.unitOfMeasure[0], Validators.required),
        TimeZone: new FormControl(data?.TimeZone, Validators.required)
      });
    }
    //
    this.isFacility = this.Region.value === this.sclsRegions[0].value ? true : false;
    this.regionSelectionData = this.genericConfigurationService.getRegionBasedData(this.selectedController, this.Region.value);
    this.setFormValueWithProductItem(data);

    this.isFacility = this.Region.value === this.sclsRegions[0].value ? true : false;
    this.controllerFormConfigurationForm.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe((data: any) => {
      this.updateFormulaProductName(this.controllerFormConfigurationForm.value, this.masterData);
      this.masterData['controllerProductSettings'] = this.controllerFormConfigurationForm.value;
      this.genericConfigurationService.setLocalStorage(this.masterData);
    });
  }

  navigateToReviewPage() {
    this.controllerFormConfigurationForm['submitted'] = true;
    if (!this.controllerFormConfigurationForm.valid) {
      return;
    }
    this.genericConfigurationService.navigateToReviewPage(this.selectedController);
  }

  updateFormulaProductName(newFormValue: any, lsMasterData: any) {
    if (!!lsMasterData && !!lsMasterData.controllerProductSettings) {
      var oldFormValue = lsMasterData.controllerProductSettings;
      // ProductName 1
      if (oldFormValue?.ProductOne?.value != newFormValue?.ProductOne?.value) {
        this.updateLocalStorageFormulaProductName(this.genericConfigurationService.fetchProductwithPocketNumberLCLS(oldFormValue.ProductOne.value, "ProductOne", this.selectedController), this.genericConfigurationService.fetchProductwithPocketNumberLCLS(newFormValue.ProductOne.value, "ProductOne", this.selectedController), lsMasterData);
      }
      // ProductName 2
      if (oldFormValue?.ProductTwo?.value != newFormValue?.ProductTwo?.value) {
        this.updateLocalStorageFormulaProductName(this.genericConfigurationService.fetchProductwithPocketNumberLCLS(oldFormValue.ProductTwo.value, "ProductTwo", this.selectedController), this.genericConfigurationService.fetchProductwithPocketNumberLCLS(newFormValue.ProductTwo.value, "ProductTwo", this.selectedController), lsMasterData);
      }
      // ProductName 3
      if (oldFormValue?.ProductThree?.value != newFormValue?.ProductThree?.value) {
        this.updateLocalStorageFormulaProductName(this.genericConfigurationService.fetchProductwithPocketNumberLCLS(oldFormValue.ProductThree.value, "ProductThree", this.selectedController), this.genericConfigurationService.fetchProductwithPocketNumberLCLS(newFormValue.ProductThree.value, "ProductThree", this.selectedController), lsMasterData);
      }
      // ProductName 4
      if (oldFormValue?.ProductFour?.value != newFormValue?.ProductFour?.value) {
        this.updateLocalStorageFormulaProductName(this.genericConfigurationService.fetchProductwithPocketNumberLCLS(oldFormValue.ProductFour.value, "ProductFour", this.selectedController), this.genericConfigurationService.fetchProductwithPocketNumberLCLS(newFormValue.ProductFour.value, "ProductFour", this.selectedController), lsMasterData);
      }
      // ProductName 5
      if (oldFormValue?.ProductFive?.value != newFormValue?.ProductFive?.value) {
        if (this.selectedController.toLocaleLowerCase() === this.washersData.find(x => x.id === 2).value) {
          this.updateLocalStorageFormulaProductNameForLcls(5);
        }
        this.updateLocalStorageFormulaProductName(this.genericConfigurationService.fetchProductwithPocketNumberLCLS(oldFormValue.ProductFive.value, "ProductFive", this.selectedController), this.genericConfigurationService.fetchProductwithPocketNumberLCLS(newFormValue.ProductFive.value, "ProductFive", this.selectedController), lsMasterData);
      }
      // ProductName 6
      if (oldFormValue?.ProductSix?.value != newFormValue?.ProductSix?.value) {

        if (this.selectedController.toLocaleLowerCase() === this.washersData.find(x => x.id === 2).value) {
          this.updateLocalStorageFormulaProductNameForLcls(6);
        }
        this.updateLocalStorageFormulaProductName(this.genericConfigurationService.fetchProductwithPocketNumberLCLS(oldFormValue?.ProductSix?.value, "ProductSix", this.selectedController), this.genericConfigurationService.fetchProductwithPocketNumberLCLS(newFormValue?.ProductSix?.value, "ProductSix", this.selectedController), lsMasterData);

      }
      // ProductName 7
      if (oldFormValue?.ProductSeven?.value != newFormValue?.ProductSeven?.value) {
        if (this.selectedController.toLocaleLowerCase() === this.washersData.find(x => x.id === 2).value) {
          this.updateLocalStorageFormulaProductNameForLcls(7);
        }
        this.updateLocalStorageFormulaProductName(this.genericConfigurationService.fetchProductwithPocketNumberLCLS(oldFormValue?.ProductSeven?.value, "ProductSeven", this.selectedController), this.genericConfigurationService.fetchProductwithPocketNumberLCLS(newFormValue?.ProductSeven?.value, "ProductSeven", this.selectedController), lsMasterData);
      }
      // ProductName 8
      if (oldFormValue?.ProductEight?.value != newFormValue?.ProductEight?.value) {
        if (this.selectedController.toLocaleLowerCase() === this.washersData.find(x => x.id === 2).value) {
          this.updateLocalStorageFormulaProductNameForLcls(8);
        }
        this.updateLocalStorageFormulaProductName(this.genericConfigurationService.fetchProductwithPocketNumberLCLS(oldFormValue?.ProductEight?.value, "ProductEight", this.selectedController), this.genericConfigurationService.fetchProductwithPocketNumberLCLS(newFormValue?.ProductEight?.value, "ProductEight", this.selectedController), lsMasterData);
      }
    }
  }


  updateLocalStorageFormulaProductName(oldProductName: string, newProductName: string, masterData: any) {
    if (masterData.formula) {
      masterData.formula.forEach(o => {
        //this logic is used to fetch signal count on products, 
        //If sig 3 has 3 products, sig 2 has 2 products, sig number and product will fetch
        let signalProductObj: any = {};
        o.formulaControlsArray.forEach(eachformulaList => {
          eachformulaList.SignalList.forEach(signalList => {
            let sNumber = signalList.SignalNumber;
            if (signalProductObj.hasOwnProperty(sNumber)) {
              signalProductObj[sNumber].push(signalList.ProductName);
            }
            else {
              signalProductObj[sNumber] = [signalList.ProductName]
            }
          });
          //
          if (this.selectedController.toLocaleLowerCase() === this.washersData.find(x => x.id === 1).value) {
            this.updateNewProductOnChangeOfPocketValueSCLS(eachformulaList, signalProductObj, oldProductName, newProductName)
          }
          if (this.selectedController.toLocaleLowerCase() === this.washersData.find(x => x.id === 2).value) {
            this.updateNewProductOnChangeOfPocketValueLCLS(eachformulaList, signalProductObj, oldProductName, newProductName);
          }
          signalProductObj = {};
        });
      });
    }
  }

  // set the prodcut form value create and edit
  setFormValueWithProductItem(data) {
    this.TimeZone.setValue(data?.TimeZone ? data.TimeZone : this.GetProductFromDefaultData('time'));
    if (this.selectedController?.toLowerCase() !== this.washersData.find(x => x.id === 3).value) {
      this.ProductOne.setValue(data?.ProductOne ? this.setIsLockedValuesforDefaultProduct(1, data?.ProductOne) : this.GetProductFromDefaultData('Pocket1'));
      this.ProductTwo.setValue(data?.ProductTwo ? this.setIsLockedValuesforDefaultProduct(2, data?.ProductTwo) : this.GetProductFromDefaultData('Pocket2'));
      this.ProductThree.setValue(data?.ProductThree ? this.setIsLockedValuesforDefaultProduct(3, data?.ProductThree) : this.GetProductFromDefaultData('Pocket3'));
      this.ProductFour.setValue(data?.ProductFour ? this.setIsLockedValuesforDefaultProduct(4, data?.ProductFour) : this.GetProductFromDefaultData('Pocket4'));
      this.ProductFive.setValue(data?.ProductFive ? this.setIsLockedValuesforDefaultProduct(5, data?.ProductFive) : this.GetProductFromDefaultData('Pocket5'));
      if (this.selectedController == "LCLS") {
        this.ProductSix.setValue(data?.ProductSix ? data?.ProductSix : this.GetProductFromDefaultData('Pocket6'));
        this.ProductSeven.setValue(data?.ProductSeven ? data?.ProductSeven : this.GetProductFromDefaultData('Pocket7'));
        this.ProductEight.setValue(data?.ProductEight ? data?.ProductEight : this.GetProductFromDefaultData('Pocket8'));
        this.updateProductNameForLcls();
      }
    }
  }

  GetProductFromDefaultData(item) {
    let data;
    if (this.selectedController?.toLowerCase() === this.washersData.find(x => x.id === 1).value) {
      switch (item?.toLowerCase()) {
        case 'time':
          data = this.regionSelectionData?.timeZones[0]
          break;
        case 'pocket1':
          data = this.regionSelectionData?.Pocket1[0]
          this.setIsLockedValuesforDefaultProduct(1, data);
          break;
        case 'pocket2':
          data = this.regionSelectionData?.Pocket2[0]
          this.setIsLockedValuesforDefaultProduct(2, data);
          break;
        case 'pocket3':
          data = this.regionSelectionData?.Pocket3[0]
          this.setIsLockedValuesforDefaultProduct(3, data);
          break;
        case 'pocket4':
          data = this.regionSelectionData?.Pocket4[0]
          this.setIsLockedValuesforDefaultProduct(4, data);
          break;
        case 'pocket5':
          data = this.regionSelectionData?.Pocket5[0]
          this.setIsLockedValuesforDefaultProduct(5, data);
          break;
      }
      return data;
    }
    if (this.selectedController?.toLowerCase() === this.washersData.find(x => x.id === 2).value) {
      let defalutData = this.getDefaultData();
      switch (item?.toLowerCase()) {
        case 'time':
          data = this.regionSelectionData?.timeZones[0]
          break;
        case 'pocket1':
          data = this.regionSelectionData?.Pocket1.find(x => x.value.includes(defalutData[this.Region.value].ControllerSettingsList[0].Value))
          this.setIsLockedValuesforDefaultProduct(1, data);
          break;
        case 'pocket2':
          data = this.regionSelectionData?.Pocket2.find(x => x.value.includes(defalutData[this.Region.value].ControllerSettingsList[1].Value))
          this.setIsLockedValuesforDefaultProduct(2, data);
          break;
        case 'pocket3':
          data = this.regionSelectionData?.Pocket3.find(x => x.value.includes(defalutData[this.Region.value].ControllerSettingsList[2].Value))
          this.setIsLockedValuesforDefaultProduct(3, data);
          break;
        case 'pocket4':
          data = this.regionSelectionData?.Pocket4.find(x => x.value.includes(defalutData[this.Region.value].ControllerSettingsList[3].Value))
          this.setIsLockedValuesforDefaultProduct(4, data);
          break;
        case 'pocket5':
          data = this.regionSelectionData?.Pocket5.find(x => x.value.includes(defalutData[this.Region.value].ControllerSettingsList[4].Value))
          this.setIsLockedValuesforDefaultProduct(5, data);
          break;
        case 'pocket6':
          data = this.regionSelectionData?.Pocket6[0]
          break;
        case 'pocket7':
          data = this.regionSelectionData?.Pocket7[0]
          break;
        case 'pocket8':
          data = this.regionSelectionData?.Pocket8[0]
          break;
      }
      return data;
    }
    if (this.selectedController?.toLowerCase() === this.washersData.find(x => x.id === 3).value) {
      switch (item?.toLowerCase()) {
        case 'time':
          data = this.regionSelectionData?.timeZones[0]
          break;
      }
      return data;
    }
  }

  // Set the unit of measeure
  setUnitOfMeaseure(data) {
    if (this.Region.value == 'NorthAmerica') {
      this.UnitOfMeasure.setValue(data?.UnitOfMeasure?.value ? data.UnitOfMeasure : this.unitOfMeasure[0]);
    } else {
      this.UnitOfMeasure.setValue(data?.UnitOfMeasure?.value ? data.UnitOfMeasure : this.unitOfMeasure[1]);
    }
    this.convertKGtoLb();
  }

  // create and edit changing the data based on region
  addDefaultValueTocontrollerFormConfigurationForm(data) {
    if (this.oNeditStoreSelectedRegion == this.Region.value && this.isEditFlag) {
      let data = this.OneditStoreSelectedData?.controllerProductSettings;
      this.setUnitOfMeaseure(data);
      this.setFormValueWithProductItem(data);
    }
    else {
      this.setUnitOfMeaseure(data);
      this.setFormValueWithProductItem(data);
    }
  }

  // converting to kg to lb or lb to kg
  convertKGtoLb() {
    setTimeout(() => {
      let washerArray = JSON.parse(JSON.stringify(this.masterData?.washersettings));
      let currentUom = this.UnitOfMeasure.value.value;
      let localStorageUom = this.masterData?.controllerProductSettings?.UnitOfMeasure?.value;
      if (currentUom == localStorageUom) {
        return;
      }
      else {
        washerArray?.forEach((eachWasher) => {
          if (washerArray) {
            let value = eachWasher?.Capacity?.split(' ')[0];
            let unit = eachWasher?.Capacity?.split(' ')[1];
            if (unit == 'lb') {
              let kilograms: any = (value * this.genericConfigurationService.kilogramsValue);
              // let remainder = kilograms - parseInt(kilograms);
              let roundedKG = Math.round(kilograms);
              eachWasher['Capacity'] = roundedKG + ' kg';
            } else if (unit == 'kg') {
              let roundedLb = Math.round(value * this.genericConfigurationService.lbValue);
              eachWasher['Capacity'] = roundedLb + ' lb';
            }
          }
        });
        this.masterData.washersettings = washerArray;
      }
    }, 100);
  }

  onChangeUnitofMeasure(getUom) {
    let uom = this.UnitOfMeasure.value;
    let region = this.masterData?.controllerProductSettings?.Region;

    // if there is no set the defalut capacity value 
    this.masterData?.washersettings?.forEach(element => {
      if (this.masterData?.washersettings == null) {
        if (uom.value == 'Standard' || getUom?.value != 'NorthAmerica') {
          element['Capacity'] = null;
          element['Capacity'] = this.genericConfigurationService.defaultCapacity(this.selectedController)[0].value;
        } else if (uom.value !== 'Standard' && this.Region.value == 'Europe') {
          element['Capacity'] = null;
          element['Capacity'] = this.genericConfigurationService.defaultCapacity(this.selectedController)[2].value;
        }
        else {
          element['Capacity'] = null;
          element['Capacity'] = this.genericConfigurationService.defaultCapacity(this.selectedController)[1].value;
        }
      }
      else {
        this.convertKGtoLb();
      }
    });

    // updating formula calculation based on this flag
    if (!this.initialFlag) {
      this.genericConfigurationService.changeFormulaData(uom.value, this.selectedController);
    } else {
      this.initialFlag = false;
    }
    this.genericConfigurationService.masterData.next(this.masterData);
  }

  // Get controller form value
  get Region() {
    return this.controllerFormConfigurationForm.get('Region') as FormControl;
  }
  get UnitOfMeasure() {
    return this.controllerFormConfigurationForm.get('UnitOfMeasure') as FormControl;
  }
  get NumberOfWashers() {
    return this.controllerFormConfigurationForm.get('NumberOfWashers') as FormControl;
  }
  get FormulaSelector() {
    return this.controllerFormConfigurationForm.get('FormulaSelector') as FormControl;
  }
  get PrimaryLanguage() {
    return this.controllerFormConfigurationForm.get('PrimaryLanguage') as FormControl;
  }
  get SecondaryLanguage() {
    return this.controllerFormConfigurationForm.get('SecondaryLanguage') as FormControl;
  }
  get TmLangauage() {
    return this.controllerFormConfigurationForm.get('TmLangauage') as FormControl;
  }
  get TimeZone() {
    return this.controllerFormConfigurationForm.get('TimeZone') as FormControl;
  }

  //Facility is used to add additional formulas to the washers, Lodging and Long Term care are two types
  //currently applies to NA of SCLS
  get Facility() {
    return this.controllerFormConfigurationForm.get('Facility') as FormControl;
  }

  // get product form value

  get ProductOne() {
    return this.controllerFormConfigurationForm.get('ProductOne') as FormControl;
  }
  get ProductTwo() {
    return this.controllerFormConfigurationForm.get('ProductTwo') as FormControl;
  }
  get ProductThree() {
    return this.controllerFormConfigurationForm.get('ProductThree') as FormControl;
  }
  get ProductFour() {
    return this.controllerFormConfigurationForm.get('ProductFour') as FormControl;
  }
  get ProductFive() {
    return this.controllerFormConfigurationForm.get('ProductFive') as FormControl;
  }
  get ProductSix() {
    return this.controllerFormConfigurationForm.get('ProductSix') as FormControl;
  }
  get ProductSeven() {
    return this.controllerFormConfigurationForm.get('ProductSeven') as FormControl;
  }
  get ProductEight() {
    return this.controllerFormConfigurationForm.get('ProductEight') as FormControl;
  }

  // Replace the old data 

  replaceOldData() {
    this.genericConfigurationService.masterData.value.configurationDetails = this.OneditStoreSelectedData.configurationDetails;
    this.genericConfigurationService.masterData.value.controllerProductSettings = this.OneditStoreSelectedData.controllerProductSettings;
    this.genericConfigurationService.masterData.value.washersettings = this.OneditStoreSelectedData.washersettings;
    this.genericConfigurationService.masterData.value.formula = this.OneditStoreSelectedData.formula;
    this.genericConfigurationService.setLocalStorage(this.genericConfigurationService.masterData.value);
  }

  getDefaultData() {
    let data;
    if (this.selectedController?.toLowerCase() === this.washersData.find(x => x.id === 1).value) {
      data = this.sclsdataserviceService.defaultFourmulaData();
    }
    if (this.selectedController?.toLowerCase() === this.washersData.find(x => x.id === 2).value) {
      data = this.lclsdataserviceService.defaultFourmulaData();
    }
    return data;
  }

  onChangeRegion(data) {
    this.selectedRegion = data.value;
    //Facility is used to add additional formulas to the washers, Lodging and Long Term care are two types
    //currently applies to NA of SCLS
    //when other region selected, Facility field to be hided
    this.isFacility = this.selectedRegion === this.sclsRegions[0].value ? true : false;
    if (this.selectedController?.toLowerCase() === this.washersData.find(x => x.id === 1).value && this.selectedRegion === this.sclsRegions[0].value)
      this.Facility.setValue(this.facility[0]?.value)
    //
    this.regionSelectionData = this.genericConfigurationService.getRegionBasedData(this.selectedController, this.Region.value);
    this.addDefaultValueTocontrollerFormConfigurationForm(data);
    // on edit loading formula section based on region updating the local storage
    if (this.isEditFlag) {
      if (this.oNeditStoreSelectedRegion == data.value) {
        this.replaceOldData();
        return;
      }
      else if (this.isEditFlag) {
        this.fetchFormulaAndSignalDataBasedOnAction(data);
      }
    }

    // clear the localstore washer data and formula data
    if (data && !this.isEditFlag) {
      if ((data?.Region || data?.value) !== this.masterData?.controllerProductSettings?.Region) {
        this.masterData.washersettings = null;
        this.masterData.formula = null;
      }
    }
  }

  ngOnDestroy(): void {
    if (this.masterData$) {
      this.masterData$.unsubscribe();
    }

  }

  backtoDetailsPage() {
    this.masterData['controllerProductSettings'] = this.controllerFormConfigurationForm.value;
    this.genericConfigurationService.setLocalStorage(this.masterData);
    this.genericConfigurationService.masterData.next(this.masterData);
    this.router.navigate([this.genericConfigurationService.routePath.concat('/configuration-details')]);

  }

  washersPage() {
    this.controllerFormConfigurationForm['submitted'] = true;
    if (!this.controllerFormConfigurationForm.valid) {
      return;
    }
    this.genericConfigurationService.masterData.value.isWasherEdited = false;
    this.genericConfigurationService.masterData.value.editedWasherindex = 0;
    this.genericConfigurationService.masterData.value.hideWasherContent = [];
    this.masterData['controllerProductSettings'] = this.controllerFormConfigurationForm.value;
    this.genericConfigurationService.setLocalStorage(this.masterData);
    this.genericConfigurationService.masterData.next(this.masterData);
    if (this.selectedController?.toLocaleLowerCase() === this.washersData.find(x => x.id === 3).value)
      this.router.navigate([this.genericConfigurationService.routePath.concat('/watersettings')]);
    else
      this.router.navigate([this.genericConfigurationService.routePath.concat('/washersettings')]);
  }

  isControllerDataValid() {
    if (this.selectedController?.toLocaleLowerCase() == this.washersData.find(x => x.id === 1).value) {
      this.productList = this.genericConfigurationService.getPocketData(this.selectedController, this.Region.value);
      if (this.ProductOne.value) {
        this.oldProductData.ProductOne = this.ProductOne.value.value;
        if (this.productList && !(this.productList.findIndex(x => x.value === this.ProductOne.value.value) != -1)) {
          this.hasProductError = true;
          this.controllerFormConfigurationForm.controls['ProductOne'].setErrors({ 'incorrect': true });
          this.controllerFormConfigurationForm.controls['ProductOne'].markAsTouched();
        }
      }
      if (this.ProductTwo.value) {
        this.oldProductData.ProductTwo = this.ProductTwo.value.value;
        if (this.productList && !(this.productList.findIndex(x => x.value === this.ProductTwo.value.value) != -1)) {
          this.hasProductError = true;
          this.controllerFormConfigurationForm.controls['ProductTwo'].setErrors({ 'incorrect': true });
          this.controllerFormConfigurationForm.controls['ProductTwo'].markAsTouched();
        }
      }
      if (this.ProductThree.value) {
        this.oldProductData.ProductThree = this.ProductThree.value.value;
        if (this.productList && !(this.productList.findIndex(x => x.value === this.ProductThree.value.value) != -1)) {
          this.hasProductError = true;
          this.controllerFormConfigurationForm.controls['ProductThree'].setErrors({ 'incorrect': true });
          this.controllerFormConfigurationForm.controls['ProductThree'].markAsTouched();
        }
      }
      if (this.ProductFour.value) {
        this.oldProductData.ProductFour = this.ProductFour.value.value;
        if (this.productList && !(this.productList.findIndex(x => x.value === this.ProductFour.value.value) != -1)) {
          this.hasProductError = true;
          this.controllerFormConfigurationForm.controls['ProductFour'].setErrors({ 'incorrect': true });
          this.controllerFormConfigurationForm.controls['ProductFour'].markAsTouched();
        }
      }
      if (this.ProductFive.value) {
        this.oldProductData.ProductFive = this.ProductFive.value.value;
        if (this.productList && !(this.productList.findIndex(x => x.value === this.ProductFive.value.value) != -1)) {
          this.hasProductError = true;
          this.controllerFormConfigurationForm.controls['ProductFive'].setErrors({ 'incorrect': true });
          this.controllerFormConfigurationForm.controls['ProductFive'].markAsTouched();
        }
      }
    }
  }

  onPocketValueChange(id: number) {
    if (this.hasProductError) {
      this.hasProductError = false;
      this.genericConfigurationService.masterData.value.hasProductError = false;
      if (this.selectedController.toLocaleLowerCase() === this.washersData.find(x => x.id === 1).value)
        this.isControllerDataValid();
    }
    if (this.selectedController.toLocaleLowerCase() === this.washersData.find(x => x.id === 2).value)
      this.updateLocalStorageFormulaProductNameForLcls(id);
  }

  updateProductNameForLcls() {
    let lclsPockets = LclsPockets;
    lclsPockets.forEach(element => {
      this.updateLocalStorageFormulaProductNameForLcls(element.id);
    });
  }

  //update local storage for LCLS
  updateLocalStorageFormulaProductNameForLcls(pocketNumber: number) {
    let lclsPockets = LclsPockets;
    let pocketNum = lclsPockets?.find(x => x.id === pocketNumber)?.value;
    if (pocketNumber && pocketNumber >= 5 && pocketNum) {
      for (var i = pocketNumber + 1; i <= 8; i++) {
        let pocket = lclsPockets?.find(x => x.id === i)?.value;
        if (pocket) {
          let indexPocket = lclsPockets?.find(x => x.id === pocketNumber)?.value
          if (this[pocketNum].value.value === 'NONE' && (i != pocketNumber + 1) || indexPocket && (this[indexPocket].value.value === 'NONE' || this[indexPocket].value === 'NONE')) {
            let value = this.lclsRegionBasedData[this.selectedRegion].Pocket1[0];
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
  //Facility is used to add additional formulas to the washers, Lodging and Long Term care are two types
  //currently applies to NA of SCLS
  onChangeFacility(facility) {
    if (facility) {
      this.masterData.controllerProductSettings.Facility = facility.value;
      this.genericConfigurationService.setLocalStorage(this.masterData);
      this.fetchFormulaAndSignalDataBasedOnAction("");
    }
  }
  //

  fetchFormulaAndSignalDataBasedOnAction(regionValue) {
    let globalFormulaArray: any = JSON.parse(JSON.stringify([]));
    let defalutData = this.getDefaultData();
    let regionName = regionValue.value ? regionValue.value : this.genericConfigurationService.getRegionName();
    let unitOfMeasureValue = this.controllerFormConfigurationForm.controls['UnitOfMeasure'].value;
    this.convertKGtoLb();
    if (regionValue && regionValue.value != "") {
      this.masterData.washersettings = this.assignDefaultWasherDetailsOnEdit(defalutData[regionName].WasherDetailsList);
    }

    this.masterData?.washersettings.forEach((eachData, washerIndex) => {

      let dividerValue = 15;
      let parentIndex = -1;
      globalFormulaArray.push({
        formulaControlsArray: []
      });
      defalutData[regionName].FormulaSummaryInfo.forEach((parentItem, index) => {
        if (index % dividerValue == 0) {
          parentIndex = parentIndex + 1;
        }
        let formulaChildIndex = index % dividerValue;
        let newObj: any = {
          FormulaNumber: parentItem?.FormulaNumber,
          ForumlaName: defalutData[regionName].WasherDetailsList[parentIndex].Data[formulaChildIndex].FormulaName,
          SignalList: []
        }
        parentItem.FormulaSummaryList.forEach((signalList) => {
          let newObjSignal: any = {
            Id: signalList?.Id,
            ActualAmount: this.genericConfigurationService.productAmountConversion(unitOfMeasureValue.value, signalList.ActualProductAmount, this.selectedController),
            ProductAmount: this.genericConfigurationService.productAmountConversion(unitOfMeasureValue.value, signalList.ActualProductAmount, this.selectedController),
            ProductName: signalList?.ProductName,
            SignalNumber: signalList?.Signal,
            ProductDelay: signalList?.ProductDelay,
            Number: signalList?.Number,
          }
          newObj['SignalList'].push(newObjSignal);
        });
        globalFormulaArray[washerIndex].formulaControlsArray?.push(newObj);
      });
      this.masterData.formula = globalFormulaArray;
    });
  }

  getTranslation() {
    this.translate.get([
      'lockedMessageToolTip'
    ]).subscribe(texts => {
      this.popupObjectMessage = {
        lockedMessageToolTip: texts.lockedMessageToolTip,
      };
    });
  }

  //update isLocked flag on changing product from pockets
  onProductChange(pocketNumber, productName) {
    this.setIsLockedValuesforDefaultProduct(pocketNumber, productName);
  }

  //method is used to set IsLocked flag for selected product
  setIsLockedValuesforDefaultProduct(pocketNumber, defaultProduct) {
    let productObject = {
      value: '', isLocked: false
    }
    if (this.selectedController?.toLowerCase() === this.washersData.find(x => x.id === 1).value) {
      productObject.isLocked = defaultProduct?.isLocked ? defaultProduct.isLocked : this.genericConfigurationService.getIsLockedProduct("", defaultProduct.value, this.selectedController, this.selectedRegion);
      productObject.value = defaultProduct.value;
      if (productObject) {
        switch (pocketNumber) {
          case 1:
            this.isLockedproductList.isproductOneLocked = productObject.isLocked;
            break;
          case 2:
            this.isLockedproductList.isProductTwoLocked = productObject.isLocked;
            break
          case 3:
            this.isLockedproductList.isProductThreeLocked = productObject.isLocked;
            break;
          case 4:
            this.isLockedproductList.isProductFourLocked = productObject.isLocked;
            break
          case 5:
            this.isLockedproductList.isProductFiveLocked = productObject.isLocked;
            break;
        }
      }
    }
    if (this.selectedController?.toLowerCase() === this.washersData.find(x => x.id === 2).value) {
      if (defaultProduct) {
        switch (pocketNumber) {
          case 1:
            break
          case 2:
            this.isLockedproductList.isProductTwoLocked = this.Region.value != this.lclsRegions[1].value ? true : false;
            break
          case 3:
            this.isLockedproductList.isProductThreeLocked = true;
            break;
          case 4:
            break;
          case 5:
            this.isLockedproductList.isProductFiveLocked = this.Region.value == this.lclsRegions[1].value ? true : false;
            break;
        }
      }
      return defaultProduct;
    }
    return productObject;
  }

  //Method is used to assign changed product on pcoketvalue change, 
  //also it checks for locked function(each signal should have max one locked product)
  //SCLS
  updateNewProductOnChangeOfPocketValueSCLS(eachformulaList: any, signalProductObj: any, oldProductName: any, newProductName: any) {
    if (eachformulaList.SignalList) {
      eachformulaList.SignalList.forEach(q => {
        let sNumber = q.SignalNumber
        if (q.ProductName?.toLowerCase() == oldProductName?.toLowerCase()) {
          //this logic is, while changing product, we are restricting if changing from 
          //non locked to locked since it is affects in formula list locked product logic
          let isNewProductLocked = this.genericConfigurationService.getIsLockedProduct("", newProductName, this.selectedController);
          if (!newProductName || newProductName.toLocaleLowerCase() == 'none') {
            eachformulaList.SignalList = eachformulaList.SignalList.filter(item => item?.ProductName !== q.ProductName);
            return eachformulaList.signalList;
          }

          if (q.IsLocked && isNewProductLocked) {
            q.ProductName = newProductName;
            q.IsLocked = isNewProductLocked;
            q.IsSolidProduct = this.genericConfigurationService.getIsSolidProduct("", newProductName, this.selectedController);
          }
          else if (isNewProductLocked == false) {
            q.ProductName = newProductName;
            q.IsLocked = isNewProductLocked;
            q.IsSolidProduct = this.genericConfigurationService.getIsSolidProduct("", newProductName, this.selectedController);
          }
          else if (signalProductObj) {
            let lockedCount = 1;
            signalProductObj[sNumber].forEach(element => {
              let isLocked = this.genericConfigurationService.getIsLockedProduct("", element, this.selectedController);
              if (isLocked) {
                lockedCount = lockedCount + 1;
              }
            });
            if (lockedCount > 1) {
              q.ProductName = "";
            }
            else {
              q.ProductName = newProductName;
              q.IsLocked = isNewProductLocked;
              q.IsSolidProduct = this.genericConfigurationService.getIsSolidProduct("", newProductName, this.selectedController);
            }
          }
        }
        if (q?.ProductName == 'None') {
          eachformulaList.SignalList = eachformulaList.SignalList.filter(item => item?.ProductName != 'None');
          return eachformulaList.signalList;
        }
      });
    }
  }

  //Method is used to assign changed product on pcoketvalue change, 
  //also it checks for locked function(each signal should have max one locked product)
  //LCLS
  updateNewProductOnChangeOfPocketValueLCLS(eachformulaList: any, signalProductObj: any, oldProductName: any, newProductName: any) {
    if (eachformulaList.SignalList) {
      eachformulaList.SignalList.forEach(q => {
        let sNumber = q.SignalNumber
        if (q.ProductName?.toLowerCase() == oldProductName?.toLowerCase()) {
          //this logic is, while changing product, we are restricting if changing from 
          //non locked to locked since it is affects in formula list locked product logic
          let isNewProductLocked = this.genericConfigurationService.fetchIslockedValueFOrLCLSProduct(newProductName, this.region);
          if (!newProductName || newProductName.toLocaleLowerCase() == 'none') {
            eachformulaList.SignalList = eachformulaList.SignalList.filter(item => item?.ProductName !== q.ProductName);
            return eachformulaList.signalList;
          }

          if (q.IsLocked && isNewProductLocked) {
            q.ProductName = newProductName;
            q.IsLocked = isNewProductLocked;
            q.IsSolidProduct = this.genericConfigurationService.getIsSolidProduct("", newProductName, this.selectedController);
          }
          else if (isNewProductLocked == false) {
            q.ProductName = newProductName;
            q.IsLocked = isNewProductLocked;
            q.IsSolidProduct = this.genericConfigurationService.getIsSolidProduct("", newProductName, this.selectedController);
          }
          else if (signalProductObj) {
            let lockedCount = 1;
            signalProductObj[sNumber].forEach(element => {
              let isLocked = this.genericConfigurationService.fetchIslockedValueFOrLCLSProduct(element, this.region);
              if (isLocked) {
                lockedCount = lockedCount + 1;
              }
            });
            if (lockedCount > 1) {
              q.ProductName = "";
            }
            else {
              q.ProductName = newProductName;
              q.IsLocked = isNewProductLocked;
              q.IsSolidProduct = this.genericConfigurationService.getIsSolidProduct("", newProductName, this.selectedController);
            }
          }
        }
        if (q?.ProductName.toLocaleLowerCase() == 'none') {
          eachformulaList.SignalList = eachformulaList.SignalList.filter(item => item?.ProductName.toLocaleLowerCase() != 'none');
          return eachformulaList.signalList;
        }
      });
    }
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

  assignDefaultWasherDetailsOnEdit(washersetting: any) {
    let washerDetailsList: any = [];
    let newObj: any = {
      AdvancedSignalMode: {
        value: washersetting[0]?.AdvancedSignalMode
      },
      Capacity: washersetting[0]?.Capacity,
      PostFlushTime: washersetting[0]?.PostFlushTime,
      RevertFormula: {
        value: washersetting[0]?.RevertFormula
      },
      SignalFilterTime: washersetting[0]?.SignalFilterTime,
      SignalMode: {
        value: washersetting[0]?.SignalMode
      },
      WasherName: washersetting[0]?.WasherName,
      WasherNumber: washersetting[0]?.WasherNumber
    }
    washerDetailsList.push(newObj);
    return washerDetailsList;
  }

  updateErrorForIsLockedProduct() {
    if (this.masterData.isLockedError) {
      let formulaData = this.masterData.formula;
      formulaData.forEach(formula => {
        formula.formulaControlsArray.forEach(data => {
          data.SignalList.forEach(element => {
            if (element.ProductName == 'ECL Soursoft') {
              let isLocked = this.genericConfigurationService.getIsLockedProduct("", this.ProductThree.value.value, this.selectedController);
              element.IsLocked = isLocked;
              element.isValid = true;
            }
          })
        });
      });
      this.masterData['isLockedError'] = false;
      this.masterData['formula'] = formulaData;
      this.genericConfigurationService.setLocalStorage(this.masterData);
    }
  }
}
