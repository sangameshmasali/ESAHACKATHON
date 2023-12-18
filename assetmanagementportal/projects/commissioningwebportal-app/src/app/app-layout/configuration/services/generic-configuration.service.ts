import { HttpClient, HttpResponse } from '@angular/common/http';
import { Inject, Injectable, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import moment from 'moment-timezone';
import { SclsRegionBasedData, LclsRegionBasedData, PocketNames, WashersData, SclsRegion, LclsPockets, LclsRegion, AB300RegionBasedData, LclsProducts, AlcsRegionBasedData } from 'projects/commissioningwebportal-app/src/assets/data';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { __values } from 'tslib';
import { BaseAPIService, BASE_API_PROVIDER } from '../../../env.config';
import { userProfile } from '../../../models/user';
import { BaseHttpClientService, LoggerService } from '../../core';
import { LclsdataserviceService } from './lclsdataservice.service';
import { SclsdataserviceService } from './sclsdataservice.service';


@Injectable({ providedIn: 'root' })
export class GenericConfigurationService {

  masterData = new BehaviorSubject<any>({
    configurationDetails: null,
    controllerProductSettings: null,
    washersettings: null,
    formula: null,
    isEditFlag: false,
    storePreviousConfigId: null,
    oNeditStoreSelectedRegion: null,
    OneditStoreSelectedData: null,
    hasProductError: false,
    facility: null,
    watersettings: null
  })

  ab300MasterData = new BehaviorSubject<any>({
    PoolSpaInfoList: null,
    ConfigurationsDeviceSettings: null,
  })

  sclsRegionBasedData = SclsRegionBasedData;
  lclsRegionBasedData = LclsRegionBasedData;
  ab300RegionBasedData = AB300RegionBasedData;
  alcsRegionBasedData = AlcsRegionBasedData;
  pocketNames = PocketNames;
  sclsRegions = SclsRegion;
  LclsRegions = LclsRegion;
  washersData: any = WashersData;
  //Constant value
  UnitPerGram: number = 45.359702;
  UnitPerOunce: number = 0.033814;
  kilogramsValue: number = 0.4535;
  lbValue: number = 2.20462;
  signalMaxLimit: number = 4;
  userData = new userProfile();
  // unitOfMeasure
  Standard: string = "Standard";
  Metric: string = "Metric";
  // setTimeOutValue
  setTimeOutValue: number = 10000;
  routePath = '/dashboard/configuration';

  notAValue = [
    { value: 'NA' }
  ]

  pumpProducts: any = '';


  setLocalStorage(masterData) {
    localStorage.setItem('masterData', JSON.stringify(masterData));
  }
  getLocalStorage() {
    let masterData: any = localStorage.getItem('masterData');
    this.masterData.next(JSON.parse(masterData));
    return JSON.parse(masterData);
  }

  constructor(
    private httpClient: BaseHttpClientService, private router: Router,
    private loggerService: LoggerService,
    private sclsdataserviceService: SclsdataserviceService,
    private lclsdataserviceService: LclsdataserviceService,
    @Inject(BASE_API_PROVIDER) private baseAPIProvider: BaseAPIService) {
    if (localStorage.getItem('masterData')) {
      this.getLocalStorage();
    }
    else {
      this.setLocalStorage({
        configurationDetails: null,
        controllerProductSettings: null,
        washersettings: null,
        formula: null,
        isEditFlag: false,
        storePreviousConfigId: null,
        oNeditStoreSelectedRegion: null,
        OneditStoreSelectedData: null,
        hasProductError: false,
        facility: null,
        watersettings: null
      })
    }
    this.getUserAccountDetails();
  }


  // Get the user Details
  getUserAccountDetails() {
    this.loggerService.getUserDetails().subscribe(res => {
      this.userData = res;
    })
  }


  // Json send product amount cal

  productAmountCalJsonCreate(uom, productAmount, signalList, isScls) {
    let value = signalList.ActualAmount;
    let masterData: any = localStorage.getItem('masterData');
    let localStoreData = JSON.parse(masterData);
    let liquiedProduct = isScls ? localStoreData.controllerProductSettings.ProductFive.value : signalList.ProductName;
    //liqued product 
    if (signalList.ProductName == liquiedProduct || !isScls) {
      if (uom == 'Standard') {
        let standredValue = value / this.UnitPerGram;
        return signalList.ProductAmount = (standredValue / this.UnitPerOunce).toFixed(5);
      }
      else {
        return signalList.ProductAmount = parseFloat(value).toFixed(5)
      }
    }
    // not a Liqued product 
    else {
      if (uom == 'Standard' && signalList.ProductName != liquiedProduct) {
        return productAmount = (productAmount / this.UnitPerGram).toFixed(5);
      }
      else {
        return parseFloat(productAmount).toFixed(5);
      }
    }
  }
  // json get while editing config

  productAmountCalJsonEdit(editData, uom, productAmount, signalList, controllerType) {
    uom = this.findTheValueByName(uom, 'Unit of Measure');
    let value = signalList.ActualProductAmount;
    let masterData: any = localStorage.getItem('masterData');
    let localStoreData = JSON.parse(masterData);
    let isScls = controllerType?.toLocaleLowerCase() == this.washersData.find(x => x.id === 1).value ? true : false;
    let liquiedProduct = editData?.ControllerSettingsList?.filter(item => item.Name == 'Product 5')[0]?.Value;
    //liqued product 
    if (signalList.ProductName == liquiedProduct || !isScls) {
      if (uom == 'Standard') {
        let standredValue = value * this.UnitPerGram;
        return signalList.ProductAmount = (standredValue * this.UnitPerOunce).toFixed(5);
      }
      else {
        return signalList.ProductAmount = parseFloat(value).toFixed(5)
      }
    }
    // not a Liqued product 
    else {
      if (uom == 'Standard' && signalList.ProductName != liquiedProduct) {
        return productAmount = ((productAmount * this.UnitPerGram)).toFixed(5);
      }
      else {
        return parseFloat(productAmount).toFixed(5);
      }
    }
  }

  // navigate to review page
  navigateToReviewPage(selectedController) {
    if (selectedController?.toLocaleLowerCase() === this.washersData.find(x => x.id === 3).value)
      this.router.navigate([this.routePath.concat('/ab300-reviewandfinalise')]);
    else
      this.router.navigate([this.routePath.concat('/reviewfinalise')]);

  }



  getPortalConfigFiles(userEmail: string): Observable<any> {
    return this.httpClient.get(`${this.baseAPIProvider.baseCommissoioningwebApi}api/portal/getPortalConfigFiles?UserEmail=${userEmail}`)
      .pipe(
        map((res: any) => { return res.body; })
      );
  }

  //Utc Format
  getDateWithFormat() {
    let utcDate: any = moment.utc().format();
    let unixTimestamp = moment(utcDate).unix();
    return unixTimestamp;
  }

  getaPIConfigPara() {
    let masterData = this.getLocalStorage();
    if (masterData?.storePreviousConfigId != null && masterData?.isEditFlag) {
      return masterData?.storePreviousConfigId;
    }
    else {
      let fileName = `${masterData?.configurationDetails?.Name}_${masterData?.configurationDetails?.ControllerApplication?.value}_${this.getDateWithFormat()}`;
      return fileName;
    }
  }

  // Create API call

  CreateUpsertConfigFile(reqData: string, masterData) {
    return this.httpClient.post(`${this.baseAPIProvider.baseCommissoioningwebApi}api/portal/upsertConfigFile?FileName=${this.getaPIConfigPara()}`, reqData)
      .pipe(
        map((res: any) => { return res.body; })
      );
  }

  // Delete API call here

  deleteUpsertConfigFile(reqData: any): Observable<any> {
    return this.httpClient.delete(`${this.baseAPIProvider.baseCommissoioningwebApi}api/portal/deleteConfigFile`, reqData)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  // Share API call
  ShareConfigFile(reqData: any): Observable<any> {
    return this.httpClient.post(`${this.baseAPIProvider.baseCommissoioningwebApi}api/portal/shareConfigFile`, reqData)
      .pipe(
        map((res: any) => { return res.body; })
      );
  }

  /// Local storage data for formula component is updated based on user selection uom at controller product settings page
  changeFormulaData(uom, selectedController): void {
    let data = this.masterData.getValue()?.formula
    if (!data) {
      return;
    }
    data.forEach(eachParent => {
      eachParent.formulaControlsArray.forEach(eachFormula => {
        eachFormula.SignalList.forEach(eachSignalData => {
          let value = eachSignalData.ProductAmount;
          let masterData: any = localStorage.getItem('masterData');
          let localStoreData = JSON.parse(masterData);
          let isScls = selectedController.toLocaleLowerCase() === this.washersData.find(x => x.id === 1).value ? true : false;
          let liquiedProduct = isScls ? localStoreData.controllerProductSettings.ProductFive.value : eachSignalData.ProductName; localStoreData.controllerProductSettings.ProductFive.value;
          //liqued product 
          if (eachSignalData.ProductName == liquiedProduct || !isScls) {
            if (uom == 'Standard') {
              eachSignalData.ProductAmount = (value * this.UnitPerGram * this.UnitPerOunce).toFixed(5);
              eachSignalData.ActualAmount = (value * this.UnitPerGram * this.UnitPerOunce).toFixed(5);
            }
            else {
              let standredValue = value / this.UnitPerGram;
              eachSignalData.ProductAmount = (standredValue / this.UnitPerOunce).toFixed(5);
              eachSignalData.ActualAmount = (standredValue / this.UnitPerOunce).toFixed(5);
            }
          }
          // not a Liqued product 
          else {
            if (uom == 'Standard' && eachSignalData.ProductName != liquiedProduct) {
              eachSignalData.ProductAmount = (value * this.UnitPerGram).toFixed(5);
              eachSignalData.ActualAmount = (value * this.UnitPerGram).toFixed(5);
            }
            else {
              eachSignalData.ProductAmount = (value / this.UnitPerGram).toFixed(5);
              eachSignalData.ActualAmount = (value / this.UnitPerGram).toFixed(5);
            }
          }
        })
      })
    })
    this.setLocalStorage(data);
  }

  // get the utc date time
  getUtcDate(isFromSavedConfig: boolean) {
    let utcDate
    if (isFromSavedConfig) {
      utcDate = moment.utc().format("DD MMM YYYY h:mm");
    }
    else {
      utcDate = moment.utc().format("DD MMM YYYY");
    }
    return utcDate;
  }

  // Product amount conversion on region change on edit 

  productAmountConversion(uom, productAmount, selectedController) {
    if (uom == 'Standard') {
      if (selectedController?.toLocaleLowerCase() === this.washersData.find(x => x.id === 1).value)
        return productAmount = (productAmount * this.UnitPerGram).toFixed(5);
      if (selectedController?.toLocaleLowerCase() === this.washersData.find(x => x.id === 2).value)
        return productAmount = (productAmount * this.UnitPerGram * this.UnitPerOunce).toFixed(5);
    } else {
      return productAmount = (productAmount).toFixed(5);
    }
  }


  // get the product number form json

  jsonParseMasterData() {
    let masterData: any = localStorage.getItem('masterData');
    let localStoreData = JSON.parse(masterData);
    return localStoreData;
  }

  getProductNumber(signalList, productName, controllerType) {
    //removeLockedNameFromProduct Method used to slice (Locked) after product Name
    productName = this.removeLockedNameFromProduct(productName);
    let data = this.getProductDataListByController(controllerType);
    let regionName = this.jsonParseMasterData()?.controllerProductSettings?.Region;
    if (controllerType.toLocaleLowerCase() === this.washersData.find(x => x.id === 1).value) {
      let getFilterValue = data[regionName].FormulaSummaryInfo.find(item => item.ProductName == productName);
      if (getFilterValue) {
        return getFilterValue.Number;
      }
    } if (controllerType.toLocaleLowerCase() === this.washersData.find(x => x.id === 2).value) {
      return signalList.Number;
    }
    return undefined;
  }

  // Get isSolid Product Data
  getIsSolidProduct(signalList, productName, selectedController) {
    // removeLockedNameFromProductMethod used to slice (Locked) after product Name
    productName = this.removeLockedNameFromProduct(productName);
    let data = this.getProductDataListByController(selectedController);
    let regionName = this.jsonParseMasterData()?.controllerProductSettings.Region;
    let getFilterValue = data[regionName].FormulaSummaryInfo.find(item => item.ProductName == productName);
    if (getFilterValue) {
      return getFilterValue.IsSolidProduct;
    }
    return undefined;
  }

  // Get isLocked Product

  getIsLockedProduct(signalList, productName, selectedController, regionValue?) {
    let data = this.getProductDataListByController(selectedController);
    let regionName = regionValue ? regionValue : this.jsonParseMasterData()?.controllerProductSettings.Region;
    if (selectedController.toLocaleLowerCase() === this.washersData.find(x => x.id === 1).value) {
      let getFilterValue = data[regionName].FormulaSummaryInfo.find(item => item.ProductName == productName);
      if (getFilterValue) {
        return getFilterValue.IsLocked;
      }
      return undefined;
    }
    if (selectedController.toLocaleLowerCase() === this.washersData.find(x => x.id === 2).value) {
      return this.fetchIslockedValueFOrLCLSProduct(productName, regionName);
    }

  }

  getProductDelay(signalList, productDelay) {
    let data = this.sclsdataserviceService.defaultFourmulaData();
    let regionName = this.getRegionName();
    let getFilterValue = data[regionName].FormulaSummaryInfo[0].FormulaSummaryList.find(item => item.ProductDelay == productDelay);
    if (getFilterValue) {
      return getFilterValue.Number;
    }
    return undefined;
  }

  // Creating the final Json 
  createFinalJsonData(masterData) {
    if (masterData?.configurationDetails?.ControllerApplication.value?.toLocaleLowerCase() === this.washersData.find(x => x.id === 3).value) {
      if (!this.userData.mail) {
        let localStorageData: any = localStorage.getItem('userDetail')
        let activeAccount: any = JSON.parse(localStorageData)
        this.userData.mail = activeAccount.username
        this.userData.givenName = activeAccount.name
      }
      let finalData: any = {
        Version: "1",
        email: this.userData.mail,
        name: this.userData.givenName,
        FileName: "",
        ConfigurationsDeviceSettings: [],
        PoolSpaInfoList: [],
        IsDirty: false
      };

      //// ConfigurationsDeviceSettings json creation logic
      let configurationsDeviceSettings: any = [];
      if (masterData?.controllerProductSettings?.Region) {
        let obj = {
          Name: 'Region',
          Value: masterData?.controllerProductSettings?.Region,
          HelpText: null
        }
        configurationsDeviceSettings.push(obj)
      }
      if (masterData?.controllerProductSettings?.UnitOfMeasure?.value) {
        let obj = {
          Name: 'Unit of Measure',
          Value: masterData?.controllerProductSettings?.UnitOfMeasure?.value,
          HelpText: null
        }
        configurationsDeviceSettings.push(obj)
      }
      //get number of bodies of water data
      let obj = {
        Name: 'Bodies of Water',
        Value: masterData?.watersettings?.length,
        HelpText: null
      }
      configurationsDeviceSettings.push(obj)
      //assign date and time value
      let dateobj = {
        Name: 'Date & Time',
        Value: masterData.dateAndTime,
        HelpText: null
      }
      configurationsDeviceSettings.push(dateobj)
      if (masterData?.controllerProductSettings?.TimeZone?.value) {
        let obj = {
          Name: 'Time Zone',
          Value: masterData?.controllerProductSettings?.TimeZone?.value,
          HelpText: null
        }
        configurationsDeviceSettings.push(obj)
      }

      finalData.ConfigurationsDeviceSettings = configurationsDeviceSettings;

      //// PoolSpaInfoList json creation logic
      let poolSpaInfoList: any = [];

      masterData?.watersettings.forEach((eachWasher, index) => {
        let obj: any = {
          Number: index + 1,
          Name: "",
          AssetName: "",
          BodyofWaterDetails: {},
          BodyOfWaterAdvancedDetails: {}
        }
        let settingData: any = {
          Name: "",
          Type: eachWasher.Types.value,
          Size: "837 Gallons",
          FilterType: "Sand",
          Location: "Outdoor",
          PumpRoom: "At Grade",
          Disinfectant: eachWasher.Disinfectant.value,
          Feeder: eachWasher.Feeder.value,
          NumberOfFeeder: "1",
          PHEquipment: "Standard 1cc",
          SqueezeSize: "1",
          PHConcentration: "1:4",
          PHSetPoint: eachWasher.PHSetPoint.value,
          PHDisinfectantSetPoint: eachWasher.PHDisinfectantSetPoint,
          PHDisinfectantSensor: eachWasher.PHDisinfectantSensor.value,
          FlowMeter: eachWasher.FlowMeter,
          PHConductivitySensor: "Installed"
        }
        obj['BodyofWaterDetails'] = settingData
        let advanceSettingData: any = {
          IsAux1Enabled: eachWasher.Aux1.value == "ON" ? true : false,
          IsAux2Enabled: eachWasher.Aux2.value == "ON" ? true : false,
          pHInOverFeed: eachWasher.pHInOverFeed,
          DisinfectantInOverFeed: eachWasher.DisinfectantInOverFeed,
          Aux1Info: null,
          Aux2Info: null
        }
        if (eachWasher.Aux1.value == "ON") {
          let aux1Data: any = {
            AuxFeederTypeDescription: eachWasher.FeederType1,
            AuxFeederType: 1,
            BleachBackupSetpoint: 2,
            DaysOfTheWeek: this.getDays(eachWasher, 1, true),
            TimeOfDay: this.getTime(eachWasher.Time1),
            Duration: eachWasher?.Duration1 != 0 ? eachWasher.Duration1 : 0,
            FeedTime: 0,
            ReadTime: 0,
            DelayFeed: 0
          }
          advanceSettingData['Aux1Info'] = aux1Data
        }
        if (eachWasher.Aux2.value == "ON") {
          let aux2Data: any = {
            AuxFeederTypeDescription: eachWasher.FeederType2,
            AuxFeederType: 2,
            BleachBackupSetpoint: 2,
            DaysOfTheWeek: this.getDays(eachWasher, 2, true),
            TimeOfDay: this.getTime(eachWasher.Time2),
            Duration: eachWasher?.Duration2 != 0 ? eachWasher.Duration2 : 0,
            FeedTime: 0,
            ReadTime: 0,
            DelayFeed: 0
          }
          advanceSettingData['Aux2Info'] = aux2Data
        }
        obj['BodyOfWaterAdvancedDetails'] = advanceSettingData

        poolSpaInfoList.push(obj)
      })
      finalData.AdditionalInfo = {};
      finalData.PoolSpaInfoList = poolSpaInfoList;
      console.log(finalData);
      return finalData;
    }
    else {
      if (!this.userData.mail) {
        let localStorageData: any = localStorage.getItem('userDetail')
        let activeAccount: any = JSON.parse(localStorageData)
        this.userData.mail = activeAccount.username
        this.userData.givenName = activeAccount.name
      }
      let finalData: any = {
        email: this.userData.mail,
        name: this.userData.givenName,
        ConfigurationsDeviceSettings: [],
        ControllerSettingsList: [],
        WasherDetailsList: [],
        FormulaSummaryInfo: []
      };

      let isScls = masterData?.configurationDetails?.ControllerApplication.value?.toLocaleLowerCase() === this.washersData.find(x => x.id === 1).value ? true : false;

      //// ControllerSettingsList json creation logic

      let controllerSeetingList: any = [];
      this.pumpProducts = "";
      if (masterData?.controllerProductSettings?.ProductOne?.value !== 'None') {
        let obj = {
          Name: 'Product 1',
          Value: masterData?.controllerProductSettings?.ProductOne?.value,
          HelpText: null
        }
        controllerSeetingList.push(obj)
        if (masterData?.configurationDetails?.ControllerApplication.value?.toLocaleLowerCase() === this.washersData.find(x => x.id === 2).value)
          this.getpumpProducts(1, masterData?.controllerProductSettings?.ProductOne?.value);
      }

      if (masterData?.controllerProductSettings?.ProductTwo?.value !== 'None') {
        let obj = {
          Name: 'Product 2',
          Value: masterData?.controllerProductSettings?.ProductTwo?.value,
          HelpText: null
        }
        controllerSeetingList.push(obj)
        if (masterData?.configurationDetails?.ControllerApplication.value?.toLocaleLowerCase() === this.washersData.find(x => x.id === 2).value)
          this.getpumpProducts(2, masterData?.controllerProductSettings?.ProductTwo?.value);
      }

      if (masterData?.controllerProductSettings?.ProductThree?.value !== 'None') {
        let obj = {
          Name: 'Product 3',
          Value: masterData?.controllerProductSettings?.ProductThree?.value,
          HelpText: null
        }
        controllerSeetingList.push(obj)
        if (masterData?.configurationDetails?.ControllerApplication.value?.toLocaleLowerCase() === this.washersData.find(x => x.id === 2).value)
          this.getpumpProducts(3, masterData?.controllerProductSettings?.ProductThree?.value);
      }

      if (masterData?.controllerProductSettings?.ProductFour?.value !== 'None') {
        let obj = {
          Name: 'Product 4',
          Value: masterData?.controllerProductSettings?.ProductFour?.value,
          HelpText: null
        }
        controllerSeetingList.push(obj)
        if (masterData?.configurationDetails?.ControllerApplication.value?.toLocaleLowerCase() === this.washersData.find(x => x.id === 2).value)
          this.getpumpProducts(4, masterData?.controllerProductSettings?.ProductFour?.value);
      }

      if (masterData?.controllerProductSettings?.ProductFive?.value?.toLocaleLowerCase() !== 'none') {
        let obj = {
          Name: 'Product 5',
          Value: masterData?.controllerProductSettings?.ProductFive?.value,
          HelpText: null
        }
        controllerSeetingList.push(obj)
        if (masterData?.configurationDetails?.ControllerApplication.value?.toLocaleLowerCase() === this.washersData.find(x => x.id === 2).value)
          this.getpumpProducts(5, masterData?.controllerProductSettings?.ProductFive?.value);
      }

      if (masterData?.configurationDetails?.ControllerApplication.value?.toLocaleLowerCase() === this.washersData.find(x => x.id === 2).value && masterData?.controllerProductSettings?.ProductSix && masterData?.controllerProductSettings?.ProductSix?.value !== 'NONE') {
        let obj = {
          Name: 'Product 6',
          Value: masterData?.controllerProductSettings?.ProductSix?.value,
          HelpText: null
        }
        controllerSeetingList.push(obj)
        if (masterData?.configurationDetails?.ControllerApplication.value?.toLocaleLowerCase() === this.washersData.find(x => x.id === 2).value)
          this.getpumpProducts(6, masterData?.controllerProductSettings?.ProductSix?.value);
      }

      if (masterData?.configurationDetails?.ControllerApplication.value?.toLocaleLowerCase() === this.washersData.find(x => x.id === 2).value && masterData?.controllerProductSettings?.ProductSeven && masterData?.controllerProductSettings?.ProductSeven?.value !== 'NONE') {
        let obj = {
          Name: 'Product 7',
          Value: masterData?.controllerProductSettings?.ProductSeven?.value,
          HelpText: null
        }
        controllerSeetingList.push(obj)
        if (masterData?.configurationDetails?.ControllerApplication.value?.toLocaleLowerCase() === this.washersData.find(x => x.id === 2).value)
          this.getpumpProducts(7, masterData?.controllerProductSettings?.ProductSeven?.value);
      }

      if (masterData?.configurationDetails?.ControllerApplication.value?.toLocaleLowerCase() === this.washersData.find(x => x.id === 2).value && masterData?.controllerProductSettings?.ProductEight && masterData?.controllerProductSettings?.ProductEight?.value !== 'NONE') {
        let obj = {
          Name: 'Product 8',
          Value: masterData?.controllerProductSettings?.ProductEight?.value,
          HelpText: null
        }
        controllerSeetingList.push(obj)
        if (masterData?.configurationDetails?.ControllerApplication.value?.toLocaleLowerCase() === this.washersData.find(x => x.id === 2).value)
          this.getpumpProducts(8, masterData?.controllerProductSettings?.ProductEight?.value);
      }

      finalData.ControllerSettingsList = controllerSeetingList;

      //// ConfigurationsDeviceSettings json creation logic
      let configurationsDeviceSettings: any = [];
      if (masterData?.controllerProductSettings?.Region) {
        let obj = {
          Name: 'Region',
          Value: masterData?.controllerProductSettings?.Region,
          HelpText: null
        }

        configurationsDeviceSettings.push(obj)
      }
      if (masterData?.controllerProductSettings?.UnitOfMeasure?.value) {
        let obj = {
          Name: 'Unit of Measure',
          Value: masterData?.controllerProductSettings?.UnitOfMeasure?.value,
          HelpText: null
        }

        configurationsDeviceSettings.push(obj)
      }
      if (masterData?.controllerProductSettings?.NumberOfWashers) {
        let obj = {
          Name: 'Number of Washers',
          Value: masterData?.washersettings?.length,
          HelpText: null
        }

        configurationsDeviceSettings.push(obj)
      }
      if (masterData?.controllerProductSettings?.FormulaSelector?.value) {
        let obj = {
          Name: 'Formula Selector',
          Value: masterData?.controllerProductSettings?.FormulaSelector?.value,
          HelpText: null
        }

        configurationsDeviceSettings.push(obj)
      }
      if (masterData?.controllerProductSettings?.FormulaSelector?.value) {
        let obj = {
          Name: 'Date & Time',
          Value: this.getUtcDate(false),
          HelpText: null
        }

        configurationsDeviceSettings.push(obj)
      }
      if (masterData?.controllerProductSettings?.PrimaryLanguage?.value) {
        let obj = {
          Name: 'Primary Language',
          Value: masterData?.controllerProductSettings?.PrimaryLanguage?.value,
          HelpText: null
        }

        configurationsDeviceSettings.push(obj)
      }
      if (masterData?.controllerProductSettings?.SecondaryLanguage) {
        let obj = {
          Name: 'Secondary Language',
          Value: masterData?.controllerProductSettings?.SecondaryLanguage?.value,
          HelpText: null
        }

        configurationsDeviceSettings.push(obj)
      }
      if (masterData?.controllerProductSettings?.TmLangauage?.value) {
        let obj = {
          Name: 'TM Language',
          Value: masterData?.controllerProductSettings?.TmLangauage?.value,
          HelpText: null
        }

        configurationsDeviceSettings.push(obj)
      }

      if (masterData?.controllerProductSettings?.TimeZone?.value) {
        let obj = {
          Name: 'Time Zone',
          Value: masterData?.controllerProductSettings?.TimeZone?.value,
          HelpText: null
        }

        configurationsDeviceSettings.push(obj)
      }

      if (masterData?.controllerProductSettings?.Facility) {
        let obj = {
          Name: 'Facility',
          Value: masterData?.controllerProductSettings?.Facility,
          HelpText: null
        }

        configurationsDeviceSettings.push(obj)
      }

      finalData.ConfigurationsDeviceSettings = configurationsDeviceSettings;

      //add for other 4

      //// WasherDetailsList json creation logic
      let washerDetailsList: any = [];

      masterData?.washersettings.forEach((eachWasher, index) => {
        let obj: any = {
          WasherName: eachWasher?.WasherName,
          Capacity: eachWasher?.Capacity,
          SignalMode: eachWasher?.SignalMode?.value,
          RevertFormula: eachWasher?.RevertFormula?.value,
          PostFlushTime: eachWasher?.PostFlushTime,
          WasherNumber: index + 1,
          AdvancedSignalMode: eachWasher?.AdvancedSignalMode.value || eachWasher?.AdvancedSignalMode,
          SignalFilterTime: eachWasher?.SignalFilterTime,
          AssetID: "",
          AssetName: "",
          Data: []
        }
        masterData?.formula[index]?.formulaControlsArray.forEach((eachFormula, fIndex) => {
          let fObj: any = {
            Id: fIndex + 1,
            FormulaName: eachFormula?.ForumlaName,
            HasError: false
          }
          obj['Data'].push(fObj)
        })
        washerDetailsList.push(obj)
      })

      finalData.WasherDetailsList = washerDetailsList;

      //// FormulaSummaryInfo json creation logic

      let formulaSummaryInfo: any = [];
      masterData?.formula?.forEach((eachWasher, index) => {
        eachWasher?.formulaControlsArray?.forEach((eachWasherFormula, findex) => {
          let newObj: any = {
            WasherNumber: index + 1,
            FormulaNumber: eachWasherFormula?.FormulaNumber,
            FormulaSummaryList: []
          }
          eachWasherFormula?.SignalList.forEach((signal, signalIndex) => {
            let isLockedForLCLS = this.getIsLockedProduct(signal, signal?.ProductName, masterData?.configurationDetails?.ControllerApplication.value?.toLocaleLowerCase());
            if (masterData?.configurationDetails?.ControllerApplication.value?.toLocaleLowerCase() === this.washersData.find(x => x.id === 2).value) {
              if (signal?.ProductName && signal?.ProductName?.includes('-P')) {
                let startIndex = signal?.ProductName.indexOf('-P');
                signal.ProductName = signal?.ProductName.slice(0, startIndex);
              }
            }
            let signalListObj: any = {
              Id: signalIndex,
              Signal: signal?.SignalNumber,
              ProductName: signal?.ProductName,
              ActualProductAmount: this.productAmountCalJsonCreate(masterData?.controllerProductSettings?.UnitOfMeasure?.value, signal.ActualAmount, signal, isScls),
              Number: this.getProductNumber(signal, signal?.ProductName, masterData?.configurationDetails?.ControllerApplication.value),
              IsSolidProduct: this.getIsSolidProduct(signal, signal?.ProductName, masterData?.configurationDetails?.ControllerApplication.value?.toLocaleLowerCase()),
              IsLocked: isLockedForLCLS ? isLockedForLCLS : this.getIsLockedProduct(signal, signal?.ProductName, masterData?.configurationDetails?.ControllerApplication.value?.toLocaleLowerCase()),
              HasError: false,
              ProductDelay: signal?.ProductDelay
            };
            newObj['FormulaSummaryList'].push(signalListObj)
          })
          formulaSummaryInfo.push(newObj);
        })
      })
      finalData.FormulaSummaryInfo = formulaSummaryInfo;
      //For LCLS LockedPumps and PumpProducts will be added while saving the config file    
      if (masterData?.configurationDetails?.ControllerApplication.value?.toLocaleLowerCase() === this.washersData.find(x => x.id === 2).value) {
        let defaultData = this.defaultFourmulaData(masterData?.configurationDetails?.ControllerApplication.value)
        let AdditionalInfo = defaultData[masterData?.controllerProductSettings?.Region].AdditionalInfo;
        AdditionalInfo.PumpProducts = this.pumpProducts;
        finalData.AdditionalInfo = AdditionalInfo;
      }
      return finalData;
    }
  }
  // edit get the final Data
  editConfigJson(getEditMastetData) {
    //// configurationDetails json edit logic;
    let getnameAndControllerValue = getEditMastetData.id;
    let nameSplit = getnameAndControllerValue;
    let name = nameSplit.split('_')[0];
    let controllerApplication = nameSplit.split('_')[1];
    let configurationDetailsEdit: any = {
      Name: name,
      ControllerApplication: {
        value: controllerApplication,
      }
    };
    if (configurationDetailsEdit?.ControllerApplication.value?.toLocaleLowerCase() === this.washersData.find(x => x.id === 3).value) {
      let finalEditData: any = {
        configurationDetails: [],
        controllerProductSettings: [],
        watersettings: [],
        washersettings: [],
      };

      finalEditData.configurationDetails = configurationDetailsEdit;
      //// controllerProductSettings json edit logic
      let controllerProductSettingsEdit: any = {
        Region: this.findTheValueByName(getEditMastetData?.ConfigurationsDeviceSettings, 'Region'),
        UnitOfMeasure: {
          value: this.findTheValueByName(getEditMastetData?.ConfigurationsDeviceSettings, 'Unit of Measure'),
        },
        NumberOfWashers: this.findTheValueByName(getEditMastetData?.ConfigurationsDeviceSettings, 'Bodies of Water'),
        TimeZone: {
          value: this.findTheValueByName(getEditMastetData?.ConfigurationsDeviceSettings, 'Time Zone'),
        },
      }
      finalEditData.controllerProductSettings = controllerProductSettingsEdit;

      //// watersettings json edit logic

      let waterDetailsListEdit: any = [];
      getEditMastetData.PoolSpaInfoList.forEach((getWaterItem, index) => {
        let obj: any = {
          Disinfectant: {
            value: getWaterItem?.BodyofWaterDetails?.Disinfectant
          },
          Feeder: {
            value: getWaterItem?.BodyofWaterDetails?.Feeder
          },
          FilterType: {
            value: getWaterItem?.BodyofWaterDetails?.FilterType
          },
          FlowMeter: getWaterItem?.BodyofWaterDetails?.FlowMeter,
          Location: getWaterItem?.BodyofWaterDetails?.Location,
          NumberOfFeeder: getWaterItem?.BodyofWaterDetails?.NumberOfFeeder,
          PHConcentration: {
            value: getWaterItem?.BodyofWaterDetails?.PHConcentration
          },
          PHDisinfectantSensor: {
            value: getWaterItem?.BodyofWaterDetails?.PHDisinfectantSensor
          },
          PHDisinfectantSetPoint: getWaterItem?.BodyofWaterDetails?.PHDisinfectantSetPoint,
          PHEquipment: {
            value: getWaterItem?.BodyofWaterDetails?.PHEquipment
          },
          PHSetPoint: {
            value: getWaterItem?.BodyofWaterDetails?.PHSetPoint
          },
          PumpRoom: {
            value: getWaterItem?.BodyofWaterDetails?.PumpRoom
          },
          Size: getWaterItem?.BodyofWaterDetails?.Size,
          SqueezeSize: getWaterItem?.BodyofWaterDetails?.SqueezeSize,
          Types: {
            value: getWaterItem?.BodyofWaterDetails?.Type
          },
          DisinfectantInOverFeed: getWaterItem.BodyOfWaterAdvancedDetails?.DisinfectantInOverFeed,
          pHInOverFeed: getWaterItem.BodyOfWaterAdvancedDetails?.pHInOverFeed,
          Aux1: {
            value: getWaterItem.BodyOfWaterAdvancedDetails?.IsAux1Enabled ? "ON" : "OFF"
          },
          FeederType1: getWaterItem.BodyOfWaterAdvancedDetails?.Aux1Info?.AuxFeederTypeDescription,
          TimeOfDay1: getWaterItem.BodyOfWaterAdvancedDetails?.Aux1Info?.TimeOfDay,
          Duration1: getWaterItem.BodyOfWaterAdvancedDetails?.Aux1Info?.Duration ?? 0,
          Time1: this.convertTime(getWaterItem.BodyOfWaterAdvancedDetails?.Aux1Info?.TimeOfDay),
          isMonAux1: this.isDayActive(getWaterItem.BodyOfWaterAdvancedDetails?.Aux1Info?.DaysOfTheWeek, "M"),
          isTueAux1: this.isDayActive(getWaterItem.BodyOfWaterAdvancedDetails?.Aux1Info?.DaysOfTheWeek, "Tu"),
          isWedAux1: this.isDayActive(getWaterItem.BodyOfWaterAdvancedDetails?.Aux1Info?.DaysOfTheWeek, "W"),
          isThuAux1: this.isDayActive(getWaterItem.BodyOfWaterAdvancedDetails?.Aux1Info?.DaysOfTheWeek, "Th"),
          isFriAux1: this.isDayActive(getWaterItem.BodyOfWaterAdvancedDetails?.Aux1Info?.DaysOfTheWeek, "F"),
          isSatAux1: this.isDayActive(getWaterItem.BodyOfWaterAdvancedDetails?.Aux1Info?.DaysOfTheWeek, "Sa"),
          isSunAux1: this.isDayActive(getWaterItem.BodyOfWaterAdvancedDetails?.Aux1Info?.DaysOfTheWeek, "Su"),
          Aux2: {
            value: getWaterItem.BodyOfWaterAdvancedDetails?.IsAux2Enabled ? "ON" : "OFF"
          },
          FeederType2: getWaterItem.BodyOfWaterAdvancedDetails?.Aux2Info?.AuxFeederTypeDescription ?? null,
          TimeOfDay2: getWaterItem.BodyOfWaterAdvancedDetails?.Aux2Info?.TimeOfDay,
          Duration2: getWaterItem.BodyOfWaterAdvancedDetails?.Aux2Info?.Duration ?? 0,
          Time2: this.convertTime(getWaterItem.BodyOfWaterAdvancedDetails?.Aux2Info?.TimeOfDay),
          isMonAux2: this.isDayActive(getWaterItem.BodyOfWaterAdvancedDetails?.Aux2Info?.DaysOfTheWeek, "M"),
          isTueAux2: this.isDayActive(getWaterItem.BodyOfWaterAdvancedDetails?.Aux2Info?.DaysOfTheWeek, "Tu"),
          isWedAux2: this.isDayActive(getWaterItem.BodyOfWaterAdvancedDetails?.Aux2Info?.DaysOfTheWeek, "W"),
          isThuAux2: this.isDayActive(getWaterItem.BodyOfWaterAdvancedDetails?.Aux2Info?.DaysOfTheWeek, "Th"),
          isFriAux2: this.isDayActive(getWaterItem.BodyOfWaterAdvancedDetails?.Aux2Info?.DaysOfTheWeek, "F"),
          isSatAux2: this.isDayActive(getWaterItem.BodyOfWaterAdvancedDetails?.Aux2Info?.DaysOfTheWeek, "Sa"),
          isSunAux2: this.isDayActive(getWaterItem.BodyOfWaterAdvancedDetails?.Aux2Info?.DaysOfTheWeek, "Su"),
        }
        waterDetailsListEdit.push(obj);
      });
      finalEditData.watersettings = waterDetailsListEdit;
      finalEditData.washersettings = null;
      return finalEditData;
    }
    else {
      let finalEditData: any = {
        configurationDetails: [],
        controllerProductSettings: [],
        washersettings: [],
        watersettings: [],
        formula: []
      };

      finalEditData.configurationDetails = configurationDetailsEdit;

      //// controllerProductSettings json edit logic
      let controllerProductSettingsEdit: any = {
        Region: this.findTheValueByName(getEditMastetData?.ConfigurationsDeviceSettings, 'Region'),
        UnitOfMeasure: {
          value: this.findTheValueByName(getEditMastetData?.ConfigurationsDeviceSettings, 'Unit of Measure'),
        },
        NumberOfWashers: this.findTheValueByName(getEditMastetData?.ConfigurationsDeviceSettings, 'Number of Washers'),
        FormulaSelector: {
          value: this.findTheValueByName(getEditMastetData?.ConfigurationsDeviceSettings, 'Formula Selector'),
        },

        PrimaryLanguage: {
          value: this.findTheValueByName(getEditMastetData?.ConfigurationsDeviceSettings, 'Primary Language'),
        },
        SecondaryLanguage: {
          value: this.findTheValueByName(getEditMastetData?.ConfigurationsDeviceSettings, 'Secondary Language'),
        },

        TmLangauage: {
          value: this.findTheValueByName(getEditMastetData?.ConfigurationsDeviceSettings, 'TM Language'),
        },
        TimeZone: {
          value: this.findTheValueByName(getEditMastetData?.ConfigurationsDeviceSettings, 'Time Zone'),
        },
        ProductOne: {
          value: this.findTheValueByName(getEditMastetData?.ControllerSettingsList, 'Product 1'),
        },
        ProductTwo: {
          value: this.findTheValueByName(getEditMastetData?.ControllerSettingsList, 'Product 2'),
        },
        ProductThree: {
          value: this.findTheValueByName(getEditMastetData?.ControllerSettingsList, 'Product 3'),
        },
        ProductFour: {
          value: (this.findTheValueByName(getEditMastetData?.ControllerSettingsList, 'Product 4') || "None"),
        },
        ProductFive: {
          value: (this.getProductData(getEditMastetData, 'Product 5', controllerApplication)),
        },
        ProductSix: {
          value: (this.findTheValueByName(getEditMastetData?.ControllerSettingsList, 'Product 6') || "NONE"),
        },
        ProductSeven: {
          value: (this.findTheValueByName(getEditMastetData?.ControllerSettingsList, 'Product 7') || "NONE"),
        },
        ProductEight: {
          value: (this.findTheValueByName(getEditMastetData?.ControllerSettingsList, 'Product 8') || "NONE"),
        },
        Facility: this.findTheValueByName(getEditMastetData?.ConfigurationsDeviceSettings, 'Facility')
      }

      finalEditData.controllerProductSettings = controllerProductSettingsEdit;

      //// washersettings json edit logic

      let washerDetailsListEdit: any = [];

      getEditMastetData.WasherDetailsList.forEach((getWasherItem, index) => {
        let newObj: any = {
          AdvancedSignalMode: {
            value: getWasherItem?.AdvancedSignalMode
          },
          Capacity: getWasherItem?.Capacity,
          PostFlushTime: getWasherItem?.PostFlushTime,
          RevertFormula: {
            value: getWasherItem?.RevertFormula
          },
          SignalFilterTime: getWasherItem?.SignalFilterTime,
          SignalMode: {
            value: getWasherItem?.SignalMode
          },
          WasherName: getWasherItem?.WasherName,
          WasherNumber: getWasherItem?.WasherNumber
        }
        washerDetailsListEdit.push(newObj);
      });

      finalEditData.washersettings = washerDetailsListEdit;
      finalEditData.watersettings = null;
      //// formula json edit logic

      let globalFormulaArray: any = JSON.parse(JSON.stringify([]));
      let dividerValue = 15;
      let parentIndex = -1;
      getEditMastetData.FormulaSummaryInfo.forEach((parentItem, index) => {

        if (index % dividerValue == 0) {
          parentIndex = parentIndex + 1;
          globalFormulaArray.push({
            formulaControlsArray: []
          });
        }

        let formulaChildIndex = index % dividerValue;
        let newObj: any = {
          FormulaNumber: parentItem?.FormulaNumber,
          ForumlaName: getEditMastetData.WasherDetailsList[parentIndex].Data[formulaChildIndex].FormulaName,
          SignalList: []
        }
        parentItem.FormulaSummaryList.forEach(signalList => {
          if (controllerApplication?.toLocaleLowerCase() === this.washersData.find(x => x.id === 2).value) {
            let lclsPockets = LclsPockets;
            let pocketName: string = '';
            let pocketNum = lclsPockets?.find(x => x.id === signalList?.Number)?.pocketWithNum;
            if (pocketNum) {
              pocketName = pocketNum;
            }
            if (getEditMastetData.ControllerSettingsList.find(x => x.Name === pocketName).Value) {
              signalList.ProductName = getEditMastetData.ControllerSettingsList.find(x => x.Name === pocketName).Value + '-' + lclsPockets?.find(x => x.pocketWithNum === pocketName)?.appendValue;
            }
          }
          let newObjSignal: any = {
            Id: signalList?.Id,
            ActualAmount: this.productAmountCalJsonEdit(getEditMastetData, getEditMastetData?.ConfigurationsDeviceSettings, signalList.ActualProductAmount, signalList, controllerApplication?.toLocaleLowerCase()),
            ProductAmount: this.productAmountCalJsonEdit(getEditMastetData, getEditMastetData?.ConfigurationsDeviceSettings, signalList.ActualProductAmount, signalList, controllerApplication?.toLocaleLowerCase()),
            ProductName: signalList?.ProductName,
            SignalNumber: signalList?.Signal,
            IsSolidProduct: signalList?.IsSolidProduct,
            IsLocked: signalList?.IsLocked,
            HasError: false,
            Number: signalList?.Number,
            ProductDelay: signalList?.ProductDelay
          }
          newObj['SignalList'].push(newObjSignal);
        });

        globalFormulaArray[parentIndex].formulaControlsArray.push(newObj);
      });
      finalEditData.formula = globalFormulaArray;
      return finalEditData;
    }
  }

  // Find the particular name Data From JSON..
  findTheValueByName(arr, name): string | boolean | number | null {
    let val = null;
    arr.forEach(eachObj => {
      if (eachObj.Name == name) {
        val = eachObj.Value;
      }
    })
    return val;
  }

  // Capacity Data
  capacityLBData(controllerType: string) {
    if (controllerType.toLocaleLowerCase() == this.washersData.find(x => x.id === 1).value) {
      let data = new Array(135);
      for (var k = 21; k < data.length; k++) {
        data[k] = k + 1 + ' lb';
      }
      const result = data.filter((element): element is string => {
        return element !== null;
      });
      data = result;
      return data;
    }
    if (controllerType.toLocaleLowerCase() == this.washersData.find(x => x.id === 2).value) {
      let data = new Array(400);
      for (var k = 15; k <= data.length; k += 5) {
        data[k] = k + ' lb';
      }
      const result = data.filter((element): element is string => {
        return element !== null;
      });
      data = result;
      return data;
    }
    else
      return null;
  }


  capacityKgData(controllerType: string) {
    if (controllerType.toLocaleLowerCase() == this.washersData.find(x => x.id === 1).value) {
      let data = new Array(61);
      for (let i = 10, l = data.length; i <= l; i += 0.5) {
        data.push(i.toFixed(1) + ' kg');
      }
      const result = data.filter((element): element is string => {
        return element !== null;
      });
      data = result;
      return data;
    }
    if (controllerType.toLocaleLowerCase() == this.washersData.find(x => x.id === 2).value) {
      let data = new Array(181);
      for (let i = 4.5, l = data.length; i <= l; i += 0.5) {
        data.push(i.toFixed(1) + ' kg');
      }
      const result = data.filter((element): element is string => {
        return element !== null;
      });
      data = result;
      return data;
    }
    else
      return null;
  }

  defaultCapacity(controllerType: any) {
    var data;
    if (controllerType.toLocaleLowerCase() == this.washersData.find(x => x.id === 1).value) {
      data = [
        { value: '50 lb' },
        { value: '45.4 kg' },
        { value: '20 kg' }
      ]
    }
    if (controllerType.toLocaleLowerCase() == this.washersData.find(x => x.id === 2).value) {
      data = [
        { value: '50 lb' },
        { value: '22.7 kg' },
        { value: '22.7 kg' }
      ]

    }
    return data;
  }

  //get all the pocket details based on the signal number/pocket number
  getPocketData(selectedController: string, region: string) {
    let regionData = this.getRegionBasedData(selectedController, region);
    let productList: any = [];
    if (selectedController?.toLowerCase() === this.washersData.find(x => x.id === 1).value) {
      regionData?.Pocket1.forEach(element => {
        productList.push(element);
      });
      regionData?.Pocket2.forEach(element => {
        productList.push(element);
      });
      regionData?.Pocket3.forEach(element => {
        productList.push(element);
      });
      regionData?.Pocket4.forEach(element => {
        productList.push(element);
      });
      regionData?.Pocket5.forEach(element => {
        productList.push(element);
      });
    }
    if (selectedController?.toLowerCase() === this.washersData.find(x => x.id === 2).value) {
      productList = this.lclsRegionBasedData[region].Pocket;
    }
    return productList;
  }

  getRegionBasedData(selectedController: string, region: string) {
    let regionSelectionData: any = [];
    if (selectedController?.toLowerCase() === this.washersData.find(x => x.id === 1).value) {
      regionSelectionData = this.sclsRegionBasedData[region];
    }
    if (selectedController?.toLowerCase() === this.washersData.find(x => x.id === 2).value) {
      let data = this.lclsRegionBasedData[region];
      regionSelectionData.Pocket1 = data.Pocket;
      regionSelectionData.Pocket2 = data.Pocket;
      regionSelectionData.Pocket3 = data.Pocket;
      regionSelectionData.Pocket4 = data.Pocket;
      regionSelectionData.Pocket5 = data.Pocket;
      regionSelectionData.Pocket5 = data.Pocket1;
      regionSelectionData.Pocket6 = data.Pocket1;
      regionSelectionData.Pocket7 = data.Pocket1;
      regionSelectionData.Pocket8 = data.Pocket1;
      regionSelectionData.timeZones = data.timeZones;
    }
    if (selectedController?.toLowerCase() === this.washersData.find(x => x.id === 3).value) {
      regionSelectionData = this.ab300RegionBasedData[region];
    }
    if (selectedController?.toLowerCase() === this.washersData.find(x => x.id === 4).value) {
      regionSelectionData = this.alcsRegionBasedData[region];
    }
    return regionSelectionData;
  }

  isProductDataValid(selectedController: string, region: string, masterdata: any) {
    let productList = this.getPocketData(selectedController, region);
    let isDataValid: boolean = false;
    let productEmpty: boolean = false;
    let formulaData = masterdata?.formula;
    if (productList && formulaData) {
      formulaData.forEach(washer => {
        if (!isDataValid) {
          washer.formulaControlsArray.forEach(formula => {
            if (!isDataValid) {
              formula.SignalList.forEach(signal => {
                let ProductName = signal.ProductName;
                if (signal.ProductName && signal.ProductName?.includes('-P')) {
                  let startIndex = signal.ProductName.indexOf('-P');
                  ProductName = signal.ProductName.slice(0, startIndex);
                }
                if (signal.ProductName == '')
                  productEmpty = true
                if (selectedController?.toLocaleLowerCase() != this.washersData.find(x => x.id === 2).value && (masterdata.hasProductError && productList.findIndex(x => x.value === ProductName) === -1) && !productEmpty) {
                  isDataValid = true;
                }
              });
            }
          });
        }
      });
    }
    return isDataValid;
  }

  ////Method used to slice (Locked) after product Name
  removeLockedNameFromProduct(productName: any) {
    if (productName && productName?.includes('Locked')) {
      let startIndex = productName.indexOf(' (Locked)');
      productName = productName.slice(0, startIndex);
    }
    return productName;
  }

  //// Matching the selected pocket value at configuration setting with default json and return of the appropriate product name
  getProductName(pName, regionValue?) {
    let pocketObj: any = this.getRegionBasedData(this.jsonParseMasterData()?.configurationDetails.ControllerApplication.value, regionValue ? regionValue : this.jsonParseMasterData()?.controllerProductSettings.Region);
    let pocketName: string = '';
    Object.keys(pocketObj).forEach(eachPocketKey => {
      pocketObj[eachPocketKey].forEach(eachObj => {
        if (eachObj.value == pName) {
          pocketName = eachPocketKey;
        }
      })
    })
    let keyName = this.pocketNames[pocketName];
    if (this.jsonParseMasterData()?.controllerProductSettings[keyName]?.value && this.jsonParseMasterData()?.controllerProductSettings[keyName]?.value?.toLocaleLowerCase() != 'none') {
      return this.jsonParseMasterData()?.controllerProductSettings[keyName]?.value;
    }
    return pName;
  }

  getRegionName() {
    let regionName = this.jsonParseMasterData()?.controllerProductSettings?.Facility == 'Long Term Care' && this.jsonParseMasterData()?.controllerProductSettings.Region == this.sclsRegions[0].value ? 'NorthAmericaLTC' : this.jsonParseMasterData().controllerProductSettings.Region;
    return regionName;
  }

  defaultFourmulaData(selectedController: string) {
    if (selectedController?.toLocaleLowerCase() == this.washersData.find(x => x.id === 1).value) {
      return this.sclsdataserviceService.defaultFourmulaData();
    }
    if (selectedController?.toLocaleLowerCase() == this.washersData.find(x => x.id === 2).value) {
      return this.lclsdataserviceService.defaultFourmulaData();
    } else {
      return this.sclsdataserviceService.defaultFourmulaData();
    }
  }

  //Formula type
  formulaType() {
    let data = [
      { id: 1, value: 'LinenType' },
      { id: 2, value: 'Custom Formula' }
    ]
    return data;
  }

  // Return 1 to 15 number 
  formulaNumber() {
    let data = new Array(15);
    for (var i = 0; i < data.length; i++) {
      data[i] = i + 1;
    }
    return data;
  }

  defaultSignalNumber() {
    let data = new Array(6);
    for (var i = 0; i < data.length; i++) {
      data[i] = i + 1;
    }
    return data;
  }

  getProductDataListByController(selectedController: string) {
    let productList;
    if (selectedController.toLocaleLowerCase() === this.washersData.find(x => x.id === 1).value)
      productList = this.sclsdataserviceService.sclsProductDataList();
    if (selectedController.toLocaleLowerCase() === this.washersData.find(x => x.id === 2).value)
      productList = this.lclsdataserviceService.lclsProductDataList();
    return productList;
  }

  //Method used to fetch IsLocked flag for LCLS product
  fetchIslockedValueFOrLCLSProduct(productNameWithPocket, regionValue, pocketNumber?) {
    let IsLocked: boolean = false;
    if (pocketNumber) {
      productNameWithPocket = productNameWithPocket + pocketNumber;
    }
    if (regionValue === this.LclsRegions[1].value) {
      IsLocked = productNameWithPocket && (productNameWithPocket.includes('-P3') || productNameWithPocket.includes('-P5')) ? true : false;
    }
    else {
      IsLocked = productNameWithPocket && (productNameWithPocket.includes('-P2') || productNameWithPocket.includes('-P3')) ? true : false;
    }
    return IsLocked;
  }

  getProductData(data, pocketNum, controllerApplication) {
    let value = this.findTheValueByName(data?.ControllerSettingsList, pocketNum);
    if (value) {
      return value;
    } else {
      return controllerApplication.toLocaleLowerCase() === this.washersData.find(x => x.id === 1).value ? "None" : 'NONE'
    }
  }

  fetchProductwithPocketNumberLCLS(productName: any, PocketName: any, selectedCOntroller: any) {
    if (selectedCOntroller.toLocaleLowerCase() === this.washersData.find(x => x.id === 1).value) {
      return productName;
    }
    if (selectedCOntroller.toLocaleLowerCase() === this.washersData.find(x => x.id === 2).value) {
      if (productName?.toLocaleLowerCase() === 'none') {
        return productName;
      }
      let lclsPockets = LclsPockets;
      let appendValue = lclsPockets?.find(x => x.value === PocketName)?.appendValue;
      productName = productName && !productName.includes(appendValue) ? productName + '-' + appendValue : productName;
      return productName;
    }
  }

  roundOfToTwoDeciamlPoint(num) {
    if (num) {
      num = num.toString(); //If it's not already a String
      if (num.includes("."))
        num = num.slice(0, (num.indexOf(".")) + 3); //With 3 exposing the hundredths place
      return Number(num); //If you need it back as a Number
    }
    else return num;
  }

  // converting to kg to lb or lb to kg
  convertKGtoLb(capacity) {
    let capacityValue;
    let value = capacity?.split(' ')[0];
    let unit = capacity?.split(' ')[1];
    if (unit == 'lb') {
      let kilograms: any = (value * this.kilogramsValue);
      // let remainder = kilograms - parseInt(kilograms);
      let roundedKG = Math.round(kilograms);
      capacityValue = roundedKG + ' kg';
    } else if (unit == 'kg') {
      let roundedLb = Math.round(value * this.lbValue);
      capacityValue = roundedLb + ' lb';
    }
    return capacityValue;
  }

  //get pocket numbers for the products 
  getProductNumberForSignals(number, ProductName, selectedController) {
    if (number && selectedController?.toLocaleLowerCase() != this.washersData.find(x => x.id === 2).value) {
      return number
    }
    else {
      if (ProductName?.includes("-P")) {
        return parseInt(ProductName.split('-P')[1]);
      }
    }
  }

  //// Matching the selected pocket value at configuration setting with default json and return of the appropriate product name
  getProductNameForSignal(pName, pocketNumber: any, masterData) {
    let selectedController = masterData.configurationDetails.ControllerApplication.value;
    let region = masterData.controllerProductSettings.Region;
    if (selectedController.toLocaleLowerCase() === this.washersData.find(x => x.id === 1).value) {
      let pocketObj: any = this.getRegionBasedData(selectedController, region);
      let pocketName: string = '';
      Object.keys(pocketObj).forEach(eachPocketKey => {
        pocketObj[eachPocketKey].forEach(eachObj => {
          if (eachObj.value == pName) {
            pocketName = eachPocketKey;
          }
        })
      })
      let keyName = this.pocketNames[pocketName];
      if (masterData?.controllerProductSettings[keyName]?.value) {
        return masterData?.controllerProductSettings[keyName]?.value;
      }
      return pName;
    }
    if (selectedController.toLocaleLowerCase() === this.washersData.find(x => x.id === 2).value) {
      let lclsPockets = LclsPockets;
      let pocketName: string = '';
      pocketNumber = pocketNumber ? pocketNumber : this.getProductNumberForSignals(pocketNumber, pName, selectedController)
      let pocketNum = lclsPockets?.find(x => x.id === pocketNumber)?.value;
      if (pocketNum) {
        pocketName = pocketNum;
      }

      if (masterData?.controllerProductSettings[pocketName]?.value && masterData?.controllerProductSettings[pocketName]?.value?.toLocaleLowerCase() != 'none') {
        return masterData?.controllerProductSettings[pocketName]?.value + '-' + lclsPockets?.find(x => x.id === pocketNumber)?.appendValue;
      }
      if (!masterData?.controllerProductSettings[pocketName]) {
        return 'NONE';
      }
      return pName;
    }
  }

  getpumpProducts(pocketNumber, ProductName) {
    let lclsProducts = LclsProducts;
    let productNumber = lclsProducts.find(x => x.value === ProductName)?.id
    if (this.pumpProducts == "")
      this.pumpProducts = pocketNumber + ':' + productNumber;
    else
      this.pumpProducts = this.pumpProducts + ':' + pocketNumber + ':' + productNumber;
  }

  /// Get Disinfectant Setpoint Data
  disinfectantSetpoint() {
    let data = new Array(6);
    for (let i = 1.0, l = data.length; i <= l; i += 0.5) {
      data.push(i.toFixed(1));
    }
    const result = data.filter((element): element is string => {
      return element !== null;
    });
    data = result;
    return data;
  }

  getObjectToStringTime(timeObj: { hour: number, minute: number, second: number }): string {
    if (timeObj) {
      return `${("0" + timeObj.hour).slice(-2)}:${("0" + timeObj.minute).slice(-2)}:${("0" + timeObj.second).slice(-2)}`
    }
    return '';
  }

  getTime(time: any) {
    if (time) {
      let hour = time?.hour?.toString().length == 1 ? '0' + time.hour : time.hour;
      let min = time?.minute?.toString().length == 1 ? '0' + time.minute : time.minute;
      if (hour == "00" && min == "00")
        return null;
      else
        return hour + ':' + min;
    }
    else return null;
  }

  getDays(data: any, auxNum: number, isCreate: boolean) {
    let days: string = "";
    if (auxNum == 1) {
      if (data.isSunAux1)
        days = days ? days + ',Su' : days + 'Su';
      if (data.isMonAux1)
        days = days ? days + ',M' : days + 'M';
      if (data.isTueAux1)
        days = days ? days + ',Tu' : days + 'Tu';
      if (data.isWedAux1)
        days = days ? days + ',W' : days + 'W';
      if (data.isThuAux1)
        days = days ? days + ',Th' : days + 'Th';
      if (data.isFriAux1)
        days = days ? days + ',F' : days + 'F';
      if (data.isSatAux1)
      days = days ? days + ',Sa' : days + 'Sa';
    }
    if (auxNum == 2) {
      if (data.isSunAux2)
        days = days ? days + ',Su' : days + 'Su';
      if (data.isMonAux2)
        days = days ? days + ',M' : days + 'M';
      if (data.isTueAux2)
        days = days ? days + ',Tu' : days + 'Tu';
      if (data.isWedAux2)
        days = days ? days + ',W' : days + 'W';
      if (data.isThuAux2)
        days = days ? days + ',Th' : days + 'Th';
      if (data.isFriAux2)
        days = days ? days + ',F' : days + 'F';
      if (data.isSatAux2)
        days = days ? days + ',Sa' : days + 'Sa';
    }
    if (isCreate)
      return (days == "") ? null : days;
    else
      return (days == "") ? "----" : days;
  }

  isDayActive(Days: any, checkDay) {
    if (Days) {
      let days = Days.split(",");
      if (days.includes(checkDay))
        return true;
      else
        return false;
    }
    else return false;
  }

  convertTime(time) {
    if (time && !time.includes("undefined")) {
      let res = time.split(":")
      let data: any = {
        hour: parseInt(res[0]),
        minute: parseInt(res[1])
      }
      return data;
    }
    else return null;
  }
}


