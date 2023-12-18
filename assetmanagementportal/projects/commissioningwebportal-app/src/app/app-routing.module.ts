import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsalGuard, MsalRedirectComponent } from '@azure/msal-angular';
import { AppComponent } from './app.component';

//modified route path for default access
const routes: Routes = [
  {path:'',component:AppComponent,canActivate:[MsalGuard] },
  { path:'auth', component:MsalRedirectComponent},
  { path: 'dashboard', loadChildren: () => import('./app-layout/app-layout.module').then(m => m.AppLayoutModule),canActivate:[MsalGuard]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
