import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationRoutingModule } from './configuration-routing.module';
import { SavedConfigurationComponent } from './components/saved-components/saved-configuration/saved-configuration.component';
import { WashersettingsComponent } from './components/saved-components/washersettings/washersettings.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SharedModule } from '../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgbActiveModal, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { AppDirectiveModule } from '../../shared/components/directives';
import { AlertModule } from '../../modules';
import { ProfileComponent } from './components/saved-components/profile/profile.component';
import { ShareConfigurationModelComponent } from './components/share-configuration/share-configuration.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CreateassetComponent } from './components/saved-components/createasset/createasset.component';
import { UserComponent } from './components/saved-components/user/user.component';
import { AdduserComponent } from './components/saved-components/adduser/adduser.component';
import { AssetrequestComponent } from './components/saved-components/assetrequest/assetrequest.component';

@NgModule({
  declarations: [
    WashersettingsComponent,
    SavedConfigurationComponent,
    HeaderComponent,
    ProfileComponent,
    ShareConfigurationModelComponent,
    CreateassetComponent,
    UserComponent,
    AdduserComponent,
    AssetrequestComponent
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
