import { Injectable } from "@angular/core";
import { Config } from "src/app/core/config";
import { HttpClient } from "@angular/common/http";
import { Observable, forkJoin } from "rxjs";
import { map } from "rxjs/operators";
import { ResultMapper } from "../result-maper";

@Injectable({
  providedIn: "root"
})
export class GoogleImageSearchService {
  private apiKey: string = Config.GoogleImageSearchApiKey;
  private url: string = "https://www.googleapis.com/customsearch/v1";
  constructor(private _http: HttpClient) {}

  getImages(query: string): Observable<any> {
    // const url01 = `${this.url}?key=${
    //   this.apiKey
    // }&cx=001629702111415738398:jmzhrlwwyro&start=1&q=${query}`;
    // const url02 = `${this.url}?key=${
    //   this.apiKey
    // }&cx=001629702111415738398:jmzhrlwwyro&start=11&q=${query}`;

    // return forkJoin(
    //   this._http.get(url01).pipe(
    //     map((res: any) => res.items),
    //     map((res: any[]) => res.map(ResultMapper.imagesToAsset))
    //   ),
    //   this._http.get(url02).pipe(
    //     map((res: any) => res.items),
    //     map((res: any[]) => res.map(ResultMapper.imagesToAsset))
    //   )
    // ).pipe(map(res => [...res[0], ...res[1]]));

    const url = `${this.url}?key=${
      this.apiKey
    }&cx=001629702111415738398:jmzhrlwwyro&q=${query}`;

    return this._http.get(url).pipe(
      map((res: any) => res.items),
      map((res: any[]) => res.map(ResultMapper.imagesToAsset))
    );
  }
}
