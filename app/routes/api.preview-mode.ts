import { commitSession, getSession } from "~/lib/session/session.server";
import type { Route } from "./+types/api.preview-mode";
import { redirect } from "react-router";

export async function loader({ url, request }: Route.LoaderArgs) {
  const session = await getSession(request.headers.get("Cookie"));

  const secret = url.searchParams.get("secret");
  if (secret === process.env.CONTENTFUL_PREVIEW_SECRET) {
    session.set("previewMode", true);
  }

  return redirect("/", {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}
