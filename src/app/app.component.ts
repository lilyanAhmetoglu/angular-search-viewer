import { Component } from "@angular/core";
import { YoutubeService } from "./shared/services/youtube.service";
import { Tabs } from "./models/tabs";
import { Tab } from "./models/tab";
import { response } from "./temp/response";
import { GoogleImageSearchService } from "./shared/services/google-image-search.service";
import { ResultMapper } from "./shared/result-maper";
import { Asset } from "./models/asset";
import { SearchTypes } from "./shared/data/search-types";
import { TabsDaTaService } from "./shared/services/tabs-data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "search-viewer";
  public tabs: Tabs;
  public selectedIndex = 0;

  public selecteionAsset: Asset = Asset.getAsset();

  public dialogVis: boolean = false;

  public searchType = SearchTypes;

  constructor(
    private _yService: YoutubeService,
    private _gService: GoogleImageSearchService,
    private _tabsDataService: TabsDaTaService
  ) {}

  /**
   * Angular life cycle hook run only once when the component created
   *
   * @memberof AppComponent
   */
  public ngOnInit() {
    this.tabs = this._tabsDataService.getCurrentTabs();

    this.addNewTab(); // 🎉 create a first tab when the project start
  }

  public addNewTab() {
    const tab = new Tab();

    // 👇 fro test only so I don't need to send to many api request
    // tab.assests = response.map(ResultMapper.videosToAsset);
    // console.log(tab.assests);

    this._tabsDataService.AddTab(tab);
    this.selectedIndex = this.tabs.length - 1;

    // setTimeout(() => {
    // }, 0);
  }

  public getAssests(tab: Tab) {
    if (tab.searchParameters.type == "videos") {
      this._yService.getVideos(tab.searchParameters.query).subscribe(assets => {
        tab.assests = assets;
      });
    } else {
      this._gService.getImages(tab.searchParameters.query).subscribe(assets => {
        tab.assests = assets;
      });
    }
  }

  public showDialog(data: Asset): void {
    this.selecteionAsset = data;
    this.dialogVis = true;
  }

  public removeTab(index): void {
    this._tabsDataService.removeTab;
  }
}
