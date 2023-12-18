import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GenericConfigurationService } from '../../../services/generic-configuration.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { SclsdataserviceService } from '../../../services/sclsdataservice.service';
import { TranslateService } from '@ngx-translate/core';
import { AuxTypes, AuxValues, Disinfectant, DisinfectantSensor, Feeder, FeederTypes, FlowMeter, Seconds, Time, Types, pHConcentration, pHSetpoint, weekDaysList } from 'projects/commissioningwebportal-app/src/assets/data/ab300-bodyofwater';
import { WashersData } from 'projects/commissioningwebportal-app/src/assets/data';
import { CustomValidator } from 'projects/commissioningwebportal-app/src/app/shared/validators/custom-validators';
import { flagService } from '../../../services/flag-service';

@Component({
  selector: 'app-ab300-watersettings',
  templateUrl: './ab300-watersettings.component.html',
  styleUrls: ['./ab300-watersettings.component.scss']
})
export class AB300WatersettingsComponent implements OnInit {
  waterSettingsForm!: FormGroup;
  masterData: any = {};
  masterData$: any = null;
  onPageload: boolean = false;
  oNeditStoreSelectedRegion: string;
  OneditStoreSelectedData: any;
  isEditFlag: any;
  types: any = Types;
  disinfectant: any = Disinfectant;
  pHSetpoint: any = pHSetpoint;
  disinfectantSensor: any = DisinfectantSensor;
  flowMeter: any = FlowMeter;
  pHConcentration: any = pHConcentration;
  disinfectantSetpoint: any = this.genericConfigurationService.disinfectantSetpoint();
  feederData: any = Feeder;
  hideWaterContent: boolean[] = [];
  maxLength: number;
  washersData: any = WashersData;
  selectedController: string;
  isCollapsed: boolean;
  regionSlected: any = null;
  editedWaterindex: number;
  feeder: any;
  auxValues: any = AuxValues;
  nextBtnDisable: boolean = false;
  FeederTypeValues: any = FeederTypes;
  time = Time;;
  meridian: any = true;
  timeDurationInSec: any = Seconds;
  aux1SettingsFlag: boolean = false;
  aux2SettingsFlag: boolean = false;
  copyBtnDisable: boolean[] = [];
  labelObjectMessages: any = {};
  weekDaysList: any[] = weekDaysList;
  auxTypes: any[] = AuxTypes;
  isInvalidOverfeed: boolean = false;

  constructor(private router: Router,
    private fb: FormBuilder,
    private genericConfigurationService: GenericConfigurationService,
    private translate: TranslateService,
    private flagService: flagService) {
    this.masterData$ = this.genericConfigurationService.masterData.subscribe(data => {
      if (data) {
        this.masterData = data;
        this.isEditFlag = this.masterData.isEditFlag;
        this.initializeForm();
        // this.feeder=this.
      }
    });
  }

  ngOnInit(): void {
    this.translate.setDefaultLang('en-US');
    this.getTranslation();
  }

  initializeForm() {
    this.selectedController = this.masterData?.configurationDetails?.ControllerApplication?.value?.toLocaleLowerCase();
    this.maxLength = this.washersData.find(x => x.value === this.selectedController).maxLength;
    this.getFeederData(0, false);
    this.waterSettingsForm = new FormGroup({
      getWaterControlsArray: this.fb.array(this.createWaterItem())
    });
    this.waterSettingsForm.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe((data: any) => {
      this.masterData['watersettings'] = this.waterSettingsForm.value.getWaterControlsArray;
      this.genericConfigurationService.setLocalStorage(this.masterData);
    });
    this.onPageload = true;
    if (this.masterData?.watersettings && this.masterData?.hidewaterContent?.length > 1 && this.masterData?.editedwaterindex != 0) {
      for (let i = 0; i <= this.masterData?.watersettings?.length - 1; i++) {
        this.toggleWater(i);
      }
      this.onPageload = false;
    }
    else {
      this.toggleWater(0);
      this.onPageload = false;
    }
    this.validateAdvanceInfo();
    this.IsOverfeedvalid();
  }

  get getWaterControlsArray() {
    return this.waterSettingsForm.controls['getWaterControlsArray'] as FormArray;
  }

  getTranslation() {
    this.translate.get([
      'bowSettings', 'bowType', 'bowDisinfectant', 'bowFeeder', 'bowPhSetPoint', 'bowdisinfectantSensor',
      'bowDisinfectantSetpoint', 'bowFlowMeter', 'bowAdvanced', 'bowPhInOverfeed', 'bowAuxOne', 'bowFeederTypeOne', 'bowDaysOfTheWeek',
      'bowTimeOfTheDay', 'bowDuration', 'bowAuxTwo', 'bowDisinfectantInOverfeed'
    ]).subscribe(texts => {
      this.labelObjectMessages = {
        bowSettings: texts.bowSettings,
        bowType: texts.bowType,
        bowDisinfectant: texts.bowDisinfectant,
        bowFeeder: texts.bowFeeder,
        bowPhSetPoint: texts.bowPhSetPoint,
        bowdisinfectantSensor: texts.bowdisinfectantSensor,
        bowDisinfectantSetpoint: texts.bowDisinfectantSetpoint,
        bowFlowMeter: texts.bowFlowMeter,
        bowAdvanced: texts.bowAdvanced,
        bowPhInOverfeed: texts.bowPhInOverfeed,
        bowDisinfectantInOverfeed: texts.bowDisinfectantInOverfeed,
        bowAuxOne: texts.bowAuxOne,
        bowFeederTypeOne: texts.bowFeederTypeOne,
        bowDaysOfTheWeek: texts.bowDaysOfTheWeek,
        bowTimeOfTheDay: texts.bowTimeOfTheDay,
        bowDuration: texts.bowDuration,
        bowAuxTwo: texts.bowAuxTwo
      };
    });
  }

  navigateToReviewPage() {
    this.waterSettingsForm['submitted'] = true;
    this.validateOverFeedValues();
    if (!this.waterSettingsForm.valid) {
      this.validateAdvanceInfo();
      return;
    }
    this.masterData['watersettings'] = this.waterSettingsForm.value.getWaterControlsArray;
    this.genericConfigurationService?.setLocalStorage(this.masterData);
    this.genericConfigurationService?.masterData.next(this.masterData);
    this.genericConfigurationService.navigateToReviewPage(this.selectedController);
  }

  createWaterItem() {
    let formData: any = [];
    let data = this.masterData?.watersettings;
    if (data) {
      for (let eachData of data) {
        let formObj = this.fb.group({
          WaterNumber: new FormControl(eachData?.WaterNumber || 1, Validators.required),
          WaterName: new FormControl(eachData?.WaterName || 'Bodies of Water 1', Validators.required),
          Types: new FormControl(eachData.Types || this.types[0], Validators.required),
          Disinfectant: new FormControl(eachData.Disinfectant || this.disinfectant[0], Validators.required),
          Feeder: new FormControl(eachData.Feeder || this.feeder[0], Validators.required),
          PHSetPoint: new FormControl(eachData.PHSetPoint || this.pHSetpoint[2], Validators.required),
          PHDisinfectantSensor: new FormControl(eachData.PHDisinfectantSensor || this.disinfectantSensor[1], Validators.required),
          PHDisinfectantSetPoint: new FormControl(eachData.PHDisinfectantSetPoint || this.disinfectantSetpoint[6], Validators.required),
          FlowMeter: new FormControl(eachData.FlowMeter || this.flowMeter[0].value, Validators.required),
          pHInOverFeed: new FormControl(eachData.pHInOverFeed || 180, [CustomValidator.rangeValidatorForOverfeed(), Validators.required]),
          DisinfectantInOverFeed: new FormControl(eachData.DisinfectantInOverFeed || 180, [CustomValidator.rangeValidatorForOverfeed(), Validators.required]),
          //These field controls used to set Advanced settings when Aux is set to ON, Aux1 Settings 
          Aux1: new FormControl(eachData.Aux1, Validators.required),
          FeederType1: new FormControl(this.FeederTypeValues[0].value),
          Time1: new FormControl(eachData.Time1 ? eachData.Time1 : this.time),
          Duration1: new FormControl(eachData.Duration1),
          isSunAux1: new FormControl(eachData.isSunAux1),
          isMonAux1: new FormControl(eachData.isMonAux1),
          isTueAux1: new FormControl(eachData.isTueAux1),
          isWedAux1: new FormControl(eachData.isWedAux1),
          isThuAux1: new FormControl(eachData.isThuAux1),
          isFriAux1: new FormControl(eachData.isFriAux1),
          isSatAux1: new FormControl(eachData.isSatAux1),
          //These field controls used to set Advanced settings when Aux is set to ON, Aux2 Settings 
          Aux2: new FormControl(eachData.Aux2, Validators.required),
          FeederType2: new FormControl(this.FeederTypeValues[0].value),
          Time2: new FormControl(eachData.Time2 ? eachData.Time2 : this.time),
          Duration2: new FormControl(eachData.Duration2),
          isSunAux2: new FormControl(eachData.isSunAux2),
          isMonAux2: new FormControl(eachData.isMonAux2),
          isTueAux2: new FormControl(eachData.isTueAux2),
          isWedAux2: new FormControl(eachData.isWedAux2),
          isThuAux2: new FormControl(eachData.isThuAux2),
          isFriAux2: new FormControl(eachData.isFriAux2),
          isSatAux2: new FormControl(eachData.isSatAux2),
        })
        formData.push(formObj);
      }
    }
    else {
      let formObj = this.fb.group({
        WaterNumber: new FormControl(data?.WaterNumber || 1, Validators.required),
        WaterName: new FormControl(data?.WaterName || 'Bodies of Water 1', Validators.required),
        Types: new FormControl(this.types[0], Validators.required),
        Disinfectant: new FormControl(this.disinfectant[0], Validators.required),
        Feeder: new FormControl(this.feeder[0], Validators.required),
        PHSetPoint: new FormControl(this.pHSetpoint[2], Validators.required),
        PHDisinfectantSensor: new FormControl(this.disinfectantSensor[1], Validators.required),
        PHDisinfectantSetPoint: new FormControl(this.disinfectantSetpoint[6], Validators.required),
        FlowMeter: new FormControl(this.flowMeter[0].value, Validators.required),
        pHInOverFeed: new FormControl(180, [CustomValidator.rangeValidatorForOverfeed(), Validators.required]),
        DisinfectantInOverFeed: new FormControl(180, [CustomValidator.rangeValidatorForOverfeed(), Validators.required]),
        //These field controls used to set Advanced settings when Aux is set to ON, Aux1 Settings
        Aux1: new FormControl(this.auxValues[0], Validators.required),
        FeederType1: new FormControl(this.FeederTypeValues[0].value),
        Time1: new FormControl(this.time),
        Duration1: new FormControl(this.timeDurationInSec[0]),
        isSunAux1: new FormControl(false),
        isMonAux1: new FormControl(false),
        isTueAux1: new FormControl(false),
        isWedAux1: new FormControl(false),
        isThuAux1: new FormControl(false),
        isFriAux1: new FormControl(false),
        isSatAux1: new FormControl(false),
        //These field controls used to set Advanced settings when Aux is set to ON, Aux2 Settings
        Aux2: new FormControl(this.auxValues[0], Validators.required),
        FeederType2: new FormControl(this.FeederTypeValues[0].value),
        Time2: new FormControl(this.time),
        Duration2: new FormControl(this.timeDurationInSec[0]),
        isSunAux2: new FormControl(false),
        isMonAux2: new FormControl(false),
        isTueAux2: new FormControl(false),
        isWedAux2: new FormControl(false),
        isThuAux2: new FormControl(false),
        isFriAux2: new FormControl(false),
        isSatAux2: new FormControl(false),
      });
      formData.push(formObj);
    }
    return formData;
  }

  createWaterForm(index) {
    this.getFeederData(index, false);
    return this.fb.group({
      WaterNumber: new FormControl(this.getWaterControlsArray.length + 1, Validators.required),
      WaterName: new FormControl(`Bodies of Water ${this.getWaterControlsArray.length + 1}`, Validators.required),
      Types: new FormControl(this.types[0], Validators.required),
      Disinfectant: new FormControl(this.disinfectant[0], Validators.required),
      Feeder: new FormControl(this.feeder[0], Validators.required),
      PHSetPoint: new FormControl(this.pHSetpoint[2], Validators.required),
      PHDisinfectantSensor: new FormControl(this.disinfectantSensor[1], Validators.required),
      PHDisinfectantSetPoint: new FormControl(this.disinfectantSetpoint[6], Validators.required),
      FlowMeter: new FormControl(this.flowMeter[0].value, Validators.required),
      pHInOverFeed: new FormControl(180, [CustomValidator.rangeValidatorForOverfeed(), Validators.required]),
      DisinfectantInOverFeed: new FormControl(180, [CustomValidator.rangeValidatorForOverfeed(), Validators.required]),
      //These field controls used to set Advanced settings when Aux is set to ON, Aux1 Settings
      Aux1: new FormControl(this.auxValues[0], Validators.required),
      FeederType1: new FormControl(this.FeederTypeValues[0].value),
      Time1: new FormControl(this.time),
      Duration1: new FormControl(this.timeDurationInSec[0]),
      isSunAux1: new FormControl(false),
      isMonAux1: new FormControl(false),
      isTueAux1: new FormControl(false),
      isWedAux1: new FormControl(false),
      isThuAux1: new FormControl(false),
      isFriAux1: new FormControl(false),
      isSatAux1: new FormControl(false),
      //These field controls used to set Advanced settings when Aux is set to ON, Aux2 Settings
      Aux2: new FormControl(this.auxValues[0], Validators.required),
      feederType2: new FormControl(this.FeederTypeValues[0].value),
      Time2: new FormControl(this.time),
      Duration2: new FormControl(this.timeDurationInSec[0]),
      isSunAux2: new FormControl(false),
      isMonAux2: new FormControl(false),
      isTueAux2: new FormControl(false),
      isWedAux2: new FormControl(false),
      isThuAux2: new FormControl(false),
      isFriAux2: new FormControl(false),
      isSatAux2: new FormControl(false),
    });
  }

  copyWaterForm(copyForm) {
    return this.fb.group({
      WaterNumber: new FormControl(this.getWaterControlsArray.length + 1, Validators.required),
      WaterName: new FormControl(`Bodies of Water ${this.getWaterControlsArray.length + 1}`, Validators.required),
      Types: new FormControl(copyForm.value.Types, Validators.required),
      Disinfectant: new FormControl(copyForm.value.Disinfectant, Validators.required),
      Feeder: new FormControl(copyForm.value.Feeder, Validators.required),
      PHSetPoint: new FormControl(copyForm.value.PHSetPoint, Validators.required),
      PHDisinfectantSensor: new FormControl(copyForm.value.PHDisinfectantSensor, Validators.required),
      PHDisinfectantSetPoint: new FormControl(copyForm.value.PHDisinfectantSetPoint, Validators.required),
      FlowMeter: new FormControl(copyForm.value.FlowMeter, Validators.required),
      pHInOverFeed: new FormControl(copyForm.value.pHInOverFeed, [CustomValidator.rangeValidatorForOverfeed(), Validators.required]),
      DisinfectantInOverFeed: new FormControl(copyForm.value.DisinfectantInOverFeed, [CustomValidator.rangeValidatorForOverfeed(), Validators.required]),
      //These field controls used to set Advanced settings when Aux is set to ON, Aux1 Settings
      Aux1: new FormControl(copyForm.value.Aux1, Validators.required),
      FeederType1: new FormControl(this.FeederTypeValues[0].value),
      Time1: new FormControl(copyForm.value.Time1),
      Duration1: new FormControl(copyForm.value.Duration1),
      isSunAux1: new FormControl(copyForm.value.isSunAux1),
      isMonAux1: new FormControl(copyForm.value.isMonAux1),
      isTueAux1: new FormControl(copyForm.value.isTueAux1),
      isWedAux1: new FormControl(copyForm.value.isWedAux1),
      isThuAux1: new FormControl(copyForm.value.isThuAux1),
      isFriAux1: new FormControl(copyForm.value.isFriAux1),
      isSatAux1: new FormControl(copyForm.value.isSatAux1),
      //These field controls used to set Advanced settings when Aux is set to ON, Aux2 Settings
      Aux2: new FormControl(copyForm.value.Aux2, Validators.required),
      FeederType2: new FormControl(this.FeederTypeValues[0].value),
      Time2: new FormControl(copyForm.value.Time2),
      Duration2: new FormControl(copyForm.value.Duration2),
      isSunAux2: new FormControl(copyForm.value.isSunAux2),
      isMonAux2: new FormControl(copyForm.value.isMonAux2),
      isTueAux2: new FormControl(copyForm.value.isTueAux2),
      isWedAux2: new FormControl(copyForm.value.isWedAux2),
      isThuAux2: new FormControl(copyForm.value.isThuAux2),
      isFriAux2: new FormControl(copyForm.value.isFriAux2),
      isSatAux2: new FormControl(copyForm.value.isSatAux2),
    });
  }

  removeWater(index) {
    this.getWaterControlsArray.removeAt(index);
    if (!this.copyBtnDisable[index])
      this.copyBtnDisable[index] = false;
    for (let item in this.getWaterControlsArray.controls) {
      (this.waterSettingsForm.get('getWaterControlsArray') as FormArray).at(parseInt(item)).get('WaterNumber')?.patchValue(parseInt(item) + 1);
      (this.waterSettingsForm.get('getWaterControlsArray') as FormArray).at(parseInt(item)).get('WaterName')?.patchValue(`Bodies of Water ${parseInt(item) + 1}`);
    }
    if (this.masterData.hasOwnProperty('formula')) {
      this.masterData?.formula?.splice(index, 1);
      this.hideWaterContent[index] = false;
    }
    if (!(this.getWaterControlsArray.length > 1)) {
      this.hideWaterContent[0] = true;
    }
    this.IsOverfeedvalid();
  }

  toggleWater(i) {
    if (this.onPageload) {
      if (this.masterData?.hidewaterContent && this.masterData?.hidewaterContent[i]) {
        this.hideWaterContent[i] = true;
        return;
      }
      if (this.masterData?.watersettings?.length == 1 || !(this.masterData?.hidewaterContent?.length > 1) || this.masterData?.editedWaterindex === 0) {
        this.hideWaterContent[0] = true;
        return;
      }
    }
    else {
      this.hideWaterContent[i] = !this.hideWaterContent[i];
      if (this.masterData?.watersettings) {
        for (let i = 0; i <= this.masterData?.watersettings?.length - 1; i++) {
          if (this.hideWaterContent[i]) {
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

  addAndCopyWater(index, iswaterCopy) {
    if (this.getWaterControlsArray.length < this.maxLength) {
      this.toggleWater(this.getWaterControlsArray.length);
      if (index < 0) {
        this.getWaterControlsArray.push(this.createWaterForm(index));
      }
      else {
        if (this.getWaterControlsArray.controls[index].valid) {
          this.copyBtnDisable[index] = false;
          this.getWaterControlsArray.push(this.copyWaterForm(this.getWaterControlsArray.controls[index]));
        }
        else {
          this.copyBtnDisable[index] = true;
          this.validateAdvanceInfo();
        }
      }
    }
  }

  //updating masterdata on editing 
  updateMasterData() {
    if (this.masterData?.watersettings?.length == 1 || this.isCollapsed) {
      this.genericConfigurationService.masterData.value.editedWaterindex = 0;
      this.genericConfigurationService.masterData.value.iswaterEdited = false;
    }
    else {
      this.genericConfigurationService.masterData.value.iswaterEdited = true;
      this.genericConfigurationService.masterData.value.editedWaterindex = this.isCollapsed ? 0 : this.editedWaterindex;
      this.genericConfigurationService.masterData.value.hidewaterContent = this.hideWaterContent;
    }
    this.genericConfigurationService.setLocalStorage(this.genericConfigurationService.masterData.value);
  }

  getFormArrayElement(index, formControlName) {
    return (this.waterSettingsForm.get('getWaterControlsArray') as FormArray).at(parseInt(index)).get(formControlName)?.value;
  }

  setFormArrayElement(index, formControlName, value) {
    (this.waterSettingsForm.get('getWaterControlsArray') as FormArray).at(parseInt(index)).get(formControlName)?.patchValue(value);
  }

  getFeederData(index, isEdit) {
    if (!isEdit)
      this.feeder = this.feederData['CalHypo'];
    else {
      let disinfectantValue;
      let selectedDisinfectant = this.getFormArrayElement(index, 'Disinfectant');
      if (selectedDisinfectant && selectedDisinfectant.value.includes('-'))
        disinfectantValue = selectedDisinfectant.value.replace('-', '');
      else
        disinfectantValue = selectedDisinfectant.value;
      this.feeder = this.feederData[disinfectantValue];
    }
  }

  ControllerProductPage() {
    this.masterData['watersettings'] = this.waterSettingsForm.value.getWaterControlsArray;
    this.genericConfigurationService?.setLocalStorage(this.masterData);
    this.genericConfigurationService?.masterData.next(this.masterData);
    this.router.navigate([this.genericConfigurationService.routePath.concat('/controller-productsetting')]);
  }


  ngOnDestroy(): void {
    if (this.masterData$) {
      this.masterData$.unsubscribe();
    }
    this.masterData['watersettings'] = this.waterSettingsForm.value.getWaterControlsArray;
    this.genericConfigurationService?.setLocalStorage(this.masterData);
    this.genericConfigurationService?.masterData.next(this.masterData);
  }

  onDisinfectantChange(index) {
    this.getFeederData(index, true);
    this.setFormArrayElement(index, 'Feeder', this.feeder[0]);
  }

  get DisinfectantInOverFeed() {
    return this.waterSettingsForm.get('DisinfectantInOverFeed') as FormControl;
  }

  get pHInOverFeed() {
    return this.waterSettingsForm.get('pHInOverFeed') as FormControl;
  }

  //this function will validate wheather data is filled in mandatory fields are not, if not entered it will highlight the text box
  validateAdvanceInfo() {
    let waterArray = this.waterSettingsForm.controls['getWaterControlsArray'];
    this.getWaterControlsArray.controls.forEach((element, index) => {
      let disinfectantOverFeed = element.get('DisinfectantInOverFeed') as FormControl;
      let isDisinfectantInvalid: boolean = false;
      if (disinfectantOverFeed.value == '' || disinfectantOverFeed.value < 15 || disinfectantOverFeed.value > 1260 || !(/^\d+$/.test(disinfectantOverFeed.value))) {
        disinfectantOverFeed.markAsTouched();
        isDisinfectantInvalid = true;
      }
      else isDisinfectantInvalid = false;

      let pHOverfeed = element.get('pHInOverFeed') as FormControl;
      let ispHInvalid: boolean = false;
      if (pHOverfeed.value == '' || pHOverfeed.value < 15 || pHOverfeed.value > 1260 || !(/^\d+$/.test(pHOverfeed.value))) {
        pHOverfeed.markAsTouched();
        ispHInvalid = true;
      }
      else ispHInvalid = false;

      if (!this.isInvalidOverfeed && (isDisinfectantInvalid || ispHInvalid)) {
        this.copyBtnDisable[index] = true;
        this.isInvalidOverfeed = true;
      }
      else {
        this.copyBtnDisable[index] = false;
        this.isInvalidOverfeed = false;
      }
    });
  }

  onPHOverfeedChange(index) {
    let isDisinfectantInvalid: boolean = false;
    const pHOverFeed = (<FormArray>this.waterSettingsForm.controls['getWaterControlsArray']).at(index).get('pHInOverFeed') as FormControl;
    if (pHOverFeed.value == '' || pHOverFeed.value < 15 || pHOverFeed.value > 1260 || !(/^\d+$/.test(pHOverFeed.value))) {
      pHOverFeed.markAsTouched();
      isDisinfectantInvalid = true;
    }
    else isDisinfectantInvalid = false;

    let ispHInvalid: boolean = false;
    const disinfectantOverFeed = (<FormArray>this.waterSettingsForm.controls['getWaterControlsArray']).at(index).get('DisinfectantInOverFeed') as FormControl;
    if (disinfectantOverFeed.value == '' || disinfectantOverFeed.value < 15 || disinfectantOverFeed.value > 1260 || !(/^\d+$/.test(disinfectantOverFeed.value))) {
      disinfectantOverFeed.markAsTouched();
      ispHInvalid = true;
    }
    else ispHInvalid = false;

    if (isDisinfectantInvalid || ispHInvalid) {
      this.copyBtnDisable[index] = true;
      this.isInvalidOverfeed = true;
    }
    else {
      this.copyBtnDisable[index] = false;
      this.isInvalidOverfeed = false;
    }
    this.IsOverfeedvalid();
    this.validateOverFeedValues();
  }

  onDisinfectantOverfeedChange(index) {
    let isDisinfectantInvalid: boolean = false;
    const disinfectantOverFeed = (<FormArray>this.waterSettingsForm.controls['getWaterControlsArray']).at(index).get('DisinfectantInOverFeed') as FormControl;
    if (disinfectantOverFeed.value == '' || disinfectantOverFeed.value < 15 || disinfectantOverFeed.value > 1260 || !(/^\d+$/.test(disinfectantOverFeed.value))) {
      disinfectantOverFeed.markAsTouched();
      isDisinfectantInvalid = true;
    }
    else isDisinfectantInvalid = false;

    let ispHInvalid: boolean = false;
    const pHOverFeed = (<FormArray>this.waterSettingsForm.controls['getWaterControlsArray']).at(index).get('pHInOverFeed') as FormControl;
    if (pHOverFeed.value == '' || pHOverFeed.value < 15 || pHOverFeed.value > 1260 || !(/^\d+$/.test(pHOverFeed.value))) {
      pHOverFeed.markAsTouched();
      ispHInvalid = true;
    }
    else ispHInvalid = false;

    if (isDisinfectantInvalid || ispHInvalid) {
      this.copyBtnDisable[index] = true;
      this.isInvalidOverfeed = true;
    }
    else {
      this.copyBtnDisable[index] = false;
      this.isInvalidOverfeed = false;
    }
    this.IsOverfeedvalid();
    this.validateOverFeedValues();
  }

  enableOrResetAuxOneSettings(event: any, index: any) {
    if (event && event.value == 'OFF') {
      this.setFormArrayElement(index, 'Duration1', this.timeDurationInSec[0]);
      this.setFormArrayElement(index, 'Time1', this.time);
      //resetting week days when Aux value set to OFF
      this.resetAdvancedSettingsFieldValues(index, this.weekDaysList, this.auxTypes[0].auxOne);
    }
  }

  enableOrResetAuxTwoSettings(event: any, index: any) {
    if (event && event.value == 'OFF') {
      this.setFormArrayElement(index, 'Duration2', this.timeDurationInSec[0]);
      this.setFormArrayElement(index, 'Time2', this.time);
      //resetting week days when Aux value set to OFF
      this.resetAdvancedSettingsFieldValues(index, this.weekDaysList, this.auxTypes[1].auxTwo);
    }
  }

  //resetting week days when Aux value set to OFF
  resetAdvancedSettingsFieldValues(index: any, weekDaysList: any, auxValue: number) {
    for (let i = 0; i < 7; i++) {
      const fieldValue = (<FormArray>this.waterSettingsForm.controls['getWaterControlsArray']).at(index).get('' + weekDaysList[i] + (auxValue) + '') as FormControl;
      if (fieldValue)
        fieldValue.setValue(false);
    }
  }

  IsOverfeedvalid() {
    for (var i = 0; i <= this.getWaterControlsArray.controls.length-1; i++) {
      let disinfectantOverFeed = this.getWaterControlsArray.controls[i].get('DisinfectantInOverFeed') as FormControl;
      let pHOverfeed = this.getWaterControlsArray.controls[i].get('pHInOverFeed') as FormControl;
      if (disinfectantOverFeed.value == '' || disinfectantOverFeed.value < 15 || disinfectantOverFeed.value > 1260 || !(/^\d+$/.test(disinfectantOverFeed.value)) || pHOverfeed.value == '' || pHOverfeed.value < 15 || pHOverfeed.value > 1260 || !(/^\d+$/.test(pHOverfeed.value))) {
        this.copyBtnDisable[i] = true;
        this.isInvalidOverfeed = true;
        break;
      }
      else {
        this.copyBtnDisable[i] = false;
        this.isInvalidOverfeed = false;
      }
    }
  }

  /* 
   Returns an array of invalid control/group names,It is using to get invalid formula controlls
  */
  findInvalidControlsRecursive(formToInvestigate: FormGroup | FormArray): string[] {
    var invalidControls: string[] = [];
    let recursiveFunc = (form: FormGroup | FormArray) => {
      Object.keys(form.controls).forEach(field => {
        const control = form.get(field);
        if (control?.invalid) {
          invalidControls.push(field);
        }
        if (control instanceof FormGroup) {

          recursiveFunc(control);
        } else if (control instanceof FormArray) {
          recursiveFunc(control);
        }
      });
    }
    recursiveFunc(formToInvestigate);
    return invalidControls;
  }

  //If Invalid Formula controlls found, formatting and display in alert message
  setInvalidErrorData(invalidControls) {
    if (invalidControls) {
      let washers: any[] = [];
      if (invalidControls.indexOf("DisinfectantInOverFeed") !== -1 || invalidControls.indexOf("pHInOverFeed") !== -1) {
        washers.push('Body Of Water contains Invalid Values For pHInOverFeed/DisinfectantInOverFeed');
      }
      return washers;
    }
    return null;
  }

  //Validate Overfeed values are invalid
  validateOverFeedValues() {
    var invalidControls: string[] = this.findInvalidControlsRecursive(this.waterSettingsForm);
    if (invalidControls && invalidControls.length > 0) {
      let invalidErrorData = this.setInvalidErrorData(invalidControls);
      if (invalidErrorData && invalidErrorData.length > 0) {
        //Additional check if any invalid signal not removed, then alert the user instead of directly navigating to review and finalize page(worst case scenario)
        this.flagService.updateNumero("Invalid pHInOverFeed/DisinfectantInOverFeed Value. Please correct it.");
      }
      else {
        this.flagService.updateNumero("NO FLAG");
      }
    } else {
      this.flagService.updateNumero("NO FLAG");
    }
  }

  reviewFinalizePage() {
    this.waterSettingsForm['submitted'] = true;
    this.validateOverFeedValues();
    if (!this.waterSettingsForm.valid) {
      var invalidControls: string[] = this.findInvalidControlsRecursive(this.waterSettingsForm);
      let invaliderrorData = this.setInvalidErrorData(invalidControls);
      if (invaliderrorData && invaliderrorData.length > 0) {
        this.flagService.updateNumero("Invalid Formula present. Please correct it." + invaliderrorData);
        alert("Invalid Formula present. Please correct it." + '\n' + invaliderrorData);
        return;
      }
      //
    }
    this.masterData['formula'] = this.waterSettingsForm.value.conditionGroups;
    this.genericConfigurationService.setLocalStorage(this.masterData);
    this.genericConfigurationService.masterData.next(this.masterData);
    this.router.navigate([this.genericConfigurationService.routePath.concat('/ab300-reviewandfinalise')]);
  }
}
