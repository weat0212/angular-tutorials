import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'twDate'
})
export class TwDate2CalendarPipe implements PipeTransform {

  constructor() {
  }

  transform(date: string, format?: string): any {
    if (date && !(date === '-')) {
      let [year, month, day] = date.split('/');
      const yearNum = Number(year) + 1911;
      const monthStr = month.padStart(2,'0');
      const dayStr = day.padStart(2,'0');
      return `${yearNum}-${monthStr}-${dayStr}`;
    } else {
      return '-';
    }
  }
}
