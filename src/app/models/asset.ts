import { AssetType } from "./asset-type";

/**
 * Asset is the map of the google search and youtube api result
 *
 * @export
 * @class Asset
 */
export class Asset {
  constructor(
    public title: string,
    public type: AssetType,
    public previewImageUrl: string,
    public largeImageUrl: string,
    public sourceUrl: string,
    public description: string
  ) {}

  static getAsset() {
    return new Asset("", AssetType.images, "", "", "", "");
  }
}
