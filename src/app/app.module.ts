import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobBoardComponent } from './job-board/job-board.component';
import { ConfigService } from './services/config.service';
import { FormsModule } from '@angular/forms';
import { JobBoardWrapperComponent } from './job-board-wrapper/job-board-wrapper.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ApplyJobComponent } from './job-details/apply-job/apply-job.component';

@NgModule({
  declarations: [
    AppComponent,
    JobDetailsComponent,
    JobBoardComponent,
    JobBoardWrapperComponent,
    ApplyJobComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AngularSvgIconModule.forRoot(),
    PaginationModule.forRoot()
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
