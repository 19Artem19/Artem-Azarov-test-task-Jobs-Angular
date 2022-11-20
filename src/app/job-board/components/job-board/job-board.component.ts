import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { JobsService, Job } from '../../../services';
// import { PageChangedEvent } from 'ngx-bootstrap/pagination';
@Component({
  selector: 'app-job-board',
  templateUrl: './job-board.component.html',
  styleUrls: ['./job-board.component.scss'],
  encapsulation: ViewEncapsulation.None
})


export class JobBoardComponent implements OnInit {

  jobs: Job[] = [];
  currentPage = 1;
  itemsPerPage = 8;
  // jobsOnView: Job[] = [];
  page:number = 1;
  pageSize:number = 2;


  constructor(private jobsService: JobsService) { }

  ngOnInit(): void {
    this.jobsService.getJobs().subscribe((jobs) => {
      this.jobs = jobs;
      console.log('jobs',this.jobs);
      // this.jobsOnView = this.jobs.slice(0, 20);
      // console.log('jobsOnView',this.jobsOnView);
    });
  }

  // pageChanged(event: PageChangedEvent): void {
  //   this.currentPage = event.page;
  //   const startItem = (event.page - 1) * event.itemsPerPage;
  //   const endItem = event.page * event.itemsPerPage;
  //   this.jobsOnView = this.jobs.slice(startItem, endItem);
  // }

  saveJob(event: MouseEvent, id: number) {
    event.preventDefault();
    event.stopPropagation();
  }
}
