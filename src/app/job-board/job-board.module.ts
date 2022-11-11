import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { COMPONENTS } from './components';
import { JobBoardRoutingModule } from './job-board-routing.module';
import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, JobBoardRoutingModule, AngularSvgIconModule,PaginationModule.forRoot()],
})
export class JobBoardModule {}