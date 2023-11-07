import { Pipe, PipeTransform } from '@angular/core';
import { Krampouz } from '../interfaces/krampouz.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Krampouz[], search: string ): Krampouz[]{
    return value.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));
  }

}
