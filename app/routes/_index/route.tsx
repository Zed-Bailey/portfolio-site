import { useRef, useState } from "react";
import styles from "./Route.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export function meta() {
  return [
    { title: "Zoran Bailey | Software Engineer" },
    {
      name: "description",
      content: "Zoran Bailey | Software Engineer",
    },
  ];
}

export default function Home() {
  const [selected, setSelected] = useState<string>();
  const containerRef = useRef<HTMLDivElement | null>(null);

  const onClick = (s: string) => {
    const isFirstSet = !selected;

    setSelected((prev) => {
      if (prev === s) return undefined;

      return s;
    });
    const isDesktop = window.matchMedia("(min-width: 800px)").matches;

    setTimeout(
      () => {
        const element = document.getElementById(`#${s}`);
        element?.scrollIntoView({ behavior: "smooth" });
      },
      isFirstSet && isDesktop ? 300 : 0,
    );
  };

  return (
    <div className="container mt-10">
      <header className={cx("")}>
        <section className={cx("headerGrid", "gap-20 md:px-6")}>
          <div className="md:w-48 flex  md:flex-col items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Zoran Bailey</h1>
              <p>Software Engineer</p>
            </div>
            <svg
              viewBox="0 0 480 480"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width={200}
              height={200}
            >
              <defs>
                <clipPath id="blob">
                  <path
                    fill="#474bff"
                    d="M441.5,292.5Q440,345,401,380.5Q362,416,315,442.5Q268,469,216.5,453Q165,437,124.5,407.5Q84,378,50.5,336.5Q17,295,25.5,242Q34,189,61.5,147.5Q89,106,126.5,73Q164,40,216,25Q268,10,320,29.5Q372,49,395.5,97.5Q419,146,431,193Q443,240,441.5,292.5Z"
                  />
                </clipPath>
              </defs>
              <image
                x="0"
                y="0"
                width="100%"
                height="100%"
                clipPath="url(#blob)"
                xlinkHref="princess.webp"
                preserveAspectRatio="xMidYMid slice"
              ></image>
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Hello 👋 i'm Zoran! </h3>
            <p className="text-sm">
              A software engineer from Melbourne, Australia! I love building
              clean, efficient, and performant user-friendly applications. For
              me, coding isn't just about making things work—it's about crafting
              elegant solutions to complex problems and creating digital
              experiences that feel seamless.
            </p>

            <p className="text-sm">
              I'm always excited to learn new tech, but here are some of the
              tools, languages, and frameworks I work with most often:
              <ul className="mt-2">
                <li>Languages: JavaScript / TypeScript, HTML/CSS</li>
                <li>Frameworks & Libraries: React, Node.js, React Router</li>
                <li>Platforms: Shopify, Contentful, Figma</li>
              </ul>
            </p>

            <h4 className="text-lg font-semibold mt-6">Beyond the Code ☕</h4>
            <p>
              When I'm not staring at VSCode or debugging a stubborn piece of
              code, you can usually find me exploring my other passions. I'm a
              big fan of cycling, drinking coffee, and diving deep into
              algorithmic trading
            </p>
            <br />
            <p className="">
              You can view my work on{" "}
              <UnderLinedHoverLink
                href="https://github.com/Zed-Bailey"
                target="_blank"
                label={<code>Github</code>}
              />{" "}
              or come say hi on{" "}
              <UnderLinedHoverLink
                label={"Linkedin"}
                background="bg-[#0077B5]"
                href="https://www.linkedin.com/in/zoran-bailey/"
                target="_blank"
              />
            </p>

            <p className="">
              Otherwise feel free to get in contact by shooting an email over to{" "}
              <CopyEmailButton />
            </p>
          </div>
        </section>
        <hr className="my-10 col-span-3" />
      </header>

      <div
        className={cx("menu", "items-start", { selected: Boolean(selected) })}
      >
        <div />
        <nav className={cx(`flex flex-col sm:p-4 md:p-6`, "stickyHeader")}>
          <HoverButton
            onClick={() => onClick("work")}
            data-selected={selected === "work"}
            label={"WORK"}
          />
          <HoverButton
            onClick={() => onClick("projects")}
            data-selected={selected === "projects"}
            label={"PROJECTS"}
          />
          <HoverButton
            onClick={() => onClick("more")}
            data-selected={selected === "more"}
            label={"MORE"}
          />
        </nav>
        <div
          className={cx("content", "md:px-10 py-6", {
            "visually-hidden-desktop": !selected,
          })}
          ref={containerRef}
        >
          <section id="#work" className={cx("contentSection")}>
            <h2 className="text-4xl font-light">WORK</h2>
            <p className="pt-2 pb-2">
              Every role I've taken on has been an opportunity to sharpen my
              skills, collaborate with great teams, and tackle new and exciting
              technical challenges. My professional background spans many
              different environments, forcing me to adapt quickly and think
              critically about system design and user impact.
            </p>

            <PositionInfo
              logoUrl={"logo/tgg.svg"}
              company={"The Good Guys"}
              href={"https://thegoodguys.com.au"}
              date={
                <>
                  2024{" "}
                  <span className="text-sm text-green-500 font-bold">
                    • Now
                  </span>
                </>
              }
              position={"Frontend Software Developer"}
              description={""}
              companyColour="#0055a5"
            />
            <PositionInfo
              company={"Freelance"}
              date={"2023 - 2024"}
              description={""}
              position={"Freelance Web Developer"}
            />

            <h3 className="text-4xl font-light mt-10">EDUCATION</h3>

            <PositionInfo
              logoUrl={"logo/rmit.svg"}
              company={"RMIT University"}
              position={"Bachelor of Information Technology"}
              date={"2020 - 2024"}
              href={"https://rmit.edu.au"}
              subHeading={"Graduated with Distinction"}
              logoWidth={64}
            />
          </section>

          <section id="#projects" className={cx("contentSection")}>
            <h2 className="text-4xl font-light flex flex-col sm:flex-row sm:items-end">
              PROJECTS{" "}
              <span className="text-sm">[ some of my favourites ]</span>
            </h2>
            <p>
              When I'm not working on production code for a job, you'll usually
              find me building things of my own. My personal projects are my
              sandbox, where I experiment with new frameworks, automate daily
              frustrations, and bring creative ideas to life.
            </p>
            <ProjectInfo />
          </section>

          <section id="#more" className={cx("contentSection")}>
            <h2 className="text-4xl font-light">MORE</h2>
            <p>There's nothing here just yet ;)</p>
          </section>
        </div>
      </div>
    </div>
  );
}

const HoverButton = ({ onClick, label, ...props }) => {
  return (
    <button
      className={cx(
        "hoverButton",
        "w-full cursor-pointer font-light hover:bg-black hover:text-white p-4 sm:p-6 md:p-10 ",
      )}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};

const UnderLinedHoverLink = ({
  label,
  background = "bg-[black]",
  textColourHover = "text-white",
  ...props
}: React.ComponentProps<"a"> & { label: string | React.ReactNode }) => {
  return (
    <a
      {...props}
      className={cx("hoverLink", "relative px-2 py-1 font-bold text-sm")}
    >
      <span className={cx("hoverLinkLabel")}>{label}</span>
      <span
        className={cx(
          "hoverLinkUnderline",
          `absolute left-0 bottom-0 w-full h-full md:h-0.5 transition-all ${background} z-0`,
        )}
      ></span>
    </a>
  );
};

const ProjectInfo = () => {
  return (
    <div className="my-10">
      <h3 className="text-3xl font-light flex flex-col md:flex-row md:items-end">
        Tradeinator{" "}
        <span className="text-sm">[ a modular algotrading framework ]</span>
      </h3>

      <div className="mb-4 mt-2 flex gap-4 items-center">
        <UnderLinedHoverLink
          label="Github"
          href="https://github.com/Zed-Bailey/Tradeinator"
        />
      </div>
      <p>work in progress</p>
    </div>
  );
};

const PositionInfo = ({
  logoUrl,
  logoWidth = 32,
  href,
  company,
  companyColour = "black",
  position,
  date,
  description,
  subHeading,
}) => {
  const HeaderWrapper = href ? "a" : "span";

  return (
    <div className="flex mt-10 md:mt-20 flex-col">
      <HeaderWrapper
        className="hover:opacity-75 w-fit"
        href={href ?? undefined}
        target={href ? "_blank" : undefined}
      >
        {logoUrl ? (
          <img
            src={logoUrl}
            width={logoWidth}
            className="rounded-sm"
            alt={`${company} logo`}
          />
        ) : null}
        <span className={`text-[${companyColour}] font-semibold text-md`}>
          {company}
        </span>
      </HeaderWrapper>

      <span className="text-lg font-semibold flex sm:gap-4 sm:items-center sm:flex-row flex-col">
        {position}{" "}
        <span className="text-sm text-gray-500 font-bold">{date}</span>
      </span>
      {subHeading ? <span>{subHeading}</span> : null}
      <p className="text-sm">{description}</p>
    </div>
  );
};

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);

  const onClick = () => {
    navigator.clipboard.writeText("zoranbailey@gmail.com").finally(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    });
  };

  return (
    <button className={cx("copyButton", "mt-4")} onClick={onClick}>
      <code className={cx("fore")}>
        zoranbailey@gmail.com{" "}
        <span className={cx("copyText", "font-extralight", "text-[10px]")}>
          [{copied ? "copied" : "copy"}]
        </span>
      </code>
    </button>
  );
};
