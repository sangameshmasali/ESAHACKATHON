import { FormControl, AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';
import { of } from 'rxjs';
let error: any = null;

export class CustomValidator {

    // product validation based on SCLS IsSolidProduct
    static productAmountValidators(uom: string, isScls: boolean): (abstractControl: AbstractControl) => ValidationErrors | null {
        return (control: AbstractControl): ValidationErrors | null => {
            let value: any = null;
            let defalutProductCalValue: number = 45.359702;
            let liquidProductValue: number = 0.033814;
            let masterData: any = localStorage.getItem('masterData');
            let localStoreData = JSON.parse(masterData);
            let liquiedProduct = isScls ? localStoreData.controllerProductSettings.ProductFive.value : control?.parent?.controls['ProductName'].value
            if (uom == 'Standard') {
                if (control?.parent?.controls['ProductName'].value == liquiedProduct || !isScls) {
                    let standredValue = parseInt(control.value) / defalutProductCalValue;
                    value = (standredValue / liquidProductValue).toFixed(5);
                }
                else {
                    value = parseInt(control.value) / defalutProductCalValue;
                }
            }
            else {
                value = control.value;
            }
            error = null
            error = this.calculateProductAmount(control?.parent?.controls['ProductName'].value, liquiedProduct, isScls ? value : control.value, isScls, uom);
            if (error) {
                return error
            }
            return null;
        };
    }

    static calculateProductAmount(productName: any, liquidProductdata: any, productAmount: any, isSCLS: boolean, uom: any) {
        // checking true/null
        if (isSCLS) {
            if (productName != liquidProductdata) {
                if (!(productAmount >= 0 && productAmount <= 16)) {
                    return error = { "productAmountError": true }
                }
            }
            else if (isSCLS) {
                if (!(productAmount >= 0 && productAmount <= 50)) {
                    return error = { "productAmountError": true }
                }
            }
            else {
                if (!(productAmount >= 0 && productAmount <= 16.29947)) {
                    return error = { "productAmountError": true }
                }
            }
        }
        if (!isSCLS) {
            if (uom == 'Standard') {
                if (!(productAmount >= 0 && productAmount <= 25)) {
                    return error = { "productAmountError": true }
                }
            }
            else if (uom == 'Metric') {
                if (!(productAmount >= 0 && productAmount <= 16.29947)) {
                    return error = { "productAmountError": true }
                }
            }
        }
        return null;
    }

    static whiteSpace(control: AbstractControl): ValidationErrors | null {
        if (control && control.value != null && control.value.trim() == "") {
            return { whiteSpace: true };
        }
        return null;
    };
    static noWhiteSpace(control: AbstractControl): ValidationErrors | null {
        let isValid = true;
        if (control.value[0] == ' ') {
            isValid = false;
        }
        return of(isValid ? null : { noWhiteSpace: true });
    }

    //validator to validate delay field
    static productDelayValidators(): (abstractControl: AbstractControl) => ValidationErrors | null {
        return (control: AbstractControl): ValidationErrors | null => {
            let error: any = null;
            // checking true/null
            if ((control?.parent?.controls['ProductDelay'].value > 900)) {
                error = { "productDelayError": true }
            }
            if (error) {
                return error
            }
            return null;
        };
    }

    static readonly NoWhitespaceRegExp: RegExp = new RegExp("\\S");

    //validator the range for pHOverfeed and disinfectantOverfeed
    static rangeValidatorForOverfeed(): (abstractControl: AbstractControl) => ValidationErrors | null {
        return (control: AbstractControl): ValidationErrors | null => {
            let error: any = null;
            // checking true/null
            if ((control.value < 15 || control.value > 1260) || !(/^\d+$/.test(control.value))) {
                error = { "productDelayError": true }
            }
            if (error) {
                return error
            }
            return null;
        };
    }
}
