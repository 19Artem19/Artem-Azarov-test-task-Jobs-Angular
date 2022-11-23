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
  page:number = 1;
  pageSize:number = 5;


  constructor(private jobsService: JobsService) { }

  ngOnInit(): void {
    this.jobsService.getJobs().subscribe((jobs) => {
      this.jobs = jobs;
      console.log('jobs',this.jobs);
    });
  }


  saveJob(event: MouseEvent, id: number) {
    event.preventDefault();
    event.stopPropagation();
  }
}
