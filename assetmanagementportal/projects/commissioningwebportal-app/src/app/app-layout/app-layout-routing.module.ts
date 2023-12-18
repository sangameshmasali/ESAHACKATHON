import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsalGuard, MsalRedirectComponent } from '@azure/msal-angular';
import { AppLayoutComponent } from './app-layout.component';

const routes: Routes = [
  {
    path: '',
    component:AppLayoutComponent,
    children: [
      {path: '',redirectTo: 'configuration',pathMatch: 'full'},
      {
        path: 'configuration',
        loadChildren: () =>
          import('./configuration/configuration.module').then(
            m => m.ConfigurationModule
          )
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppLayoutRoutingModule { }
