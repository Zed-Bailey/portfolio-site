import { Link } from "react-router";
import type { Route } from "./+types/route";
import { MenuLink } from "~/components/MenuLink/MenuLink";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="grid grid-cols-2 h-dvh">
      <div className="sticky top-0 flex flex-col">
        <h1
          className="flex flex-col gap-3 text-[200px]"
          style={{ marginTop: "auto" }}
        >
          <span className="font-bold">ZORAN</span>
          <span className="font-light">BAILEY</span>
        </h1>
      </div>
      <div className="grid grid-rows-3">
        <MenuLink text="about" to="/about" />
        <MenuLink text="projects" to="/projects" />
        <MenuLink text="more" to="/more" />
      </div>
    </div>
  );
}
