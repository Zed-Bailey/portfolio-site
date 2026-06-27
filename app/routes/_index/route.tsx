import { type MouseEvent } from "react";
import styles from "./Route.module.css";
import classNames from "classnames/bind";

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
          When i'm not working, i'm often out cycling the countryside or reading
          a good book.
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

      <ContentSection></ContentSection>

      <ContentSection heading={"Books"} headingId={"books"}>
        <p className={cx("geist", "light")}>
          As an avid reader, here are some books that i've really enjoyed
          reading, in no particular order
        </p>
        <ul className={cx("geist")}>
          <li>2312 - Kim Stanley Robinson</li>
          <li>The Stormlight Archive Series - Brandon Sanderson</li>
          <li>Mistborn Series - Brandon Sanderson</li>
          <li>The Martian - Andy Weir</li>
          <li>Project Hail Mary - Andy Weir</li>
          <li>Red Rising Saga - Pierce Brown</li>
          <li>The Expanse - James S. A. Corey</li>
          <li>Commonwealth Saga - Peter F. Hamilton</li>
          <li>Altered Carbon - Richard Morgan</li>
        </ul>
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

const ContentSection = ({ heading, headingId, children }) => {
  return (
    <section id={headingId} className={cx("contentSection")}>
      <h3 className="gloock">{heading}</h3>
      {children}
    </section>
  );
};
