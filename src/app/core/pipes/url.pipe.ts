import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "url"
})
export class UrlPipe implements PipeTransform {
  transform(path: string): any {
    return `url(${path})`;
  }
}
