import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { COMPONENTS } from './components';
import { JobDetailsRoutingModule } from './job-details-routing.module';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, JobDetailsRoutingModule, AngularSvgIconModule],
})
export class JobDetailsModule {}