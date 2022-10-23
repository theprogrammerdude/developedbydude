import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import DurationConstructor = moment.unitOfTime.DurationConstructor;

@Pipe({
  name: 'readingTime',
})
export class ReadingTimePipe implements PipeTransform {
  transform(
    content: string,
    wpm: number = 575,
    unit: DurationConstructor = 'minutes',
    locale = 'en'
  ): string {
    const words = content.trim().split(/\s+/).length;
    const duration = Math.ceil(words / wpm);
    return moment.duration(duration, unit).locale(locale).humanize();
  }
}
