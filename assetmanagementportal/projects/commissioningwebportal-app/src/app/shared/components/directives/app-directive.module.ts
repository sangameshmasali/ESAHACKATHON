import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumericDirective } from './host-listeners/numeric.directive';
import { AllowAlphaNumericDirective } from './host-listeners/allow-alpha-numeric.directive';
import { IntergersDirective } from './host-listeners/integers-only.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ NumericDirective, AllowAlphaNumericDirective,IntergersDirective],
  exports: [NumericDirective,AllowAlphaNumericDirective,IntergersDirective]
})
export class AppDirectiveModule { }
