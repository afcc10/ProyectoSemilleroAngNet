import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prefijo'
})
export class PrefijoPipe implements PipeTransform {
//...args: unknown[]
  transform(value: string, genero:string): string {
    return genero == 'M' ? 'Mr ' + value : 'Miss ' + value;
  }

}
