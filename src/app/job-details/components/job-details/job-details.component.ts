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


    get getMapUrl(): string {
      if (!this.job) {
        return ''
      }
      return 'https://maps.googleapis.com/maps/api/staticmap?center=' +
        this.job?.location.lat +
        ',' +
        this.job?.location.long +
        '&zoom=10&size=600x370&style=feature:all|color:0xfff&style=feature:landscape|color:0xfffa&style=feature:administrative|color:0x989fb1&maptype=roadmap&markers=color:0xd8d8d8%7Clabel:S%7C' +
        this.job?.location.lat +
        ',' + this.job?.location.long + '&key=AIzaSyCa5hWR3DMR9EbwT1A-XT2Sy5m2vhDIPi0'
    }

    
  constructor(private route: ActivatedRoute, private jobsService: JobsService) {
    route.params
      .pipe(switchMap((params) => this.jobsService.getJobById(params['id'])))
      .subscribe((job) => {
        this.job = job;
      });
  }

  ngOnInit(): void { }

  saveJob(event: MouseEvent, id: number) {
    event.preventDefault();
    event.stopPropagation();
  }

}
