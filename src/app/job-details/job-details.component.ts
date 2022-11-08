import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {

  dataset: any;

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
    this.configService.getData()
      .subscribe((value) => {
        this.dataset = value
        console.log(this.dataset);
      })
  }

}
