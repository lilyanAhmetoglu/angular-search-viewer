import { TestBed } from "@angular/core/testing";

import { GoogleImageSearchService } from "./google-image-search.service";

describe("GooleImageSearchService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: GoogleImageSearchService = TestBed.get(
      GoogleImageSearchService
    );
    expect(service).toBeTruthy();
  });
});
