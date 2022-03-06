import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlgorithmTaskComponent } from '@views/modules/algorithm-task/pages/algorithm-task/algorithm-task.component';

const routes: Routes = [
  {
    path: '',
    component: AlgorithmTaskComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlgorithmTaskRoutingModule { }
