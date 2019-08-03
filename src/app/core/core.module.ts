import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TrimPipe } from "./pipes/trim.pipe";
import { UrlPipe } from "./pipes/url.pipe";

@NgModule({
  declarations: [TrimPipe, UrlPipe],
  exports: [TrimPipe, UrlPipe]
})
export class CoreModule {}
