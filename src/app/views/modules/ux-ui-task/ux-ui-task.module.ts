import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { UxUiTaskRoutingModule } from './ux-ui-task-routing.module';
import { UxUiTaskComponent } from './pages/ux-ui-task/ux-ui-task.component';

@NgModule({
  imports: [
    SharedModule,
    UxUiTaskRoutingModule,
  ],
  declarations: [
    UxUiTaskComponent
  ],
})
export class UxUiTaskModule { }
