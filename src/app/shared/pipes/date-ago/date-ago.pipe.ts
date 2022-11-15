import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateAgo'
})
export class DateAgoPipe implements PipeTransform {
    transform(value: string): string {
      if (!value) {
        return '';
      }
  
      const millisecondsNow = new Date().getTime();
      const millisecondsDate = new Date(value).getTime();
  
      const seconds = (millisecondsNow - millisecondsDate) / 1000;
      if (seconds < 29) {
        return 'Just now';
      }
  
      const intervals: { [key: string]: number } = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1,
      };
  
      for (const i in intervals) {
        const counter = Math.floor(seconds / intervals[i]);
  
        if (counter > 0) {
          if (counter === 1) {
            return `${counter} ${i} ago`;
          } else {
            return `${counter} ${i}s ago`;
          }
        }
      }
  
      return '';
    }
  }