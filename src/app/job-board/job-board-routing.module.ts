import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JobBoardComponent } from './components';

const routes: Routes = [{ path: '', component: JobBoardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobBoardRoutingModule {}