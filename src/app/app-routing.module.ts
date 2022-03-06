import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@views/modules/navigator/navigator.module').then(m => m.NavigatorModule),
  },
  {
    path: 'algorithm',
    loadChildren: () => import('@views/modules/algorithm-task/algorithm-task.module').then(m => m.AlgorithmTaskModule),
  },
  {
    path: 'ux-ui',
    loadChildren: () => import('@views/modules/ux-ui-task/ux-ui-task.module').then(m => m.UxUiTaskModule),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
