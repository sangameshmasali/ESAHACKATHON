import { AfterViewChecked, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertService } from 'projects/commissioningwebportal-app/src/app/modules';
import { AlertModalComponent } from 'projects/commissioningwebportal-app/src/app/shared/alert-modal/alert-modal.component';
import { LclsRegionBasedData, SclsRegionBasedData, WashersData } from 'projects/commissioningwebportal-app/src/assets/data';
import { GenericConfigurationService } from '../../../services/generic-configuration.service';
import { SclsdataserviceService } from '../../../services/sclsdataservice.service';

@Component({
  selector: 'app-reviewfinalise',
  templateUrl: './reviewfinalise.component.html',
  styleUrls: ['./reviewfinalise.component.scss']
})
export class ReviewfinaliseComponent implements OnInit, AfterViewChecked {

  reviewfinaliseForm!: FormGroup;
  masterData: any = {};
  masterData$: any = null;
  ConfigurationData: any;
  reviewSummaray: any[];
  reviewPageData: any[];
  openIndex: number = 0;
  isEditFlag: boolean;
  sucessObjectMessage: any = {};
  hideWasherContent: boolean[] = [];
  onPageload: boolean = false;
  editedWasherindex: any;
  isCollapsed: boolean;
  signalData: any;
  hasProductError: boolean = false;
  region: string;
  productList: any[];
  popupObjectMessage: any;
  selectedController: string;
  washersData: any = WashersData;
  hasFormulaError: boolean = false;
  isLockedError: boolean = false

  constructor(private router: Router, private spinner: NgxSpinnerService, private alert: AlertService,
    private translate: TranslateService, public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private genericConfigurationService: GenericConfigurationService, private sclsdataserviceService: SclsdataserviceService,
    private modalService: NgbModal, private readonly changeDetectorRef: ChangeDetectorRef) {
    this.masterData$ = this.genericConfigurationService.masterData.subscribe(data => {
      if (data) {
        this.selectedController = data?.configurationDetails?.ControllerApplication?.value;
        this.masterData = data;
        this.isEditFlag = this.masterData.isEditFlag;
        this.initializeForm();
        this.reviewSummaray = this.showReviewsummaryData();
      }
    });
  }

  ngOnInit(): void {
    this.translate.setDefaultLang('en-US');
    this.getTranslation();
    let reviewSummarayDetials = this.reviewPageData;
    this.reviewSummaray = this.sortSignalNumber(reviewSummarayDetials);
  }

  ngAfterViewChecked(): void {
    this.changeDetectorRef.detectChanges();
  }

  initializeForm() {
    this.reviewfinaliseForm = new FormGroup({
    });
    this.onPageload = true;
    this.selectedController = this.masterData?.configurationDetails?.ControllerApplication?.value;
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
  }

  // Redirect To Save Configurathion page
  redirectoSaveConfigPge() {
    this.router.navigate([this.genericConfigurationService.routePath.concat('/saved-configuration')]);
  }
  // Create Configurations code goes here

  createConfiguration() {
    this.spinner.show();
    // get the user details
    let jsonObj = this.genericConfigurationService.createFinalJsonData(this.masterData);
    this.genericConfigurationService.CreateUpsertConfigFile(jsonObj, this.masterData).subscribe(res => {
      this.spinner.hide();
      if (res) {
        this.redirectoSaveConfigPge();
        if (this.isEditFlag) {
          this.alert.success(this.sucessObjectMessage.UpdateSuccessMessage, this.genericConfigurationService.setTimeOutValue, true);
        }
        else {
          this.alert.success(this.sucessObjectMessage.CreateSuccessMessage, this.genericConfigurationService.setTimeOutValue, true);
        }
      }
    }, (err: any) => {
      console.log(err);
      this.alert.error("Something went wrong while saving data", this.genericConfigurationService.setTimeOutValue, true);
      this.spinner.hide();
    });
  }

  // dispensedAmount Cal
  calDispensedAmount(productAmount, washerSettingsIndex,) {
    let uom = this.masterData?.washersettings[washerSettingsIndex]?.Capacity;
    let value = uom.split(' ')[0];
    let unit = uom.split(' ')[1];
    if (unit == 'lb') {
      let res = ((productAmount * (value / 100)))
      return res.toFixed(2);
    } else {
      let res = ((productAmount * value))
      return res.toFixed(2);
    }
  }
  calproductamount(productAmount) {
    return this.genericConfigurationService.roundOfToTwoDeciamlPoint((productAmount));
  }
  backToPerviousPage() {
    if (this.hasProductError) {
      this.router.navigate([this.genericConfigurationService.routePath.concat('/controller-productsetting')]);
    } else {
      this.masterData['hasProductError'] = false;
      this.genericConfigurationService.setLocalStorage(this.masterData);
      this.genericConfigurationService.masterData.next(this.masterData);
      this.updateMasterData();
      this.router.navigate([this.genericConfigurationService.routePath.concat('/formula')]);
    }
  }

  toggleWasher(i) {
    if (this.onPageload) {
      if (this.masterData?.hideWasherContent && this.masterData?.hideWasherContent[i]) {
        this.hideWasherContent[i] = true;
        return;
      }
      if (this.masterData?.washersettings?.length == 1 || !(this.masterData?.hideWasherContent.length > 1) || this.masterData.editedWasherindex === 0) {
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

  // Get the tranlation text 
  getTranslation() {
    this.translate.get([
      'createSuccessMessage', 'updateSuccessMessage', 'uomlb', 'Signal', 'Product', 'Amtlbs', 'Amtkg', 'Delay', 'DispensedAmtlbs', 'DispensedAmtkg', 'back', 'CreateConfiguration', 'UpdateConfiguration'
    ]).subscribe(texts => {
      this.sucessObjectMessage = {
        CreateSuccessMessage: texts.createSuccessMessage,
        UpdateSuccessMessage: texts.updateSuccessMessage,
        uomlb: texts.uomlb,
        Signal: texts.Signal,
        Product: texts.Product,
        Amtlbs: texts.Amtlbs,
        Amtkg: texts.Amtkg,
        Delay: texts.Delay,
        DispensedAmtlbs: texts.DispensedAmtlbs,
        DispensedAmtkg: texts.DispensedAmtkg,
        back: texts.back,
        CreateConfiguration: texts.CreateConfiguration,
        UpdateConfiguration: texts.UpdateConfiguration
      };
    });
  }

  sortSignalNumber(data) {
    data.forEach((el, index) => {
      el[1]?.formulaControlsArray.forEach((ol, index) => {
        ol.SignalList = ol?.SignalList?.sort((a, b) => {
          if (a?.SignalNumber && b?.SignalNumber) {
            return a?.SignalNumber > b?.SignalNumber ? 1 : -1
          }
          else {
            return -1;
          }
        });
      });
    });
    return data;
  }

  // Review and summary loop the data which is washer 1 formula 1 washer2 formula 2 washer3 formula3
  showReviewsummaryData() {
    let data = this.masterData;
    let arr1 = data.washersettings;
    this.region = data?.controllerProductSettings?.Region;
    let arr2 = data.formula ? this.isSignalDataValid(data.formula) : null;

    if (arr2) {
      let reviewDetails = [arr1, arr2].reduce((c, v) => {
        v.forEach((o, i) => {
          c[i] = c[i] || [];
          c[i].push(o);
        });
        return c;
      }, []);
      this.reviewPageData = reviewDetails;
      return reviewDetails;
    }
  }

  //check if all the signal data is valid 
  isSignalDataValid(data: any) {
    this.productList = this.genericConfigurationService.getPocketData(this.masterData?.configurationDetails?.ControllerApplication?.value, this.region);
    data?.forEach(washer => {
      washer.formulaControlsArray.forEach(formula => {
        formula.SignalList.forEach((signal) => {
          this.signalData = signal;
          if (this.selectedController?.toLocaleLowerCase() != this.washersData.find(x => x.id === 2).value && !(this.productList.findIndex(x => x.value == signal.ProductName) != -1)) {
            signal.isValid = true
            this.signalData.isValid = false;
            this.hasProductError = true;
            if (signal.ProductName == '')
              this.hasFormulaError = true;
          }
          else if (this.selectedController.toLocaleLowerCase() == this.washersData.find(x => x.id === 1).value && signal.ProductName == 'ECL Soursoft') {
            let isLocked = this.fetchIsLockFlagfromProduct(signal.ProductName);
            if (isLocked != signal.IsLocked) {
              signal.isValid = false;
            }
            else
              signal.isValid = true;
          }
          else {
            signal.isValid = true;
          }
        });
      });
    });
    return data;
  }

  //check if controller and product data is valid 
  isControllerDataValid(productNumber, productName, pocketNumber?) {
    let isValid;
    this.productList = this.genericConfigurationService.getPocketData(this.masterData?.configurationDetails?.ControllerApplication?.value, this.region);
    if (this.selectedController.toLocaleLowerCase() != this.washersData.find(x => x.id === 1).value || this.productList.findIndex(x => x.value === this.masterData?.controllerProductSettings[productNumber]?.value) != -1)
      isValid = true;
    if (this.selectedController.toLocaleLowerCase() == this.washersData.find(x => x.id === 1).value) {
      let formulaData = this.masterData.formula;
      if (productName == 'ECL Soursoft') {
        formulaData.forEach(formula => {
          formula.formulaControlsArray.forEach(data => {
            data.SignalList.forEach(element => {
              if (element.ProductName == 'ECL Soursoft') {
                let isLocked = this.fetchIsLockFlagfromProduct(element.ProductName);
                if (isLocked != element.IsLocked) {
                  isValid = false;
                  this.masterData['isLockedError'] = this.isLockedError = true;
                  this.masterData['hasProductError'] = this.hasProductError = true;
                  this.genericConfigurationService.setLocalStorage(this.masterData);
                  return;
                }
              }
            })
          });
        });
      }
    }
    else {
      if (this.selectedController.toLocaleLowerCase() == this.washersData.find(x => x.id === 1).value) {
        this.masterData['hasProductError'] = this.hasProductError = true;
        this.genericConfigurationService.setLocalStorage(this.masterData);
        isValid = false;
      }
    }
    return isValid;
  }

  //check if product data is available or not for LCLS 
  isProductDataAvailable(productNumber) {
    let isValid;
    if (this.masterData?.controllerProductSettings[productNumber] && this.masterData?.controllerProductSettings[productNumber] != 'NONE' && this.masterData?.controllerProductSettings[productNumber].value != 'NONE') {
      isValid = true;
    }
    else {
      isValid = false;
    }
    return isValid;
  }

  //navigate to respected screen on edit button click
  onEditClick(routeTo: any, selectedWasher: any) {
    if (selectedWasher && selectedWasher != '') {
      this.editedWasherindex = selectedWasher;
      this.updateMasterData();
    }
    if (this.hasProductError && this.hasFormulaError) {
      this.genericConfigurationService.masterData.value.hasProductError = true;
      this.genericConfigurationService.setLocalStorage(this.genericConfigurationService.masterData.value);
      if (routeTo == 'formula') {
        this.router.navigate([this.genericConfigurationService.routePath.concat('/formula')]);
        this.hasFormulaError = false;
      }
    }
    else if (this.hasProductError || this.isLockedError) {
      this.genericConfigurationService.masterData.value.hasProductError = true;
      this.genericConfigurationService.setLocalStorage(this.genericConfigurationService.masterData.value);
      this.router.navigate([this.genericConfigurationService.routePath.concat('/controller-productsetting')]);
    } else {
      if (routeTo == 'washer') {
        this.router.navigate([this.genericConfigurationService.routePath.concat('/washersettings')]);
      }
      if (routeTo == 'formula') {
        this.router.navigate([this.genericConfigurationService.routePath.concat('/formula')]);
      }
      if (routeTo == 'configuration_details') {
        this.router.navigate([this.genericConfigurationService.routePath.concat('/configuration-details')]);
      }
      if (routeTo == 'productsetting') {
        this.router.navigate([this.genericConfigurationService.routePath.concat('/controller-productsetting')]);
      }
    }
  }

  //updating masterdata on editing 
  updateMasterData() {
    if (this.masterData?.washersettings?.length == 1 || this.isCollapsed) {
      this.genericConfigurationService.masterData.value.editedWasherindex = 0;
      this.genericConfigurationService.masterData.value.isWasherEdited = false;
    }
    else {
      this.genericConfigurationService.masterData.value.isWasherEdited = true;
      this.genericConfigurationService.masterData.value.editedWasherindex = this.editedWasherindex;
      this.genericConfigurationService.masterData.value.hideWasherContent = this.hideWasherContent;
    }
    this.genericConfigurationService.setLocalStorage(this.genericConfigurationService.masterData.value);
  }

  //method used to fetch isLocked flag and display locked icon
  fetchIsLockFlagfromProduct(productName, pocketNumeber?) {
    let isLocked: boolean = false;
    if (this.selectedController.toLocaleLowerCase() === this.washersData.find(x => x.id === 1).value) {
      isLocked = this.genericConfigurationService.getIsLockedProduct("", productName, this.selectedController);
      return isLocked;
    }
    if (this.selectedController.toLocaleLowerCase() === this.washersData.find(x => x.id === 2).value) {
      if (pocketNumeber) {
        isLocked = productName ? this.genericConfigurationService.fetchIslockedValueFOrLCLSProduct(productName, this.region, pocketNumeber) : false;
      }
      else {
        isLocked = productName ? this.genericConfigurationService.fetchIslockedValueFOrLCLSProduct(productName, this.region) : false;
      }
    }
    return isLocked;
  }
}
