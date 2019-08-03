import { Injectable } from "@angular/core";
import { Tab } from "src/app/models/tab";
import { Tabs } from "src/app/models/tabs";

@Injectable({
  providedIn: "root"
})
export class TabsDaTaService {
  // 🔥 our project state a single source and base of object base of array [] 👌
  private data: Tabs = [];

  constructor() {}

  public AddTab(tab: Tab = new Tab()) {
    this.data.push(tab);
  }

  public getCurrentTabs(): Tabs {
    return this.data;
  }

  public removeTab(index): void {
    this.data.splice(index, 1);
  }
}
