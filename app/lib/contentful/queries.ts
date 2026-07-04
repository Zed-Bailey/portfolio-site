export const PAGE_QUERY = `
query ($handle: String, $preview: Boolean) {
  pageCollection(limit: 1, where: {handle: $handle}, preview: $preview) {
    items {
      handle
      content {
        json
      }
      pageSectionsCollection {
        items {
          sys {
            id
          }
          sectionId
          content {
            json
          }
        }
      }
    }
  }
}
`;
