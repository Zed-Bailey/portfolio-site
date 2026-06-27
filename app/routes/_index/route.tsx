import { type MouseEvent, type PropsWithChildren } from "react";
import styles from "./Route.module.css";
import classNames from "classnames/bind";
import Path from "node:path";
import { useLoaderData } from "react-router";
import Markdown from "react-markdown";

const mdContent = import.meta.glob("./content/*.md", {
  query: "?raw",
  import: "default",
});

const cx = classNames.bind(styles);

export function meta() {
  return [
    { title: "Zoran Bailey | Software Engineer" },
    {
      name: "description",
      content: "Hi I'm Zoran Bailey a Software Engineer, this is my portfolio!",
    },
  ];
}

export async function loader() {
  const content = new Map<string, string>();

  for (const path in mdContent) {
    const data = await mdContent[path]();
    const name = Path.parse(path).name;
    content.set(name, data as string);
  }

  return { content };
}

export default function Home() {
  const { content } = useLoaderData<typeof loader>();

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

      <ContentSection heading={"About"} headingId={"#about"}>
        <p className={cx("geist", "light", "stretch")}>
          Hi, I'm Zoran! A software engineer from Melbourne, Australia.
          <br />I love writing code and building performant, user-friendly
          applications.
          <br />
          <br />
          When i'm not working, i'm often out cycling the countryside, reading a
          good book or developing algorithmic trading systems.
        </p>
      </ContentSection>

      <ContentSection heading={"Resume"} headingId={"#resume"}>
        <div className={cx("position")}>
          <a
            href="https://thegoodguys.com.au"
            target="_blank"
            className={cx("geist", "semibold")}
          >
            The Good Guys
          </a>
          <br />
          <p className={cx("geist")}>
            Frontend Software Engineer, 2024 - Present
          </p>
          <p className={cx("description", "geist", "light")}>
            Working extensivley with react router, html, css, typescript,
            shopify hydrogen, contentful cms, algolia. Building reusable
            components.
            <br />
            working closely with business analysts, and designers to understand
            features and the customer experience
            <br />
            worked on various projects, my favourite being the bundle/package
            system
            <br />
            developing custom contentful apps to assist and enhance upon the
            content creation flow for marketing and the wider business
          </p>
        </div>

        <div className={cx("position")}>
          <p className={cx("geist", "semibold")}>Freelance</p>
          <p className={cx("geist")}>Web Developer, 2023 - 2024</p>
          <p className={cx("description", "geist", "light")}>
            Worked closely with clients to understand their needs and develop a
            website to suit
          </p>
        </div>

        <div className={cx("position")}>
          <p className={cx("geist", "semibold")}>RMIT</p>
          <p className={cx("geist")}>
            Bachelor of Information Technology, 2021 - Feb 2025
          </p>
          <p className={cx("description", "geist", "light")}>
            Graduated with Distinction
          </p>
        </div>
      </ContentSection>

      <ContentSection heading={"Projects"} headingId={"projects"}>
        <div className={cx("markdownContent")}>
          <Markdown>{content.get("projects")}</Markdown>
        </div>
      </ContentSection>

      <ContentSection heading={"Books"} headingId={"books"}>
        <div className={cx("markdownContent")}>
          <Markdown>{content.get("books")}</Markdown>
        </div>
      </ContentSection>

      <ContentSection heading={"Contact"} headingId={"contact"}>
        <p>Looking to get in touch?</p>
        <p>
          Feel free to send an email to <b>zoran.bailey@gmail.com</b> or come
          say hi on{" "}
          <a href="https://www.linkedin.com/in/zoran-bailey/" target="_blank">
            Linkedin
          </a>
        </p>
      </ContentSection>
    </div>
  );
}

function scrollTo(e: MouseEvent<HTMLAnchorElement>, link: string) {
  const element = document.getElementById(link);
  if (element) {
    e.preventDefault();
    element.scrollIntoView({
      behavior: "smooth",
    });
  }
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
    <a href={link} className={cx("navItem")} onClick={(e) => scrollTo(e, link)}>
      <h2 className={cx("gloock")}>{header}</h2>
      <p className={cx("geist", "light")}>{subheading}</p>
    </a>
  );
};

const ContentSection = ({
  heading,
  headingId,
  children,
  className,
}: {
  heading: string;
  headingId: string;
  className?: string;
} & PropsWithChildren) => {
  return (
    <section id={headingId} className={cx("contentSection", className)}>
      <h3 className="gloock">{heading}</h3>
      {children}
    </section>
  );
};
