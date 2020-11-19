import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "milesPipe" })
export class MilesPipe implements PipeTransform {

  transform(value: string): string {

    return value.replace(/\./g, '#').replace(/\,/g, '.').replace(/\#/g, ',');
  }
}
