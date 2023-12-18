import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationRoutingModule } from './configuration-routing.module';
import { ConfigurationDetailsComponent } from './components/saved-components/configuration-details/configuration-details.component';
import { SavedConfigurationComponent } from './components/saved-components/saved-configuration/saved-configuration.component';
import { WashersettingsComponent } from './components/saved-components/washersettings/washersettings.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { ControllerProductsetting } from './components/saved-components/controller-productsetting/controller-productsetting.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReviewfinaliseComponent } from './components/saved-components/reviewfinalise/reviewfinalise.component';
import { FormulaComponent } from './components/saved-components/formula/formula-list/formula.component';
import { AddformulaModelComponent } from './components/saved-components/formula/addformula/addformula-model/addformula-model.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SharedModule } from '../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { CopyWasherModelComponent } from './components/saved-components/formula/copywasher/copywasher-model.component';
import { NgbActiveModal, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { AppDirectiveModule } from '../../shared/components/directives';
import { AlertModule } from '../../modules';
import { ProfileComponent } from './components/saved-components/profile/profile.component';
import { ShareConfigurationModelComponent } from './components/share-configuration/share-configuration.component';
import { MoveFormulaModelComponent } from './components/saved-components/formula/moveFormula/moveformula-model.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AB300WatersettingsComponent } from './components/saved-components/bodyofwater/ab300-watersettings.component';
import { WeekdaysComponent } from './components/saved-components/day-custom/day-custom.component';
import { AB300ReviewfinaliseComponent } from './components/saved-components/ab300-reviewandfinalise/ab300-reviewandfinalise.component';
import { AlcscontrollerPumpsettingComponent } from './components/saved-components/alcscontroller-pumpsetting/alcscontroller-pumpsetting.component';

@NgModule({
  declarations: [
    ControllerProductsetting,
    WashersettingsComponent,
    SavedConfigurationComponent,
    ConfigurationDetailsComponent,
    HeaderComponent,
    FormulaComponent,
    ReviewfinaliseComponent,
    AddformulaModelComponent,
    CopyWasherModelComponent,
    ProfileComponent,
    MoveFormulaModelComponent,
    ShareConfigurationModelComponent,
    AB300WatersettingsComponent,
    WeekdaysComponent,
    AB300ReviewfinaliseComponent,
    AlcscontrollerPumpsettingComponent
  ],
  providers: [
    NgbActiveModal,
  ],
  schemas: [ 
    CUSTOM_ELEMENTS_SCHEMA 
  ],
  imports: [
    CommonModule,
    ConfigurationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    DragDropModule,
    SharedModule,
    TranslateModule,
    AppDirectiveModule,
    MatChipsModule,
    MatIconModule,
    MatTooltipModule,
    NgbTimepickerModule
  ],
})
export class ConfigurationModule { }
