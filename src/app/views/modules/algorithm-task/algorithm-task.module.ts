import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { AlgorithmTaskRoutingModule } from './algorithm-task-routing.module';
import { AlgorithmTaskComponent } from './pages/algorithm-task/algorithm-task.component';


@NgModule({
  imports: [
    SharedModule,
    AlgorithmTaskRoutingModule
  ],
  declarations: [
    AlgorithmTaskComponent
  ],
})
export class AlgorithmTaskModule { }
