import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Job, JobsService } from '../../../services';
import { environment } from '../../../../environments/environment'

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {

  job?: Job;
  // googleMapsKeys = environment.googleMapsKey //! work with Api Key Google
  googleApiUrl = 'https://maps.googleapis.com/maps/api/staticmap'

  mapConfig: Record<string, string>[] = [{
    zoom: '13'
  },
  {
    size: '600x220'
  },
  {
    style: 'feature:all|color:0x989fb1'
  },
  {
    style: 'feature:landscape.man_made|color:0x333a52'
  },
  {
    style: 'feature:road|color:0x2a324a|visibility:simplified'
  },
  {
    maptype: 'roadmap'
  }, 
  {
    markers: 'color:0xd8d8d8%7C'
  },];

  


  get config(): string {
    return this.mapConfig.reduce((prev: string, curr: Record<string, string>) => {
      const key = Object.keys(curr)[0];
      prev += `&${key}=${curr[key]}`
      return prev;
    }, '')
  }

  /* get getMapUrl(): string { //! work with Api Key Google
    if (!this.job) {
      return ''
    }

    const coordinats = `${this.job.location.lat},${this.job.location.long}`

    return (`${this.googleApiUrl}?center=` +
      coordinats +
      this.config +
      coordinats +
      `&key=${this.googleMapsKeys}`)
  }
  */

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
