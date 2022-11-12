import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Job, JobsService } from 'src/app/services';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {

  job?: Job;

  constructor(private route: ActivatedRoute, private jobsService: JobsService) {
    route.params
      .pipe(switchMap((params) => this.jobsService.getJobById(params['id'])))
      .subscribe((job) => {
        this.job = job;
        console.log('job', this.job);
      });
  }

  ngOnInit(): void { }

  saveJob(event: MouseEvent, id: number) {
    event.preventDefault();
    event.stopPropagation();
  }

}
