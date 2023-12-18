import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AB300WatersettingsComponent } from './components/saved-components/bodyofwater/ab300-watersettings.component';
import { ConfigurationDetailsComponent } from './components/saved-components/configuration-details/configuration-details.component';
import { ControllerProductsetting } from './components/saved-components/controller-productsetting/controller-productsetting.component';
import { FormulaComponent } from './components/saved-components/formula/formula-list/formula.component';
import { ProfileComponent } from './components/saved-components/profile/profile.component';
import { ReviewfinaliseComponent } from './components/saved-components/reviewfinalise/reviewfinalise.component';
import { SavedConfigurationComponent } from './components/saved-components/saved-configuration/saved-configuration.component';
import { WashersettingsComponent } from './components/saved-components/washersettings/washersettings.component';
import { AB300ReviewfinaliseComponent } from './components/saved-components/ab300-reviewandfinalise/ab300-reviewandfinalise.component';
import { AlcscontrollerPumpsettingComponent } from './components/saved-components/alcscontroller-pumpsetting/alcscontroller-pumpsetting.component';

const routes: Routes = [
  { path: '', redirectTo: 'saved-configuration', pathMatch:'full'},
  { path: 'saved-configuration', component: SavedConfigurationComponent },
  { path: 'configuration-details', component: ConfigurationDetailsComponent },
  { path: 'controller-productsetting', component: ControllerProductsetting },
  { path: 'washersettings', component: WashersettingsComponent },
  { path: 'formula', component: FormulaComponent },
  { path: 'reviewfinalise', component: ReviewfinaliseComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'watersettings', component: AB300WatersettingsComponent },
  { path: 'ab300-reviewandfinalise', component: AB300ReviewfinaliseComponent },
  { path: 'alcscontroller-pumpsetting', component: AlcscontrollerPumpsettingComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
