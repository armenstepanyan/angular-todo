import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uncompleted'
})
export class UncompletedPipe implements PipeTransform {

  transform(list: Array<any>): number {
    return list.filter(item => !item.isCompleted).length
  }

}
