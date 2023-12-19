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
    AssetHistory:null
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

  getAssetHostory(AssetId: number): Observable<any> {
    return this.httpClient.get(`${this.baseAPIProvider.baseCommissoioningwebApi}api/portal/getAssetHistory?AssetId=${AssetId}`)
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

  // get the product number form json

  jsonParseMasterData() {
    let masterData: any = localStorage.getItem('masterData');
    let localStoreData = JSON.parse(masterData);
    return localStoreData;
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


