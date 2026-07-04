import styles from "./Route.module.css";
import classNames from "classnames/bind";
import { data, useLoaderData } from "react-router";
import contentfulClient from "~/lib/contentful/apiClient.server";
import { ContentfulRichtext } from "~/components/ContentfulRichtext/ContentfulRichText";
import type { Route } from "./+types/route";
import { getSession } from "~/lib/session/session.server";
import previewResponse from "~/lib/utils.server";

const cx = classNames.bind(styles);

export function meta() {
  return [
    { title: "Zoran Bailey | Software Engineer" },
    {
      name: "description",
      content:
        "Hi I'm Zoran Bailey a Software Engineer and this is my portfolio!",
    },
  ];
}

export async function loader({ request }: Route.LoaderArgs) {
  const preview = (await getSession(request.headers.get("Cookie"))).get(
    "previewMode",
  );

  const page = await contentfulClient.getPage("index", preview);

  if (!page) {
    throw data("Page not found", { status: 404 });
  }

  const responseData = {
    page,
  };

  return previewResponse<typeof responseData>({ page }, preview);
}

export default function Home() {
  const { page } = useLoaderData<typeof loader>();
  const { content, pageSectionsCollection } = page;

  return (
    <div className={cx("container")}>
      <header className={cx("header")}>
        <nav className={cx("geist")}>
          <a href="https://github.com/zed-bailey" target="_blank">
            Github
          </a>
          {"/"}
          <a href="https://www.linkedin.com/in/zoran-bailey/" target="_blank">
            Linkedin
          </a>
          {"/"}
          <a href="mailto:zoran.bailey@gmail.com">Email</a>
        </nav>
      </header>

      <section className={cx("intro")}>
        <h1 className={cx("geist", "semibold")}>Zoran Bailey</h1>
        <p className={cx("geist", "light")}>Software Engineer</p>
      </section>

      <section className={cx("navGrid")}>
        <NavItem
          header={"About"}
          subheading={"A bit about me"}
          link={"#about"}
        />

        <NavItem
          header={"Resume"}
          subheading={"Where I've been"}
          link={"#resume"}
        />

        <NavItem
          header={"Projects"}
          subheading={"What I've built"}
          link={"#projects"}
        />

        <NavItem
          header={"Books"}
          subheading={"Things I've read"}
          link={"#books"}
        />

        <NavItem
          header={"Contact"}
          subheading={"Get in touch"}
          link={"#contact"}
        />
      </section>

      <ContentfulRichtext richText={content?.json} />

      {pageSectionsCollection?.items?.map((section) => {
        if (!section?.content?.json) return null;

        return (
          <section key={section.sys.id} id={section.sectionId}>
            <ContentfulRichtext
              richText={section.content.json}
              className={cx("markdownContent")}
            />
          </section>
        );
      })}

      <section className={cx("gallery")}>
        <h3>Gallery</h3>
        <p>You've made it this far! so here's a picture of my cat :)</p>
        <br />
        <img src="princess.webp" alt="my princess chocy" loading="lazy" />
      </section>
    </div>
  );
}

const NavItem = ({
  header,
  subheading,
  link,
}: {
  header: string;
  subheading: string;
  link: string;
}) => {
  return (
    <a href={link} className={cx("navItem")}>
      <h2 className={cx("gloock")}>{header}</h2>
      <p className={cx("geist", "light")}>{subheading}</p>
    </a>
  );
};
