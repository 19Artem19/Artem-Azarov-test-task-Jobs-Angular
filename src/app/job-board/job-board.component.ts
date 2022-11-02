import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';
// import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-job-board',
  templateUrl: './job-board.component.html',
  styleUrls: ['./job-board.component.scss']
})


export class JobBoardComponent implements OnInit {

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
