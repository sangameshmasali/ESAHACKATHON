import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/saved-components/profile/profile.component';
import { SavedConfigurationComponent } from './components/saved-components/saved-configuration/saved-configuration.component';
import { UserComponent } from './components/saved-components/user/user.component';
import { AssetrequestComponent } from './components/saved-components/assetrequest/assetrequest.component';
import { AssethistoryComponent } from './components/saved-components/assethistory/assethistory.component';

const routes: Routes = [
  { path: '', redirectTo: 'saved-configuration', pathMatch:'full'},
  { path: 'saved-configuration', component: SavedConfigurationComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component:UserComponent},
  { path:'request', component: AssetrequestComponent},
  { path: 'assethistory', component:AssethistoryComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
