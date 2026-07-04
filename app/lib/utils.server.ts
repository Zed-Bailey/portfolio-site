import { data } from "react-router";

/**
 * Dynamically adds cache control headers to the response based on the preview status
 */
export default function previewResponse<T>(
  responseData: T,
  preview: boolean = false,
) {
  if (preview) return responseData;

  return data(responseData, {
    headers: {
      "Cache-Control": "max-age=0, s-maxage=7200",
    },
  });
}
