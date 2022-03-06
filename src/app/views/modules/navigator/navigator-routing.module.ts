import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavigatorComponent } from '@views/modules/navigator/pages/navigator/navigator.component';

const routes: Routes = [
  {
    path: '',
    component: NavigatorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigatorRoutingModule { }
