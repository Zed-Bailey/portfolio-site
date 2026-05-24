import { Link } from "react-router";
import styles from "./About.module.css";
import classNames from "classnames/bind";
import { BackArrowCircleIcon, RightArrowIcon } from "~/components/icons/Icons";
import type { Route } from "./+types/route";

const cx = classNames.bind(styles);

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About | Zoran Bailey's Portfolio" },
    {
      name: "description",
      content: "About | Zoran Bailey - Software Engineer",
    },
  ];
}

export default function About() {
  return (
    <div className="grid grid-cols-4">
      <div className="bg-black col-span-1">
        <div className="p-6 sticky top-0">
          <Link
            to={"/"}
            className="text-white flex flex-row gap-6 text-xl items-center font-bold"
          >
            <BackArrowCircleIcon /> BACK
          </Link>
          <div className="flex flex-col gap-5 mt-5">
            <SideMenuLink to="#about" text="About" />
            <SideMenuLink to="#work" text="Work" />
            <SideMenuLink to="#spotify" text="Spotify" />
          </div>
        </div>
      </div>

      <div className="col-start-2 col-end-5 p-4">
        <div className={cx("content")}>
          <h2 className="text-9xl font-bold" id="#about">
            About
          </h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className={cx("content")}>
          <h2 className="text-9xl font-bold" id="#work">
            Work
          </h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
}

const SideMenuLink = ({ to, text }: { to: string; text: string }) => (
  <a
    href={to}
    className={cx(
      "linkWrapper",
      "link-underline text-white text-2xl flex flex-row justify-between",
    )}
  >
    {text}
    <RightArrowIcon className={cx("icon")} />
  </a>
);
