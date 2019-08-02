import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "trim"
})
export class TrimPipe implements PipeTransform {
  transform(value: string, len: number = 45): any {
    const val = String(value);

    if (val.length > len) {
      return val.substring(0, len - 3) + "...";
    } else {
      return val;
    }
  }
}
