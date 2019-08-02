import { Asset } from "../models/asset";
import { AssetType } from "../models/asset-type";

export class ResultMapper {
  public static videosToAsset(res: any) {
    const data = res.snippet;
    console.log(data.thumbnails.medium.url);
    return new Asset(
      data.title,
      AssetType.videos,
      data.thumbnails.medium.url,
      data.thumbnails.high.url,
      `https://www.youtube.com/watch?v=${res.id.videoId}`,
      res.snippet.description
    );
  }

  public static imagesToAsset(res) {
    let previewImageUrl = "";

    if (res.pagemap.cse_image) {
      previewImageUrl = res.pagemap.cse_image[0].src;
    } else {
      previewImageUrl = res.pagemap.cse_image[0].src;
    }

    return new Asset(
      res.title,
      AssetType.images,
      previewImageUrl,
      previewImageUrl,
      res.link,
      res.snippet
    );
  }
}
