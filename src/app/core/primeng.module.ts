import { NgModule } from "@angular/core";
import { TabViewModule } from "primeng/tabview";
import { CardModule } from "primeng/card";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { DropdownModule } from "primeng/dropdown";
import { DialogModule } from "primeng/dialog";

@NgModule({
  exports: [
    TabViewModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    DialogModule
  ]
})
export class PrimgngModule {}
