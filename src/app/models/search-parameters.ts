/**
 * the form value of ui search form
 *
 * @export
 * @class SearchParameters
 */
export class SearchParameters {
  query: string;
  type: "videos" | "images";

  constructor() {
    this.query = "";
    this.type = "videos";
  }
}
