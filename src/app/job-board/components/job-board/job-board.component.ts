import { Component, OnInit } from '@angular/core';
import { JobsService, Job } from '../../../services';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
@Component({
  selector: 'app-job-board',
  templateUrl: './job-board.component.html',
  styleUrls: ['./job-board.component.scss']
})


export class JobBoardComponent implements OnInit {

  jobs: Job[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  returnedArray: Job[] = [];

  constructor(private jobsService: JobsService) { }

  ngOnInit(): void {
    this.jobsService.getJobs().subscribe((jobs) => {
      this.jobs = jobs;
      const length = this.jobs.length
      console.log('jobs', this.jobs);
      console.log('length', length);
      this.returnedArray = this.jobs.slice(0, 10);
      console.log('returnedArray', this.returnedArray);


    });


  }
  pageChanged(event: PageChangedEvent): void {
    this.currentPage = event.page;
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    console.log('endItem', endItem);
    console.log('startItem', startItem);
    console.log('currentPage', this.currentPage);
    this.returnedArray = this.jobs.slice(startItem, endItem)
  }

  saveJob(event: MouseEvent, id: number) {
    event.preventDefault();
    event.stopPropagation();
  }
}
