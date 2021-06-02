import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genero'
})
export class GeneroPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value == 'M' ? 'Masculino' : 'Femenino'
  }

}
