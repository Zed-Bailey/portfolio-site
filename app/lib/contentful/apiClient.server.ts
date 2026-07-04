import { PAGE_QUERY } from "./queries";
import type { ContentfulPage } from "./types";

class ContentfulApiClient {
  private readonly apiKey: string;
  private readonly spaceId: string;
  private readonly environment: string;
  private readonly previewApiKey: string;

  constructor(
    apiKey?: string,
    previewApiKey?: string,
    spaceId?: string,
    environment?: string,
  ) {
    if (!apiKey || !previewApiKey || !spaceId || !environment) {
      throw new Error("contentful client env variables undefined");
    }

    this.apiKey = apiKey;
    this.previewApiKey = previewApiKey;
    this.spaceId = spaceId;
    this.environment = environment;
  }

  private async apiCall<T = any>(
    query: {
      query: string;
      variables?: { [key: string]: any };
    },
    previewMode = false,
  ) {
    const res = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${this.spaceId}/environments/${this.environment}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${previewMode ? this.previewApiKey : this.apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(query),
      },
    );

    if (res.ok) {
      return (await res.json()) as T;
    }

    return null;
  }

  async getPage(
    handle: string,
    preview: boolean = false,
  ): Promise<ContentfulPage | null> {
    if (!handle) return null;

    try {
      const data = await this.apiCall(
        {
          query: PAGE_QUERY,
          variables: {
            handle,
            preview,
          },
        },
        preview,
      );

      const page = data?.data?.pageCollection?.items?.[0];
      if (!page) return null;

      return page;
    } catch (e) {
      console.error("An error occurred while trying to fetch the page", e);
      return null;
    }
  }
}

const contentfulClient = new ContentfulApiClient(
  process.env.CONTENTFUL_DELIVERY_API,
  process.env.CONTENTFUL_PREVIEW_API,
  process.env.CONTENTFUL_SPACE_ID,
  process.env.CONTENTFUL_ENVIRONMENT,
);

export default contentfulClient;
