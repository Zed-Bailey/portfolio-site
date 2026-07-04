import contentfulClient from "~/lib/contentful/apiClient.server";
import { ContentfulRichtext } from "~/components/ContentfulRichtext/ContentfulRichText";
import { data, useLoaderData } from "react-router";
import { getSession } from "~/lib/session/session.server";
import type { Route } from "./+types/page.$handle";
import previewResponse from "~/lib/utils.server";

export async function loader({ params, request }: Route.LoaderArgs) {
  const preview = (await getSession(request.headers.get("Cookie"))).get(
    "previewMode",
  );

  const page = await contentfulClient.getPage(params.handle, preview);

  if (!page) {
    throw data("Page not found", { status: 404 });
  }

  const responseData = { page };
  return previewResponse<typeof responseData>(responseData, preview);
}

const DynamicPage = () => {
  const { page } = useLoaderData<typeof loader>();

  return (
    <div className={""}>
      <ContentfulRichtext richText={page?.content?.json} />
    </div>
  );
};

export default DynamicPage;
