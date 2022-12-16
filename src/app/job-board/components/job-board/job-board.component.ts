import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { JobsService, Job } from '../../../services';

@Component({
  selector: 'app-job-board',
  templateUrl: './job-board.component.html',
  styleUrls: ['./job-board.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class JobBoardComponent implements OnInit {
  jobs: Job[] = [];
  currentPage = 1;
  itemsPerPage = 8;
  page = 1;
  pageSize = 5;

  constructor(private jobsService: JobsService) {}

  ngOnInit(): void {
    this.jobsService.getJobs().subscribe((jobs) => {
      this.jobs = jobs;
    });
  }

  saveJob(event: MouseEvent, id: string) {
    event.preventDefault();
    event.stopPropagation();
  }
}