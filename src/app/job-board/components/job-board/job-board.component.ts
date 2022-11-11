import { Component, OnInit } from '@angular/core';
import { JobsService, Job } from '../../../services';
@Component({
  selector: 'app-job-board',
  templateUrl: './job-board.component.html',
  styleUrls: ['./job-board.component.scss']
})


export class JobBoardComponent implements OnInit {

  jobs: Job[] = [];

  constructor(private jobsService: JobsService) {}

  ngOnInit(): void {
    this.jobsService.getJobs().subscribe((jobs) => {
      this.jobs = jobs;
      console.log('jobs', this.jobs);
    });
  }


}
