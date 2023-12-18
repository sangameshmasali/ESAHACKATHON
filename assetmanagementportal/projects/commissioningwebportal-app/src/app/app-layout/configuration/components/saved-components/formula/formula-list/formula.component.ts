import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LclsPockets, PocketNames, SclsRegion, } from 'projects/commissioningwebportal-app/src/assets/data/controller-productsetting';
import { debounceTime, distinctUntilChanged, filter, map, pairwise, startWith } from 'rxjs/operators';
import { GenericConfigurationService } from '../../../../services/generic-configuration.service';
import { AddformulaModelComponent } from '../addformula/addformula-model/addformula-model.component';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CustomValidator } from 'projects/commissioningwebportal-app/src/app/shared';
import { ConfirmModalComponent } from 'projects/commissioningwebportal-app/src/app/shared/confirm-modal/confirm-modal.component';
import { TranslateService } from '@ngx-translate/core';
import { CopyWasherModelComponent } from '../copywasher/copywasher-model.component';
import { FormulaInvalidData } from 'projects/commissioningwebportal-app/src/app/models/formula';
import { MoveFormulaModelComponent } from '../moveFormula/moveformula-model.component';
import { FormulaType, WashersData } from 'projects/commissioningwebportal-app/src/assets/data';
import { flagService } from '../../../../services/flag-service';

@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.scss']
})
export class FormulaComponent implements OnInit {
  formulaForm!: FormGroup;
  signalNumberList: any = [];
  masterData: any = {};
  masterData$: any = null;
  openIndex: number = 0;
  productNames: string[] = [];
  defalutLeninTypeData: any = [];
  disableCopyBtn: boolean = true;
  unitOfMeasure: any = null;
  isScls: any = null;
  popupObjectMessage: any = {};
  productDropdown: any = [];
  signalDropdown: any = []
  disableAddSignalBtn: boolean = false;
  regionSlected: any = null;
  washerList: any[];
  regionSelectionData: any = {};
  pocketNames = PocketNames;
  isEditFlag: boolean;
  hideWasherContent: boolean[] = [];
  onPageload: boolean = false;
  editedWasherindex: number;
  isCollapsed: boolean;
  formulaDict: { [id: string]: FormulaInvalidData } = {};
  availableFormulaList: any[];
  reArragedList: any[];
  data: any;
  updatedFormulaList: any = [];
  formulaType: any = FormulaType;
  filteredFOrmulaList: any = [];
  productLists: any = [];
  selectedController: string;
  hasProductError: boolean = false;
  washersData: any = WashersData;
  sclsRegions: any = SclsRegion;
  selectedProductInvalid: any;


  constructor(private router: Router,
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private genericConfigurationService: GenericConfigurationService,
    private translate: TranslateService,
    private modalService: NgbModal,
    private flagService: flagService) {
    this.genericConfigurationService.getLocalStorage();
    this.masterData$ = this.genericConfigurationService.masterData.subscribe(data => {
      if (data) {
        this.masterData = data;
        this.isEditFlag = this.masterData.isEditFlag;
        // get the value from local storage SCLS,Unit of measures and Region
        this.unitOfMeasure = this.masterData.controllerProductSettings.UnitOfMeasure.value;
        this.isScls = this.masterData?.configurationDetails?.ControllerApplication?.value?.toLocaleLowerCase() === this.washersData.find(x => x.id === 1).value ? true : false;
        this.regionSlected = this.masterData?.controllerProductSettings?.Region;
        this.selectedController = this.masterData?.configurationDetails?.ControllerApplication?.value;
        this.defalutLeninTypeData = this.genericConfigurationService.defaultFourmulaData(this.selectedController).DefaultFormulasLeninType.DefaultFormulas;
        this.initializeForm();
      }
    });
  }

  ngOnInit(): void {
    this.translate.setDefaultLang('en-US');
    this.getTranslation();
  }

  initializeForm() {
    this.defaultSignal();
    this.formulaForm = this.fb.group({
      conditionGroups: this.fb.array([
        // this.washerForm(0)
      ])
    });
    this.formulaForm.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe((data: any) => {
      this.masterData['formula'] = this.formulaForm.value.conditionGroups;
      this.genericConfigurationService.setLocalStorage(this.masterData);
    });


    this.copyWasherList(this.masterData);
    this.createProductObj();
    //this.formulaForm.markAllAsTouched();
    this.copyButtonShow();
    this.formulaForm.updateValueAndValidity();
    this.onPageload = true;
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
      this.hasProductError = this.genericConfigurationService.isProductDataValid(this.selectedController, this.regionSlected, this.masterData);
    }
    this.validateSignalProductAmount();
  }

  // product maping funcationality
  createProductObj() {
    //If Controller type is SCLS
    if (this.selectedController?.toLocaleLowerCase() === this.washersData.find(x => x.id === 1).value) {
      this.productNames = [];
      this.getDropDownDataFromLocalStorageObj(this.masterData);
      let data = this.formulaForm.value;
      let globalArray: any = [];
      data.conditionGroups.forEach((eachParent, i) => {
        let formulaArray: any = [];
        eachParent.formulaControlsArray.forEach((eachFormula, i) => {
          let signalArray: any = [];
          let selectedProductObj: any = {};
          eachFormula.SignalList.forEach(eachSignal => {
            let pName = eachSignal.ProductName;
            let sNumber = eachSignal.SignalNumber;
            if (selectedProductObj.hasOwnProperty(sNumber)) {
              if (pName) {
                selectedProductObj[sNumber].push(pName)
              }
            } else {
              selectedProductObj[sNumber] = [pName]
            }
          })
          signalArray = this.getDataBasedOnController(eachFormula, selectedProductObj);
          //// signal dropdown logic
          formulaArray = this.fetchSignalNumberDropDownData(eachFormula, signalArray, formulaArray);
        })
        globalArray.push(formulaArray)
      })

      this.productDropdown = globalArray;
    }

    //If Controller type is LCLS
    //this logic is used to add each signal dropdowndata and locked products display 
    if (this.selectedController?.toLocaleLowerCase() === this.washersData.find(x => x.id === 2).value) {
      this.productNames = [];
      this.getDropDownDataFromLocalStorageObj(this.masterData);
      let data = this.formulaForm.value;
      let globalArray: any = [];
      data.conditionGroups.forEach((eachParent, i) => {
        let formulaArray: any = [];
        eachParent.formulaControlsArray.forEach((eachFormula, i) => {
          let signalArray: any = [];
          let selectedProductObj: any = {};
          eachFormula.SignalList.forEach(eachSignal => {
            let pName = eachSignal.ProductName;
            let sNumber = eachSignal.SignalNumber;
            if (selectedProductObj.hasOwnProperty(sNumber)) {
              if (pName) {
                selectedProductObj[sNumber].push(pName)
              }
            } else {
              selectedProductObj[sNumber] = [pName]
            }
          })
          signalArray = this.getDataBasedOnController(eachFormula, selectedProductObj);
          //// signal dropdown logic
          formulaArray = this.fetchSignalNumberDropDownData(eachFormula, signalArray, formulaArray);
        })
        globalArray.push(formulaArray)
      })

      this.productDropdown = globalArray;
    }
  }

  //common method created to have signal number on each signal data
  fetchSignalNumberDropDownData(eachFormula: any, signalArray: any, formulaArray?: any) {
    let signalObj = {};
    this.signalNumberList.forEach(eachSignal => {
      signalObj[eachSignal] = 0;
    })
    eachFormula.SignalList.forEach((eachSignal, index) => {
      let signalNumberList: any = JSON.parse(JSON.stringify(this.signalNumberList));
      let filteredSignalNumberList: any = [];
      signalNumberList.forEach(eachSN => {
        if (signalObj[eachSN] < this.genericConfigurationService.signalMaxLimit) {
          filteredSignalNumberList.push(eachSN)
        }
      })
      signalObj[eachSignal.SignalNumber] = signalObj[eachSignal.SignalNumber] + 1;
      signalArray[index]['signal'] = filteredSignalNumberList;
    })
    formulaArray.push(signalArray)
    return formulaArray;
  }

  //get the signal Array based on selected controller
  getDataBasedOnController(eachFormula: any, selectedProductObj: any) {
    let signalArray: any = [];
    //If Controller type is SCLS
    if (this.selectedController?.toLocaleLowerCase() === this.washersData.find(x => x.id === 1).value) {
      let originalProductList = JSON.parse(JSON.stringify(this.productNames));
      let productList = originalProductList;
      this.productLists = this.fnGetProductListsWithIsLockedData(JSON.parse(JSON.stringify(this.productNames)));

      eachFormula.SignalList.forEach(eachSignal => {
        let pName = eachSignal.ProductName;
        let sNumber = eachSignal.SignalNumber;

        //let productList = JSON.parse(JSON.stringify(this.productNames));
        selectedProductObj[sNumber]?.forEach(eachSelectedProduct => {
          let index = productList.indexOf(eachSelectedProduct);
          if (!(index == -1)) {
            productList.splice(index, 1)
          }
          //This section is used to find signal product is locked product(IsLocked falg is true)
          if (this.genericConfigurationService.getIsLockedProduct(eachSignal, eachSelectedProduct, this.selectedController)) {
            this.productLists = [];
            //gets product lists with islocked flag
            this.productLists = this.fnGetProductListsWithIsLockedData(JSON.parse(JSON.stringify(this.productNames)));
            //fetches the common products from productList object
            let res = this.productLists.filter(function (v) {
              return productList.indexOf(v.ProductName) > -1;
            })
            //Here we are fetching non locked products and if it contains any locked product, those will be removed into productList object
            let filteredData = res.filter(item => productList.includes(item.ProductName) && item.IsLocked != true);

            if (filteredData.length == 0) {
              productList = [];
            }

            res.forEach(element => {
              if (element.IsLocked) {
                let index = productList.indexOf(element.ProductName)
                if (!(index == -1)) {
                  productList.splice(index, 1)
                }
              }
            });
          }
        })

        if (productList.indexOf(pName) == -1) {
          if (pName) {
            let isLocked = this.genericConfigurationService.getIsLockedProduct(eachSignal, pName, this.selectedController);
            if (!isLocked)
              productList.push(pName);
            //Else part is to show all locked products in locked product selected dropdown 
            else {
              this.productLists.forEach(element => {
                if (element.IsLocked) {
                  productList.push(element.ProductName);
                }
              });
            }
          }
        }
        signalArray.push({ product: productList });
        productList = JSON.parse(JSON.stringify(this.productNames));
        this.productLists = [];
      })
    }
    //If Controller type is LCLS
    if (this.selectedController?.toLocaleLowerCase() === this.washersData.find(x => x.id === 2).value) {
      let originalProductList = JSON.parse(JSON.stringify(this.productNames));
      let productList = originalProductList;
      this.productLists = this.fnGetProductListsWithIsLockedDataLCLS(JSON.parse(JSON.stringify(this.productNames)));

      eachFormula.SignalList.forEach(eachSignal => {
        let pName = eachSignal.ProductName;
        let sNumber = eachSignal.SignalNumber;

        //let productList = JSON.parse(JSON.stringify(this.productNames));
        selectedProductObj[sNumber]?.forEach(eachSelectedProduct => {
          let index = productList.indexOf(eachSelectedProduct);
          if (!(index == -1)) {
            productList.splice(index, 1)
          }
          //This section is used to find signal product is locked product(IsLocked falg is true)
          if (this.genericConfigurationService.fetchIslockedValueFOrLCLSProduct(eachSelectedProduct, this.regionSlected)) {
            this.productLists = [];
            //gets product lists with islocked flag
            this.productLists = this.fnGetProductListsWithIsLockedDataLCLS(JSON.parse(JSON.stringify(this.productNames)));
            //fetches the common products from productList object
            let res = this.productLists.filter(function (v) {
              return productList.indexOf(v.ProductName) > -1;
            })
            //Here we are fetching non locked products and if it contains any locked product, those will be removed into productList object
            let filteredData = res.filter(item => productList.includes(item.ProductName) && item.IsLocked != true);

            if (filteredData.length == 0) {
              productList = [];
            }

            res.forEach(element => {
              if (element.IsLocked) {
                let index = productList.indexOf(element.ProductName)
                if (!(index == -1)) {
                  productList.splice(index, 1)
                }
              }
            });
          }
        })

        if (productList.indexOf(pName) == -1) {
          if (pName) {
            let isLocked = this.genericConfigurationService.fetchIslockedValueFOrLCLSProduct(pName, this.regionSlected);
            if (!isLocked)
              productList.push(pName);
            //Else part is to show all locked products in locked product selected dropdown 
            else {
              this.productLists.forEach(element => {
                if (element.IsLocked) {
                  productList.push(element.ProductName);
                }
              });
            }
          }
        }
        signalArray.push({ product: productList });
        productList = JSON.parse(JSON.stringify(this.productNames));
        this.productLists = [];
      })
    }
    return signalArray;
  }

  // product functinality on change of dropdown signal, number product name,delete signal row
  onChangeSignalNumber(washerIndex, formulaIndex, signalIndex, action) {
    if (this.selectedController.toLocaleLowerCase() === this.washersData.find(x => x.id === 1).value) {
      if (action == 'signalNumber') {
        let SignalListControl = (((<FormArray>this.formulaForm.controls['conditionGroups'])?.at(washerIndex)?.get('formulaControlsArray') as FormArray)?.at(formulaIndex).get('SignalList') as FormArray)?.at(signalIndex)?.get('ProductName');
        SignalListControl?.patchValue('');
      }

      let form = this.formulaForm.value;
      let signalList = form?.conditionGroups[washerIndex]?.formulaControlsArray[formulaIndex]?.SignalList;

      let signalArray: any = [];
      let selectedProductObj: any = {};
      signalList?.forEach(eachSignal => {
        let pName = eachSignal.ProductName;
        let sNumber = eachSignal.SignalNumber;
        if (selectedProductObj.hasOwnProperty(sNumber)) {
          if (pName) {
            selectedProductObj[sNumber].push(pName);
          }
        } else {
          selectedProductObj[sNumber] = [pName];
        }
      })

      let originalProductList = JSON.parse(JSON.stringify(this.productNames));
      let productList = originalProductList;
      this.productLists = this.fnGetProductListsWithIsLockedData(JSON.parse(JSON.stringify(this.productNames)));

      signalList?.forEach(eachSignal => {
        let pName = eachSignal.ProductName;
        let sNumber = eachSignal.SignalNumber;

        selectedProductObj[sNumber]?.forEach(eachSelectedProduct => {
          let index = productList.indexOf(eachSelectedProduct);
          if (!(index == -1)) {
            productList.splice(index, 1)
          }
          //This section is used to find signal product is locked product(IsLocked falg is true)
          if (this.genericConfigurationService.getIsLockedProduct(eachSignal, eachSelectedProduct, this.selectedController)) {
            this.productLists = [];
            //gets product lists with islocked flag
            this.productLists = this.fnGetProductListsWithIsLockedData(JSON.parse(JSON.stringify(this.productNames)));
            //fetches the common products from productList object
            let res = this.productLists.filter(function (v) {
              return productList.indexOf(v.ProductName) > -1;
            })

            //Here we are fetching non locked products and if it contains any locked product, those will be removed into productList object
            let filteredData = res.filter(item => productList.includes(item.ProductName) && item.IsLocked != true);

            if (filteredData.length == 0) {
              productList = [];
            }

            res.forEach(element => {
              if (element.IsLocked) {
                let index = productList.indexOf(element.ProductName)
                if (!(index == -1)) {
                  productList.splice(index, 1)
                }
              }
            });
          }
        })

        if (this.selectedController.toLocaleLowerCase() === this.washersData.find(x => x.id === 1).value && productList.indexOf(pName) == -1) {
          if (pName) {
            let isLocked = this.genericConfigurationService.getIsLockedProduct(eachSignal, pName, this.selectedController);
            if (!isLocked)
              productList.push(pName);
            //Else part is to show all locked products in locked product selected dropdown 
            else {
              this.productLists.forEach(element => {
                if (element.IsLocked) {
                  productList.push(element.ProductName);
                }
              });
            }
          }
        }
        signalArray.push({ product: productList });
        productList = JSON.parse(JSON.stringify(this.productNames));
        this.productLists = [];
      })
      //// signal dropdown logic
      let signalObj = {}
      this.signalNumberList.forEach(eachSignal => {
        signalObj[eachSignal] = 0;
      })
      signalList?.forEach((eachSignal, index) => {
        let signalNumberList: any = JSON.parse(JSON.stringify(this.signalNumberList));
        let filteredSignalNumberList: any = [];
        signalNumberList.forEach(eachSN => {
          if (signalObj[eachSN] < this.genericConfigurationService.signalMaxLimit) {
            filteredSignalNumberList.push(eachSN)
          }
        })
        signalObj[eachSignal.SignalNumber] = signalObj[eachSignal.SignalNumber] + 1;
        signalArray[index]['signal'] = filteredSignalNumberList;
      })
      this.productDropdown[washerIndex][formulaIndex] = signalArray;
    }
    if (this.selectedController.toLocaleLowerCase() === this.washersData.find(x => x.id === 2).value) {
      if (action == 'signalNumber') {
        let SignalListControl = (((<FormArray>this.formulaForm.controls['conditionGroups'])?.at(washerIndex)?.get('formulaControlsArray') as FormArray)?.at(formulaIndex).get('SignalList') as FormArray)?.at(signalIndex)?.get('ProductName');
        SignalListControl?.patchValue('');
      }

      //This logic is to update ProductNumber(Number) when product got changed - Specifically for LCLS
      if(action == 'productName')
      {
        let SignalListControl = (((<FormArray>this.formulaForm.controls['conditionGroups'])?.at(washerIndex)?.get('formulaControlsArray') as FormArray)?.at(formulaIndex).get('SignalList') as FormArray)?.at(signalIndex)?.get('ProductName');
        let ProductNumber : Number;
        if (SignalListControl?.value.includes("-P")) {
          ProductNumber = parseInt(SignalListControl?.value.split('-P')[1]);
          (((<FormArray>this.formulaForm.controls['conditionGroups'])?.at(washerIndex)?.get('formulaControlsArray') as FormArray)?.at(formulaIndex).get('SignalList') as FormArray)?.at(signalIndex)?.get('Number')?.patchValue(ProductNumber);
        }
      }
      
      let form = this.formulaForm.value;
      let signalList = form?.conditionGroups[washerIndex]?.formulaControlsArray[formulaIndex]?.SignalList;

      let signalArray: any = [];
      let selectedProductObj: any = {};
      signalList?.forEach(eachSignal => {
        let pName = eachSignal.ProductName;
        let sNumber = eachSignal.SignalNumber;
        if (selectedProductObj.hasOwnProperty(sNumber)) {
          if (pName) {
            selectedProductObj[sNumber].push(pName);
          }
        } else {
          selectedProductObj[sNumber] = [pName];
        }
      })

      let originalProductList = JSON.parse(JSON.stringify(this.productNames));
      let productList = originalProductList;
      this.productLists = this.fnGetProductListsWithIsLockedDataLCLS(JSON.parse(JSON.stringify(this.productNames)));

      signalList.forEach(eachSignal => {
        let pName = eachSignal.ProductName;
        let sNumber = eachSignal.SignalNumber;

        //let productList = JSON.parse(JSON.stringify(this.productNames));
        selectedProductObj[sNumber]?.forEach(eachSelectedProduct => {
          let index = productList.indexOf(eachSelectedProduct);
          if (!(index == -1)) {
            productList.splice(index, 1)
          }
          //This section is used to find signal product is locked product(IsLocked falg is true)
          if (this.genericConfigurationService.fetchIslockedValueFOrLCLSProduct(eachSelectedProduct, this.regionSlected)) {
            this.productLists = [];
            //gets product lists with islocked flag
            this.productLists = this.fnGetProductListsWithIsLockedDataLCLS(JSON.parse(JSON.stringify(this.productNames)));
            //fetches the common products from productList object
            let res = this.productLists.filter(function (v) {
              return productList.indexOf(v.ProductName) > -1;
            })
            //Here we are fetching non locked products and if it contains any locked product, those will be removed into productList object
            let filteredData = res.filter(item => productList.includes(item.ProductName) && item.IsLocked != true);

            if (filteredData.length == 0) {
              productList = [];
            }

            res.forEach(element => {
              if (element.IsLocked) {
                let index = productList.indexOf(element.ProductName)
                if (!(index == -1)) {
                  productList.splice(index, 1)
                }
              }
            });
          }
        })

        if (productList.indexOf(pName) == -1) {
          if (pName) {
            let isLocked = this.genericConfigurationService.fetchIslockedValueFOrLCLSProduct(pName, this.regionSlected);
            if (!isLocked)
              productList.push(pName);
            //Else part is to show all locked products in locked product selected dropdown 
            else {
              this.productLists.forEach(element => {
                if (element.IsLocked) {
                  productList.push(element.ProductName);
                }
              });
            }
          }
        }
        signalArray.push({ product: productList });
        productList = JSON.parse(JSON.stringify(this.productNames));
        this.productLists = [];
      })
      //// signal dropdown logic
      let signalObj = {}
      this.signalNumberList.forEach(eachSignal => {
        signalObj[eachSignal] = 0;
      })
      signalList?.forEach((eachSignal, index) => {
        let signalNumberList: any = JSON.parse(JSON.stringify(this.signalNumberList));
        let filteredSignalNumberList: any = [];
        signalNumberList.forEach(eachSN => {
          if (signalObj[eachSN] < this.genericConfigurationService.signalMaxLimit) {
            filteredSignalNumberList.push(eachSN)
          }
        })
        signalObj[eachSignal.SignalNumber] = signalObj[eachSignal.SignalNumber] + 1;
        signalArray[index]['signal'] = filteredSignalNumberList;
      })
      this.productDropdown[washerIndex][formulaIndex] = signalArray;
    }
  }

  fnGetProductListsWithIsLockedData(productList: any) {
    if (this.selectedController.toLocaleLowerCase() === this.washersData.find(x => x.id === 1).value) {
      productList.forEach(element => {
        if (element?.value?.toLocaleLowerCase() != 'none') {
          let data = {
            ProductName: element,
            IsLocked: element ? this.genericConfigurationService.getIsLockedProduct("eachSignal", element, this.selectedController) : null
          }
          this.productLists.push(data);
        }
      });
    }
    return this.productLists;
  }

  copyWasherList(data) {
    let lenghtWasherItem = this.masterData?.washersettings?.length;
    for (let i = 0; i < lenghtWasherItem; i++) {
      this.conditionGroups.push(this.washerForm(i));
    }
  }

  washerForm(washerFormIndex) {
    return this.fb.group({
      formulaControlsArray: this.fb.array(this.createFormulaItem(washerFormIndex))
    });
  }

  defaultSignal() {
    this.signalNumberList = this.genericConfigurationService.defaultSignalNumber();
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

  createFormulaItem(washerFormIndex) {
    let formData: any = [];
    let data = this.genericConfigurationService.defaultFourmulaData(this.selectedController);
    let formulaStoredata = this.masterData?.formula;
    let regionName = this.genericConfigurationService.getRegionName();// ;
    let hasFormulaData = this.masterData?.formula ? formulaStoredata[washerFormIndex] : undefined;
    if (formulaStoredata && hasFormulaData) {
      for (let [i, newitem] of formulaStoredata[washerFormIndex].formulaControlsArray.entries()) {
        let formObj = this.fb.group({
          ForumlaName: new FormControl(newitem?.ForumlaName, Validators.required),
          FormulaNumber: newitem?.FormulaNumber,
          SignalList: this.fb.array(this.createSignalItem(washerFormIndex, i, hasFormulaData))
        })
        formData.push(formObj);
      }
    }
    else {
      if (data) {
        for (let [i, eachData] of data[regionName].WasherDetailsList[0].Data.entries()) {
          let formObj = this.fb.group({
            ForumlaName: new FormControl(eachData?.FormulaName, Validators.required),
            FormulaNumber: i + 1,
            SignalList: this.fb.array(this.createSignalItem(washerFormIndex, i, hasFormulaData))
          })
          formData.push(formObj);
        }
      }
    }
    return formData;
  }

  createSignalItem(washerFormIndex, i, hasFormulaData) {
    let formulaStoredata = this.masterData?.formula;
    let formData: any = [];
    let data = this.genericConfigurationService.defaultFourmulaData(this.selectedController);
    let regionName = this.genericConfigurationService.getRegionName(); //this.masterData.controllerProductSettings.Region;
    if (formulaStoredata && hasFormulaData) {
      for (let product of formulaStoredata[washerFormIndex].formulaControlsArray[i].SignalList) {
        //Fetch newly selected product value when default product altered
        let selectedProductName = this.genericConfigurationService.getProductNameForSignal(product?.ProductName, product?.Number, this.masterData);
        //
        if (selectedProductName && !selectedProductName?.toLocaleLowerCase()?.includes("none")) {
          let formObj = this.fb.group({
            SignalNumber: new FormControl(product?.SignalNumber, Validators.required),
            ProductName: new FormControl(selectedProductName, Validators.required),
            ActualAmount: product?.ActualAmount,
            ProductAmount: new FormControl(this.genericConfigurationService.roundOfToTwoDeciamlPoint(product?.ActualAmount), [CustomValidator.productAmountValidators(this.unitOfMeasure, this.isScls), Validators.required]),
            DispensedAmount: new FormControl(this.toCalculateDispensedAmount(product?.ActualAmount, washerFormIndex)),
            IsSolidProduct: new FormControl(product?.IsSolidProduct),
            Number: new FormControl(this.genericConfigurationService.getProductNumberForSignals(product.number, product.ProductName, this.selectedController)),
            IsLocked: new FormControl(this.genericConfigurationService.getIsLockedProduct("", selectedProductName, this.selectedController)),
            HasError: new FormControl(product?.HasError),
            ProductDelay: new FormControl(product?.ProductDelay, [CustomValidator.productDelayValidators(), Validators.required])
          });
          this.getDropDownDataFromLocalStorageObj(this.masterData);
          formData.push(formObj);
        }
      }
    }
    else {
      if (data) {
        let modification: any = [];
        for (let product of data[regionName].FormulaSummaryInfo[i].FormulaSummaryList) {
          let getCurrentProductValue = product.ActualProductAmount;
          let UnitPerGram = this.genericConfigurationService.UnitPerGram;
          if (this.unitOfMeasure == 'Standard') {
            let finalProductValue = (getCurrentProductValue * UnitPerGram).toFixed(5);
            if (!product.IsSolidProduct) {
              finalProductValue = (getCurrentProductValue * UnitPerGram * this.genericConfigurationService.UnitPerOunce).toFixed(5);
            }
            modification.push({ index: product.Id, keyName: "ActualProductAmount", data: finalProductValue });
          }
          else {
            let finalProductValue = (getCurrentProductValue).toFixed(5);
            modification.push({ index: product.Id, keyName: "ActualProductAmount", data: finalProductValue });
          }
        };
        for (let product of data[regionName].FormulaSummaryInfo[i].FormulaSummaryList) {
          var ele = modification.find(a => a.index == product.Id);
          if (ele) {
            if (data[regionName].FormulaSummaryInfo[i].FormulaSummaryList.find(a => a.Id == ele.index)) {
              data[regionName].FormulaSummaryInfo[i].FormulaSummaryList.find(a => a.Id == ele.index)[ele.keyName] = ele.data;

            }
          }
          //Fetch newly selected product value when default product altered
          let selectedProductName = this.genericConfigurationService.getProductNameForSignal(product?.ProductName, product?.Number, this.masterData);
          //
          if (selectedProductName != null && !selectedProductName?.toLocaleLowerCase()?.includes("none")) {
            let formObj = this.fb.group({
              SignalNumber: new FormControl(product?.Signal, Validators.required),
              ProductName: new FormControl(selectedProductName, Validators.required),
              ActualAmount: product?.ActualProductAmount,
              ProductAmount: new FormControl(this.genericConfigurationService.roundOfToTwoDeciamlPoint((product?.ActualProductAmount)), [CustomValidator.productAmountValidators(this.unitOfMeasure, this.isScls), Validators.required]),
              DispensedAmount: new FormControl(this.toCalculateDispensedAmount(product?.ActualProductAmount, washerFormIndex)),
              IsSolidProduct: new FormControl(product?.IsSolidProduct),
              Number: new FormControl(product?.Number),
              IsLocked: new FormControl(this.genericConfigurationService.getIsLockedProduct("", selectedProductName, this.selectedController)),
              HasError: new FormControl(product?.HasError),
              ProductDelay: new FormControl(product?.ProductDelay, [CustomValidator.productDelayValidators(), Validators.required])
            });
            if (product && !this.productNames.some(o => o == product.ProductName)) {
              this.productNames.push(product.ProductName);
            }
            formData.push(formObj);
          }
        }
      }
    }
    return formData;
  }

  getDropDownDataFromLocalStorageObj(data: any) {
    var sett = data.controllerProductSettings;
    if (data.controllerProductSettings && this.selectedController.toLocaleLowerCase() != this.washersData.find(x => x.id === 2).value) {
      if (sett.ProductOne.value != 'None' && !this.productNames.some(o => o == sett.ProductOne.value)) {
        this.productNames.push(sett.ProductOne.value);
      }
      if (sett.ProductTwo.value != 'None' && !this.productNames.some(o => o == sett.ProductTwo.value)) {
        this.productNames.push(sett.ProductTwo.value);
      }
      if (sett.ProductThree.value != 'None' && !this.productNames.some(o => o == sett.ProductThree.value)) {
        this.productNames.push(sett.ProductThree.value);
      }
      if (sett.ProductFour.value != 'None' && !this.productNames.some(o => o == sett.ProductFour.value)) {
        this.productNames.push(sett.ProductFour.value);
      }
      if (sett.ProductFive.value != 'None' && !this.productNames.some(o => o == sett.ProductFive.value)) {
        this.productNames.push(sett.ProductFive.value);
      }
    }
    if (data.controllerProductSettings && this.selectedController.toLocaleLowerCase() === this.washersData.find(x => x.id === 2).value) {
      if (sett.ProductOne && sett.ProductOne.value != 'NONE' && !this.productNames.some(o => o == sett.ProductOne.value)) {
        this.productNames.push(sett.ProductOne.value + '-P1');
      }
      if (sett.ProductTwo && sett.ProductTwo.value != 'NONE') {
        this.productNames.push(sett.ProductTwo.value + '-P2');
      }
      if (sett.ProductThree && sett.ProductThree.value != 'NONE') {
        this.productNames.push(sett.ProductThree.value + '-P3');
      }
      if (sett.ProductFour && sett.ProductFour.value != 'NONE') {
        this.productNames.push(sett.ProductFour.value + '-P4');
      }
      if (sett.ProductFive && sett.ProductFive.value != 'NONE') {
        this.productNames.push(sett.ProductFive.value + '-P5');
      }
      if (sett.ProductSix && sett.ProductSix.value != 'NONE') {
        this.productNames.push(sett.ProductSix.value + '-P6');
      }
      if (sett.ProductSeven && sett.ProductSeven.value != 'NONE') {
        this.productNames.push(sett.ProductSeven.value + '-P7');
      }
      if (sett.ProductEight && sett.ProductEight.value != 'NONE') {
        this.productNames.push(sett.ProductEight.value + '-P8');
      }
    }
  }

  // Creating the signal each formula
  createSignal($event) {
    this.formulaForm['submitted'] = false;
    if (!$event.valid) {
      this.disableAddSignalBtn = true;
    } else {
      $event.push(this.addSignalInFormula());
    }
  }

  // Disabling the add signal button in each formula
  disableBtnAddSignal(formulaList: any, position: any, childFormula) {
    let disabled = formulaList.SignalList['controls'].length >= 24 || formulaList.SignalList.valid != true;

    // Adding the indexes to dictionary which are invalid so that we can delete it when clicking on next
    for (let i = 0; i < formulaList.SignalList.controls.length; i++) {
      const key: string = position.toString() + childFormula.toString() + i.toString();
      const f: FormulaInvalidData = {
        washerIndex: position,
        formulaIndex: childFormula,
        signalIndex: i
      }
      if (disabled) {
        if (!formulaList.SignalList.controls[i].valid) {
          if (!this.formulaDict.hasOwnProperty(key)) {
            this.formulaDict[key] = f;
          }
        }
      }
      else {
        if (this.formulaDict.hasOwnProperty(key)) {
          delete this.formulaDict[key];
        }
      }
    }
    return disabled;
  }

  addSignalInFormula() {
    this.disableAddSignalBtn = true;
    return this.fb.group({
      SignalNumber: new FormControl(null, Validators.required),
      ProductName: new FormControl(null, Validators.required),
      ActualAmount: null,
      ProductAmount: new FormControl(null, [CustomValidator.productAmountValidators(this.unitOfMeasure, this.isScls), Validators.required]),
      DispensedAmount: new FormControl(null),
      IsSolidProduct: new FormControl(null),
      Number: new FormControl(null),
      IsLocked: new FormControl(null),
      HasError: new FormControl(null),
      ProductDelay: new FormControl(5, [CustomValidator.productDelayValidators(), Validators.required])
    });
  }

  // Drag and Drop Formula Functionlaity
  drop(event: CdkDragDrop<string[]>, globalIndex) {
    let formulaArrayList: any = ((<FormArray>this.formulaForm.controls['conditionGroups']).at(globalIndex).get('formulaControlsArray') as FormArray);
    moveItemInArray(formulaArrayList.value, event.previousIndex, event.currentIndex);
  }

  // each formula delete logic
  removeFormula(index, i) {
    const control = ((<FormArray>this.formulaForm.controls['conditionGroups']).at(index).get('formulaControlsArray') as FormArray).at(i).get('ForumlaName') as FormControl;
    control.patchValue('(Unused)');
    const SignalListControl = ((<FormArray>this.formulaForm.controls['conditionGroups']).at(index).get('formulaControlsArray') as FormArray).at(i).get('SignalList') as FormArray;
    SignalListControl.clear();
  }
  removeSignal(index, i, removesignallist) {
    const control = ((<FormArray>this.formulaForm.controls['conditionGroups']).at(index).get('formulaControlsArray') as FormArray).at(i).get('SignalList') as FormArray;
    control.removeAt(removesignallist);
  }

  getFormArrayElement(index): FormArray {
    return ((this.formulaForm.get('formulaControlsArray') as FormArray).at(parseInt(index)).get('SignalList') as FormArray);
  }
  get formulaControlsArray() {
    return this.formulaForm.controls['formulaControlsArray'] as FormArray;
  }
  get conditionGroups() {
    return this.formulaForm.controls['conditionGroups'] as FormArray;
  }

  get SignalNumber() {
    return this.SignalNumber['SignalNumber'] as FormControl;
  }
  get ProductName() {
    return this.ProductName['ProductName'] as FormControl;
  }
  get ProductAmount() {
    return this.ProductAmount['ProductAmount'] as FormControl;
  }

  addFormula(i, controlValue) {
    const modalRef = this.modalService.open(AddformulaModelComponent, { size: '564' });
    modalRef.componentInstance.index = i;
    modalRef.componentInstance.controlValue = controlValue;
    modalRef.componentInstance.selectedController = this.selectedController;
    const promise = modalRef.result.then(
      res => {
        if (res) {
          this.modifyFormulaData(res);
        }
      },
      dismiss => { }
    );
  }

  modifyFormulaData(value) {
    let formValue = this.formulaForm.value;
    let formIndex = null;
    formValue.conditionGroups[value.index].formulaControlsArray.forEach((eachFormula, i) => {
      if (eachFormula.FormulaNumber == value.modifyFormulaValue.FormulaNumber) {
        formIndex = i;
      }
    })
    // replace the form value
    if (value.modifyFormulaValue.FormulaType.id == 2) {
      this.setCustomFormulaValue(value.index, formIndex, value, formIndex)
    } else {
      let data = this.defalutLeninTypeData.filter(eachData => {
        if (eachData.FormulaName == value.modifyFormulaValue.FormulaName) {
          return eachData;
        }
      })[0]

      data.Signals.forEach(element => {
        switch (element.PocketNumber) {
          case 1:
            element['ProductName'] = this.masterData.controllerProductSettings.ProductOne.value;
            break;
          case 2:
            element['ProductName'] = this.masterData.controllerProductSettings.ProductTwo.value;
            break;
          case 3:
            element['ProductName'] = this.masterData.controllerProductSettings.ProductThree.value;
            break;
          case 4:
            element['ProductName'] = this.masterData.controllerProductSettings.ProductFour.value;
            break;
          case 5:
            element['ProductName'] = this.masterData.controllerProductSettings.ProductFive.value;
            break;
        }
      });
      this.setFormArrayElement(value.index, formIndex, data, formIndex, value.modifyFormulaValue.FormulaNumber);
    }
    this.onChangeSignalNumber(value.index, formIndex, null, 'create')
  }

  setCustomFormulaValue(globalIndex, formulaIndex, value, formIndex) {
    if (!(formIndex == null)) {
      const FormulaNameControl = ((<FormArray>this.formulaForm.controls['conditionGroups']).at(globalIndex).get('formulaControlsArray') as FormArray).at(formulaIndex).get('ForumlaName') as FormControl;
      FormulaNameControl.patchValue(value.modifyFormulaValue.FormulaName);
      const FormulaNumberControl = ((<FormArray>this.formulaForm.controls['conditionGroups']).at(globalIndex).get('formulaControlsArray') as FormArray).at(formulaIndex).get('FormulaNumber') as FormControl;
      FormulaNumberControl.patchValue(value.modifyFormulaValue.FormulaNumber);
      const SignalListControl = ((<FormArray>this.formulaForm.controls['conditionGroups']).at(globalIndex).get('formulaControlsArray') as FormArray).at(formulaIndex).get('SignalList') as FormArray;
      SignalListControl.clear();
    } else {
      /// create new form at that index
      let formObj = this.fb.group({
        ForumlaName: new FormControl(value.modifyFormulaValue.FormulaName, Validators.required),
        FormulaNumber: value.modifyFormulaValue.FormulaNumber,
        SignalList: this.fb.array([])
      })
      const FormulaControl = ((<FormArray>this.formulaForm.controls['conditionGroups']).at(globalIndex).get('formulaControlsArray') as FormArray)
      FormulaControl.insert(value.modifyFormulaValue.FormulaNumber - 1, formObj)
    }
  }

  setFormArrayElement(globalIndex, formulaIndex, value, formIndex, formulaNumber) {
    if (!(formIndex == null)) {
      const FormulaNameControl = ((<FormArray>this.formulaForm.controls['conditionGroups']).at(globalIndex).get('formulaControlsArray') as FormArray).at(formulaIndex).get('ForumlaName') as FormControl;
      FormulaNameControl.patchValue(value.FormulaName);
      const FormulaNumberControl = ((<FormArray>this.formulaForm.controls['conditionGroups']).at(globalIndex).get('formulaControlsArray') as FormArray).at(formulaIndex).get('FormulaNumber') as FormControl;
      FormulaNumberControl.patchValue(formulaNumber);
      const SignalListControl = ((<FormArray>this.formulaForm.controls['conditionGroups']).at(globalIndex).get('formulaControlsArray') as FormArray).at(formulaIndex).get('SignalList') as FormArray;
      SignalListControl.clear();
      value.Signals.forEach(element => {
        let formObj = this.fb.group({
          SignalNumber: new FormControl(element?.SignalNumber, Validators.required),
          ProductName: new FormControl(this.genericConfigurationService.getProductNameForSignal(element?.ProductName, element?.PocketNumber, this.masterData), Validators.required),
          ActualAmount: new FormControl(this.productAmountCalcutions(element), [CustomValidator.productAmountValidators(this.unitOfMeasure, this.isScls), Validators.required]),
          ProductAmount: new FormControl(this.genericConfigurationService.roundOfToTwoDeciamlPoint(this.productAmountCalcutions(element)), [CustomValidator.productAmountValidators(this.unitOfMeasure, this.isScls), Validators.required]),
          DispensedAmount: new FormControl(this.toCalculateDispensedAmount(this.productAmountCalcutions(element), globalIndex)),
          IsSolidProduct: new FormControl(element?.IsSolidProduct),
          Number: new FormControl(element?.PocketNumber),
          IsLocked: new FormControl(element?.IsLocked),
          HasError: new FormControl(element?.HasError),
          ProductDelay: new FormControl(element?.ProductDelay, [CustomValidator.productDelayValidators(), Validators.required])
        });
        SignalListControl.push(formObj);
      });
    } else {
      /// create new form at that index
      let signalListControl: any = [];
      value.Signals.forEach(element => {
        let formObj = this.fb.group({
          SignalNumber: new FormControl(element?.SignalNumber, Validators.required),
          ProductName: new FormControl(this.genericConfigurationService.getProductNameForSignal(element?.ProductName, element?.PocketNumber, this.masterData), Validators.required),
          ActualAmount: new FormControl(this.productAmountCalcutions(element), [CustomValidator.productAmountValidators(this.unitOfMeasure, this.isScls), Validators.required]),
          ProductAmount: new FormControl(this.genericConfigurationService.roundOfToTwoDeciamlPoint(this.productAmountCalcutions(element)), [CustomValidator.productAmountValidators(this.unitOfMeasure, this.isScls), Validators.required]),
          DispensedAmount: new FormControl(this.toCalculateDispensedAmount(this.productAmountCalcutions(element), globalIndex)),
          IsSolidProduct: new FormControl(element?.IsSolidProduct),
          Number: new FormControl(element?.PocketNumber),
          IsLocked: new FormControl(element?.IsLocked),
          ProductDelay: new FormControl(element?.ProductDelay, [CustomValidator.productDelayValidators(), Validators.required]),
          HasError: new FormControl(element?.HasError),
        });
        signalListControl.push(formObj);
      });
      let formObj = this.fb.group({
        ForumlaName: new FormControl(value.FormulaName, Validators.required),
        FormulaNumber: formulaNumber,
        SignalList: this.fb.array(signalListControl)
      })
      const FormulaControl = ((<FormArray>this.formulaForm.controls['conditionGroups']).at(globalIndex).get('formulaControlsArray') as FormArray)
      FormulaControl.insert(formulaNumber - 1, formObj)
    }
  }

  // add formula product amount calculations
  productAmountCalcutions(element) {
    if (this.selectedController.toLocaleLowerCase() === this.washersData.find(x => x.id === 1).value) {
      if (this.unitOfMeasure != this.genericConfigurationService?.Standard || element?.ProductAmountForSCLS) {
        if (this.unitOfMeasure == !this.genericConfigurationService?.Standard) {
          return (element?.ProductAmountForSCLS * this.genericConfigurationService?.UnitPerGram).toFixed(5);
        }
        else if (this.unitOfMeasure == this.genericConfigurationService?.Metric && element?.ProductAmountForSCLS) {
          return (element?.ProductAmountForSCLS / this.genericConfigurationService?.UnitPerGram).toFixed(5);
        }
      }
      else {
        element.ProductAmountForSCLS = element?.ProductAmountForSCLS.toFixed(5);
      }
      return element.ProductAmountForSCLS.toFixed(5);;
    }
    if (this.selectedController.toLocaleLowerCase() === this.washersData.find(x => x.id === 2).value) {
      if (this.unitOfMeasure != this.genericConfigurationService?.Standard || element?.ProductAmountForLCLS) {
        if (this.unitOfMeasure == !this.genericConfigurationService?.Standard) {
          return (element?.ProductAmountForLCLS * this.genericConfigurationService?.UnitPerGram * this.genericConfigurationService?.UnitPerOunce).toFixed(5);
        }
        else if (this.unitOfMeasure == this.genericConfigurationService?.Metric && element?.ProductAmountForLCLS) {
          return (element?.ProductAmountForLCLS / this.genericConfigurationService?.UnitPerGram / this.genericConfigurationService?.UnitPerOunce).toFixed(5);
        }
      }
      else {
        element.ProductAmountForLCLS = element?.ProductAmountForLCLS.toFixed(5);
      }
      return element.ProductAmountForLCLS.toFixed(5);;
    }
  }

  ngOnDestroy(): void {
    if (this.masterData$) {
      // remove the invalid signals from the list
      this.formulaForm['submitted'] = true;
      this.masterData['formula'] = this.formulaForm.value.conditionGroups;
      this.genericConfigurationService.setLocalStorage(this.masterData);
      this.genericConfigurationService.masterData.next(this.masterData);
      this.updateMasterData();
      this.masterData$.unsubscribe();
    }
  }

  navigateToReviewPage() {
    this.formulaForm['submitted'] = true;
    //added method to check invalid formula(Formula name with blank)
    this.validateFormulaName();
    if (!this.formulaForm.valid) {
      // remove the invalid signals from the list
      for (let formula in this.formulaDict) {
        const value = this.formulaDict[formula]
        this.removeSignal(value.washerIndex, value.formulaIndex, value.signalIndex);
      }
    }
    //check if any invalid formula present
    var invalidControls: string[] = this.findInvalidControlsRecursive(this.formulaForm);
    let invaliderrorData = this.setInvalidFormulaErrorData(invalidControls);
    if (invaliderrorData && invaliderrorData.length > 0) {
      this.flagService.updateNumero("Invalid Formula present. Please correct it." + invaliderrorData);
      alert("Invalid Formula present. Please correct it." + '\n' + invaliderrorData);
      return;
    }
    //
    this.masterData['formula'] = this.formulaForm.value.conditionGroups;
    this.genericConfigurationService.setLocalStorage(this.masterData);
    this.genericConfigurationService.masterData.next(this.masterData);
    this.updateMasterData();
    this.genericConfigurationService.navigateToReviewPage(this.selectedController);
  }

  backToPerviousPage() {
    this.masterData['formula'] = this.formulaForm.value.conditionGroups;
    this.genericConfigurationService.setLocalStorage(this.masterData);
    this.genericConfigurationService.masterData.next(this.masterData);
    this.router.navigate([this.genericConfigurationService.routePath.concat('/washersettings')]);
  }

  reviewFinalizePage() {
    this.formulaForm['submitted'] = true;
    //added method to check invalid formula(Formula name with blank)
    this.validateFormulaName();
    if (!this.formulaForm.valid) {
      // remove the invalid signals from the list
      for (let formula in this.formulaDict) {
        const value = this.formulaDict[formula]
        this.removeSignal(value.washerIndex, value.formulaIndex, value.signalIndex);
      }
      //check if any invalid formula present
      var invalidControls: string[] = this.findInvalidControlsRecursive(this.formulaForm);
      let invaliderrorData = this.setInvalidFormulaErrorData(invalidControls);
      if (invaliderrorData && invaliderrorData.length > 0) {
        this.flagService.updateNumero("Invalid Formula present. Please correct it." + invaliderrorData);
        alert("Invalid Formula present. Please correct it." + '\n' + invaliderrorData);
        return;
      }
      //
    }
    this.masterData['formula'] = this.formulaForm.value.conditionGroups;
    this.genericConfigurationService.setLocalStorage(this.masterData);
    this.genericConfigurationService.masterData.next(this.masterData);
    this.router.navigate([this.genericConfigurationService.routePath.concat('/reviewfinalise')]);
  }

  toCalculateDispensedAmount(amount, washerSettingsIndex) {
    let uom = this.masterData?.washersettings[washerSettingsIndex].Capacity;
    let value = uom.split(' ')[0];
    let unit = uom.split(' ')[1];
    if (unit == 'lb') {
      let res = ((amount * (value / 100)))
      return res.toFixed(2);
    } else {
      let res = ((amount * value))
      return res.toFixed(2);
    }
  }

  onChangeProductAmount(value, washerIndex, formulaIndex, signalIndex) {
    const control = (((<FormArray>this.formulaForm.controls['conditionGroups']).at(washerIndex).get('formulaControlsArray') as FormArray).at(formulaIndex).get('SignalList') as FormArray).at(signalIndex).get('DispensedAmount') as FormControl;
    const productName = (((<FormArray>this.formulaForm.controls['conditionGroups']).at(washerIndex).get('formulaControlsArray') as FormArray).at(formulaIndex).get('SignalList') as FormArray).at(signalIndex).get('ProductName') as FormControl;
    const ProductAmount = (((<FormArray>this.formulaForm.controls['conditionGroups']).at(washerIndex).get('formulaControlsArray') as FormArray).at(formulaIndex).get('SignalList') as FormArray).at(signalIndex).get('ProductAmount') as FormControl;
    const actualAmt = (((<FormArray>this.formulaForm.controls['conditionGroups']).at(washerIndex).get('formulaControlsArray') as FormArray).at(formulaIndex).get('SignalList') as FormArray).at(signalIndex).get('ActualAmount') as FormControl;
    if (productName.value == '') {
      productName.markAsTouched();
    }
    if (ProductAmount.value) {
      let result = this.validateProductAmount(this.unitOfMeasure, this.isScls, ProductAmount.value, productName.value)
      if (result) {
        ProductAmount.markAsTouched();
      }
    }
    actualAmt.patchValue(value);
    control.patchValue(this.toCalculateDispensedAmount(value, washerIndex))
  }

  validateProductAmount(uom: string, isScls: boolean, productAmount: any, productName: any) {
    let value: any = null;
    let masterData: any = localStorage.getItem('masterData');
    let localStoreData = JSON.parse(masterData);
    let liquiedProduct = this.isScls ? localStoreData.controllerProductSettings.ProductFive.value : productName;
    if (uom == 'Standard') {
      if (productName == liquiedProduct || !isScls) {
        let standredValue = parseInt(productAmount) / this.genericConfigurationService.UnitPerGram;
        value = (standredValue / this.genericConfigurationService.UnitPerOunce).toFixed(5);
      }
      else {
        value = parseInt(productAmount) / this.genericConfigurationService.UnitPerGram;
      }
    }
    else {
      value = productAmount;
    }
    let error: any = null;
    error = CustomValidator.calculateProductAmount(productName, liquiedProduct, value, isScls, this.unitOfMeasure)
    if (error) {
      return false
    }
    return true;
  }

  get getWasherControlsArray() {
    return this.formulaForm.controls['conditionGroups'] as FormArray;
  }

  removeWasher(index) {
    this.conditionGroups.removeAt(index);
    for (let item in this.conditionGroups.controls) {
      if (item == index) {
        (this.formulaForm.get('conditionGroups') as FormArray).at(parseInt(index)).get('WasherNumber')?.patchValue(parseInt(index) + 1);
        (this.formulaForm.get('conditionGroups') as FormArray).at(parseInt(index)).get('WasherName')?.patchValue(`Washer ${parseInt(index) + 1}`);
      }
    }
    if (this.masterData.hasOwnProperty('formula')) {
      this.masterData?.formula.splice(index, 1);
    }
    this.openIndex = index - 1;
  }

  //copy the selected washer data on selecting washer in popup
  copyWasher(i) {
    this.washerList = this.masterData?.washersettings;
    const modalRef = this.modalService.open(CopyWasherModelComponent, { size: '564' });
    modalRef.componentInstance.index = i;
    modalRef.componentInstance.washerList = this.washerList;
    const promise = modalRef.result.then(
      res => {
        if (res) {
          this.modifyWasherData(res);
        }
      },
      dismiss => { }
    );
  }

  //update the washer data post selection of washer in copy washer functionality
  modifyWasherData(data) {
    for (let i = 0; i < data?.modifyFormulaValue.length; i++) {
      let index = this.washerList.findIndex(x => x.WasherNumber === data.modifyFormulaValue[i]);
      this.masterData.formula[index] = this.masterData?.formula[data.index];
    }
    this.initializeForm();
  }

  //Hide and show the the copy washer button Logic
  copyButtonShow() {
    if (this.masterData?.washersettings?.length > 1) {
      this.disableCopyBtn = true;
    }
    else {
      this.disableCopyBtn = false;
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
      this.genericConfigurationService.masterData.value.editedWasherindex = this.isCollapsed ? 0 : this.editedWasherindex;
      this.genericConfigurationService.masterData.value.hideWasherContent = this.hideWasherContent;
    }
    this.genericConfigurationService.setLocalStorage(this.genericConfigurationService.masterData.value);
  }

  //Filter the available formulas for the selected washer
  getAvailbaleFormulaList(i) {
    this.availableFormulaList = [];
    var formulaList = this.masterData?.formula[i]?.formulaControlsArray;
    if (formulaList) {
      formulaList.forEach(element => {
        if (element.ForumlaName != null && !element.ForumlaName.includes('Unused')) {
          this.availableFormulaList.push(element);
        }
      });
    }
  }

  //Move the formula positions(Drag Drop Functionlity)
  moveFormula(i) {
    const modalRef = this.modalService.open(MoveFormulaModelComponent, { size: '564' });
    modalRef.componentInstance.index = i;
    modalRef.componentInstance.formulaList = this.masterData?.formula[i].formulaControlsArray;
    modalRef.componentInstance.formValue.subscribe((res => {
      if (res) {
        this.modifyFormulaForDragDrop(res, i);
      }
    }));

  }

  //get the updated formula list after reaaranging the formula's
  getFormulList(formuladata, list) {
    this.updatedFormulaList = [];
    for (let i = 0; i < formuladata.length; i++) {
      if (!formuladata[i].ForumlaName.includes('Unused')) {
        this.updatedFormulaList.push(formuladata[i])
      }
      else {
        this.data = {
          ForumlaName: this.formulaType,
          FormulaNumber: i + 1,
          SignalList: []
        }
        this.updatedFormulaList.push(this.data)
      }
    }
    for (let j = formuladata.length; j < list.length; j++) {
      this.updatedFormulaList.push(list[j]);
    }
  }

  //Reaarange the formula list based on modification
  modifyFormulaForDragDrop(formulaData, i) {
    this.getFormulList(formulaData, this.masterData?.formula[i].formulaControlsArray)
    this.reArragedList = [];
    for (let i = 0; i <= this.updatedFormulaList.length - 1; i++) {
      if (this.updatedFormulaList[i].ForumlaName) {
        this.data = {
          ForumlaName: this.updatedFormulaList[i].ForumlaName,
          FormulaNumber: i + 1,
          SignalList: this.updatedFormulaList[i].SignalList
        }
        this.reArragedList.push(this.data)
      }
      else {
        this.data = {
          ForumlaName: this.formulaType,
          FormulaNumber: this.updatedFormulaList[i],
          SignalList: []
        }
        this.reArragedList.push(this.data);
      }
    }
    this.masterData.formula[i].formulaControlsArray = this.reArragedList;
    this.initializeForm();
  }

  //This Method will be triggered as when we change the delay vaue in input
  onChangeProductDelay(value, washerIndex, formulaIndex, signalIndex) {
    const control = (((<FormArray>this.formulaForm.controls['conditionGroups']).at(washerIndex).get('formulaControlsArray') as FormArray).at(formulaIndex).get('SignalList') as FormArray).at(signalIndex).get('DispensedAmount') as FormControl;
    const productDelay = (((<FormArray>this.formulaForm.controls['conditionGroups']).at(washerIndex).get('formulaControlsArray') as FormArray).at(formulaIndex).get('SignalList') as FormArray).at(signalIndex).get('ProductDelay') as FormControl;
    if (productDelay.value == '' || productDelay.value > 900) {
      productDelay.markAsTouched();
    }
  }

  getTranslation() {
    this.translate.get([
      'AddFormula', 'ReorderFormula', 'CopyFromWasher', 'FormulaName', 'Signal', 'Product',
      'Amtlbs', 'Amtkg', 'Delay', 'DispensedAmtlbs', 'DispensedAmtkg', 'AddSignal',
      'back', "review", "next", "copyFormulaText"
    ]).subscribe(texts => {
      this.popupObjectMessage = {
        AddFormula: texts.AddFormula,
        ReorderFormula: texts.ReorderFormula,
        CopyFromWasher: texts.CopyFromWasher,
        FormulaName: texts.FormulaName,
        Signal: texts.Signal,
        Product: texts.Product,
        Amtlbs: texts.Amtlbs,
        Amtkg: texts.Amtkg,
        Delay: texts.Delay,
        DispensedAmtlbs: texts.DispensedAmtlbs,
        DispensedAmtkg: texts.DispensedAmtkg,
        AddSignal: texts.AddSignal,
        back: texts.back,
        review: texts.review,
        next: texts.next,
        copyFormulaText: texts.copyFormulaText
      };
    });
  }

  handleSpace(event: any) {
    if (event.target.selectionStart === 0 && event.code === 'Space') {
      event.preventDefault();
    }
  }

  //fetch isLocked flag froom seleced product list in formula list
  fetchIsLockFlagfromProduct(productName) {
    let isLocked: boolean = false;
    if (this.selectedController.toLocaleLowerCase() === this.washersData.find(x => x.id === 1).value) {
      isLocked = this.genericConfigurationService.getIsLockedProduct("", productName, this.selectedController);
      return isLocked;
    }
    if (this.selectedController.toLocaleLowerCase() === this.washersData.find(x => x.id === 2).value) {
      isLocked = this.genericConfigurationService.fetchIslockedValueFOrLCLSProduct(productName, this.regionSlected);
    }
    return isLocked;
  }
  //Fetching product data with isLocked flag
  fnGetProductListsWithIsLockedDataLCLS(productList: any) {
    productList.forEach(element => {
      if (element?.value?.toLocaleLowerCase() != 'none') {
        let data = {
          ProductName: element,
          IsLocked: element ? this.genericConfigurationService.fetchIslockedValueFOrLCLSProduct(element, this.regionSlected) : null
        }
        this.productLists.push(data);
      }
    });
    return this.productLists;
  }

  //If Invalid Formula controlls found, formatting and display in alert message
  setInvalidFormulaErrorData(invalidControls) {
    if (invalidControls) {
      let washers: any[] = [];
      // if ForumlaName is not invalid then dont show the error
      if (invalidControls.indexOf("ForumlaName") !== -1) {
        for (let i = 0; i <= invalidControls.length - 1; i++) {
          if (invalidControls[i].includes('formulaControlsArray')) {
            washers.push('\nWasher ' + (parseInt(invalidControls[i - 1]) + 1 )+ '->');
          }

          if (invalidControls[i].includes('ForumlaName'))
          washers.push('Formula ' + (parseInt(invalidControls[i - 1]) + 1));
        }
      }
      return washers;
    }
    return null;
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

  //Validate any formula is invalid
  validateFormulaName() {
    var invalidControls: string[] = this.findInvalidControlsRecursive(this.formulaForm);
    if (invalidControls && invalidControls.length > 0) {
      let invalidErrorData = this.setInvalidFormulaErrorData(invalidControls);
      if (invalidErrorData && invalidErrorData.length > 0) {
        //Additional check if any invalid signal not removed, then alert the user instead of directly navigating to review and finalize page(worst case scenario)
        this.flagService.updateNumero("Invalid Formula present. Please correct it." + invalidErrorData);
      }
      else {
        this.flagService.updateNumero("NO FLAG");
      }
    } else {
      this.flagService.updateNumero("NO FLAG");
    }
  }

  //this method is created to trigger inavlid data highlight for all the invalid deetails in formula screen
  validateSignalProductAmount() {
    this.formulaForm['submitted'] = true;
  }
}
