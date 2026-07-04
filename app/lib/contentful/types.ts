import type { Document } from "@contentful/rich-text-types";

export type Sys = {
  id: string;
};

export type ContentfulPage = {
  handle: string;
  content?: { json: Document };
  pageSectionsCollection: {
    items: ContentfulPageSection[];
  };
};

export type ContentfulPageSection = {
  sys: Sys;
  content?: { json: Document };
  sectionId?: string;
};
