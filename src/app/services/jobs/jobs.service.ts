
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { jobs } from '../../mocks'

export interface Job {
  id: string;
  name: string;
  email: string;
  phone: string;
  title: string;
  salary: string;
  address: string;
  rating?: number[];
  benefits: string[];
  location: {
    lat: number;
    long: number;
  };
  pictures: string[];
  createdAt: string;
  updatedAt: string;
  description: string;
  employment_type: string[];
}

@Injectable({
  providedIn: 'root',
})
export class JobsService {

  jobs: Job[] = [];

  constructor() { }

  getJobs(): Observable<Job[]> {
    return of(jobs)
  }

  getJobById(id: string): Observable<Job | undefined> {
    return this.getJobs().pipe(
      map((job) => {
        const jobId = jobs.find((job) => job.id === id);
        return jobId
      }
      ))
  }

// for API
  // jobsSub$ = new BehaviorSubject<Job[]>([]);
  // jobsSub = this.jobsSub$.asObservable();

  // private url = 'https://api.json-generator.com/templates/ZM1r0eic3XEy/data';
  // private accessToken = 'wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu';

  // constructor(private http: HttpClient) {
  //   this.getDataFromService().subscribe((jobs) => {
  //     this.jobsSub$.next(jobs);
  //   });
  // }

  // getJobs(): Observable<Job[]> {
  //   return this.jobsSub$;
  // }

  // getJobById(id: string): Observable<Job | undefined> {
  //   return this.jobsSub$.pipe(
  //     map((jobs) => {
  //       const job = jobs.find((job) => job.id === id);
  //       return job;
  //     })
  //   );
  // }

  // private getDataFromService(): Observable<Job[]> {
  //   return this.http.get<Job[]>(`${this.url}?access_token=${this.accessToken}`);
  // }
}