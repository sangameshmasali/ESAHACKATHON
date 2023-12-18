import { NgModule } from '@angular/core';
  import { BaseApiProvider } from '../../env.config';
import { BaseHttpClientService, LoggerService } from './services';


@NgModule({
  imports: [
  ],
  declarations: [],
  providers: [
    BaseHttpClientService,
    LoggerService,
    BaseApiProvider,
  ]
})
export class CoreModule { }
