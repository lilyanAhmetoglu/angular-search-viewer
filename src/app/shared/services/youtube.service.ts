import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Config } from "src/app/core/config";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ResultMapper } from "../result-maper";
import { Assets } from "src/app/models/assets";

@Injectable({
  providedIn: "root"
})
export class YoutubeService {
  private apiKey: string = Config.YoutubeApiKey;
  private url: string = "https://www.googleapis.com/youtube/v3/search";

  constructor(private _http: HttpClient) {}

  getVideos(query: string, maxResults: number = 50): Observable<Assets> {
    const url = `${this.url}?key=${
      this.apiKey
    }&part=snippet&type=video&maxResults=${maxResults}&q=${query}`;

    return this._http.get(url).pipe(
      map((res: any) => res.items),
      map((res: any[]) => res.map(ResultMapper.videosToAsset))
    );
  }
}
