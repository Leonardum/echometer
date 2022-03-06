import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UxUiTaskComponent } from '@views/modules/ux-ui-task/pages/ux-ui-task/ux-ui-task.component';

const routes: Routes = [
  {
    path: '',
    component: UxUiTaskComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UxUiTaskRoutingModule { }
