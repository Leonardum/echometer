import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { NavigatorRoutingModule } from './navigator-routing.module';
import { NavigatorComponent } from './pages/navigator/navigator.component';

@NgModule({
  imports: [
    SharedModule,
    NavigatorRoutingModule,
  ],
  declarations: [
    NavigatorComponent,
  ],
})
export class NavigatorModule { }
