import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'areaOfCircle'
})
export class AreaOfCirclePipe implements PipeTransform {

  pi:number=3.14;
  transform(value: any) {
    return (value**2)*this.pi;
  }

}
