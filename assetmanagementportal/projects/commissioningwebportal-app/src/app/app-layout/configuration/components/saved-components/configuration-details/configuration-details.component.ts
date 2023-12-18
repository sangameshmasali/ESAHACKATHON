import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  Validators,
  FormControl,
  FormBuilder,
  FormArray
} from '@angular/forms';
import { ControllerApplication } from 'projects/commissioningwebportal-app/src/assets/data/configuration-details';
import { GenericConfigurationService } from '../../../services/generic-configuration.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { WashersData } from 'projects/commissioningwebportal-app/src/assets/data';

@Component({
  selector: 'app-configuration-details',
  templateUrl: './configuration-details.component.html',
  styleUrls: ['./configuration-details.component.scss']
})
export class ConfigurationDetailsComponent implements OnInit {
  controllerApplicationDropdown = ControllerApplication;
  configurationDetailForm!: FormGroup;
  masterData: any = {};
  masterData$: any = null;
  orderForm: FormGroup;
  items: FormArray;
  isEditFlag: boolean;
  selectedController:string;
  washersData:any=WashersData;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private genericConfigurationService: GenericConfigurationService
  ) {
    this.masterData$ = this.genericConfigurationService.masterData.subscribe(data => {
      if (data) {
        this.masterData = data;
        this.isEditFlag = this.masterData.isEditFlag;
        this.initializeForm();
      }
    });
  }


  ngOnInit(): void {
    //Place cursor in the name field by default
    document.getElementById("name")?.focus({ preventScroll: true });
    this.selectedController = this.ControllerApplication?.value ? this.ControllerApplication?.value?.value : this.masterData?.configurationDetails?.ControllerApplication?.value;
    this.initializeForm();
  }


  ngOnDestroy(): void {
    if (this.masterData$) {
      this.masterData$.unsubscribe();
    }

  }
  initializeForm() {
    let data = this.masterData?.configurationDetails;
    this.configurationDetailForm = this.fb.group({
      Name: new FormControl(data?.Name, Validators.required),
      ControllerApplication: new FormControl(data?.ControllerApplication, Validators.required),
    });
    this.configurationDetailForm.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe((data: any) => {
      this.masterData['configurationDetails'] = this.configurationDetailForm.value;
      this.genericConfigurationService.setLocalStorage(this.masterData);
    });
  }

  get Name() {
    return this.configurationDetailForm.get('Name') as FormControl;
  }
  get ControllerApplication() {
    return this.configurationDetailForm.get('ControllerApplication') as FormControl;
  }
  addConfigurePage() {
    this.router.navigate([this.genericConfigurationService.routePath.concat('/saved-configuration')]);
  }

  navigateToReviewPage() {
    this.configurationDetailForm['submitted'] = true;
    if (!this.configurationDetailForm.valid) {
      return;
    }
    this.genericConfigurationService.navigateToReviewPage(this.ControllerApplication?.value?.value);
  }


  controllerProductNavigate() {
    this.configurationDetailForm['submitted'] = true;
    if (!this.configurationDetailForm.valid) {
      return;
    }
    this.masterData['hasProductError'] = false;
    this.masterData['configurationDetails'] = this.configurationDetailForm.value;
    this.genericConfigurationService.setLocalStorage(this.masterData);
    this.genericConfigurationService.masterData.next(this.masterData);
    if (this.selectedController?.toLocaleLowerCase() === this.washersData.find(x => x.id === 4).value)
    {
      this.router.navigate([this.genericConfigurationService.routePath.concat('/alcscontroller-pumpsetting')]);
    }
    else 
    this.router.navigate([this.genericConfigurationService.routePath.concat('/controller-productsetting')]);
  }

  onControllerChange($event) {
    if (this.masterData?.configurationDetails?.ControllerApplication?.value && this.masterData?.configurationDetails?.ControllerApplication?.value != $event?.value) {
      this.getDefaultMasterData();
    }
    this.selectedController = this.ControllerApplication?.value ? this.ControllerApplication?.value?.value : this.masterData?.configurationDetails?.ControllerApplication?.value;
    this.masterData['configurationDetails'] = this.configurationDetailForm.value;
    this.genericConfigurationService.setLocalStorage(this.masterData);
    this.genericConfigurationService.masterData.next(this.masterData)
  }

  getDefaultMasterData() {
    this.masterData['configurationDetails'] = null;
    this.masterData['controllerProductSettings'] = null;
    this.masterData['washersettings'] = null;
    this.masterData['formula'] = null;
    this.masterData['isEditFlag'] = false;
    this.masterData['storePreviousConfigId'] = null;
    this.masterData['isWasherEdited'] = false;
    this.masterData['OneditStoreSelectedData'] = null;
    this.masterData['oNeditStoreSelectedRegion'] = null;
    this.masterData['hideWasherContent'] = [];
    this.masterData['hasProductError'] = false;
    this.masterData['editedWasherindex'] = 0;
    this.masterData['watersettings'] = null;
  }
}
