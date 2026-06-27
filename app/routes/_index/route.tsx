import { type MouseEvent, type PropsWithChildren } from "react";
import styles from "./Route.module.css";
import classNames from "classnames/bind";
import Path from "node:path";
import { useLoaderData } from "react-router";
import Markdown, { type Components } from "react-markdown";

// import the markdown files as raw strings
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
      content:
        "Hi I'm Zoran Bailey a Software Engineer and this is my portfolio!",
    },
  ];
}

export async function loader() {
  const content = new Map<string, string>();

  // maps the filename to the content for lookup later on
  for (const path in mdContent) {
    const data = await mdContent[path]();
    const name = Path.parse(path).name;
    content.set(name, data as string);
  }

  return { content };
}

export default function Home() {
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
            Working extensivley with React, React Router, HTML, CSS, TypeScript,
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
        <MarkdownContent id="projects" />
      </ContentSection>

      <ContentSection heading={"Books"} headingId={"books"}>
        <MarkdownContent id="books" />
      </ContentSection>

      <ContentSection heading={"Contact"} headingId={"contact"}>
        <MarkdownContent id="contact" />
      </ContentSection>

      <section className={cx("gallery")}>
        <h3>Gallery</h3>

        <img src="princess.webp" alt="my princess chocy" />
        <p>A picture of my cat, chocy</p>
      </section>
    </div>
  );
}

const markdownComponent: Components = {
  a(props) {
    return <a {...props} target="_blank" />;
  },
};

const MarkdownContent = ({ id }: { id: string }) => {
  const { content } = useLoaderData<typeof loader>();

  return (
    <div className={cx("markdownContent")}>
      <Markdown components={markdownComponent}>
        {content.get(id) ?? ""}
      </Markdown>
    </div>
  );
};

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
