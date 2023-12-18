import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { AlertModalComponent } from './alert-modal/alert-modal.component';



@NgModule({
  declarations: [
    ConfirmModalComponent,
    AlertModalComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: []
})
export class SharedModule { }
