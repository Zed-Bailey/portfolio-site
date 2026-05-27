import { Link } from "react-router";
import type { Route } from "./+types/route";
import { MenuLink } from "~/components/MenuLink/MenuLink";
import {
  GithubCircle,
  LinkedInCircle,
  MailCircle,
} from "~/components/icons/Icons";
import { Card } from "~/components/Card/Card";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Zoran Bailey's Portfolio" },
    { name: "description", content: "Zoran Bailey - Software Engineer" },
  ];
}

export default function Home() {
  return (
    <section className="grid grid-cols-2 h-dvh">
      <div className="sticky top-0 flex flex-col justify-between">
        <div className="p-4">
          <h3 className="text-3xl font-light text-slate-900">
            Software Engineer
          </h3>

          <div className="flex gap-4 mt-6">
            <a href="mailto:zoran.bailey@gmail.com">
              <MailCircle size={64} />
            </a>
            <a href="https://github.com/Zed-Bailey">
              <GithubCircle size={64} />
            </a>
            <a href="https://linkedin.com/in/zoran-bailey/">
              <LinkedInCircle size={64} />
            </a>
          </div>
        </div>
        <h1 className="flex flex-col text-[200px]">
          <span className="font-extrabold">ZORAN</span>
          <span className="font-extralight">BAILEY</span>
        </h1>
      </div>
      <div className="grid grid-rows-3">
        <MenuLink text="about" to="/about" />
        <MenuLink text="projects" to="/projects" />
        <MenuLink text="more" to="/more" />
      </div>
    </section>
  );
}
