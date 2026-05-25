import styles from "./About.module.css";
import classNames from "classnames/bind";
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
    <div className="py-10 container">
      <section className={"grid grid-cols-2"}>
        <div className="place-self-center flex flex-col items-center">
          <div className="bg-black w-60 h-60 rounded-2xl"></div>
          <span className="text-sm text-slate-600">(my cat not me!)</span>
        </div>

        <div>
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
      </section>

      <section className={cx("content", "mt-20")}>
        <h2 className="text-9xl font-bold" id="#work">
          Work
        </h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <WorkExperience />
        <WorkExperience />
      </section>
    </div>
  );
}

const WorkExperience = () => {
  return (
    <div className="py-8">
      <h3 className="text-3xl">Freelance</h3>
      <span>Oct 2020 - Feb 2021</span>
      <hr className="text-slate-300 py-2" />
      <div className="grid grid-cols-2">
        <div>
          <div className="grid grid-cols-2">
            <div>
              <p className="text-lg">Technologies</p>
              <ul className="list-disc">
                <li>1</li>
                <li>1</li>
                <li>1</li>
              </ul>
            </div>

            <div>
              <p>Skills</p>
              <ul className="list-disc">
                <li>1</li>
                <li>1</li>
                <li>1</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-sm">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            explicabo ipsa deleniti error, exercitationem ipsam animi eligendi
            aperiam quam quidem iure voluptate quibusdam? Veritatis, debitis
            magni voluptatibus minus nesciunt praesentium!
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            explicabo ipsa deleniti error, exercitationem ipsam animi eligendi
            aperiam quam quidem iure voluptate quibusdam? Veritatis, debitis
            magni voluptatibus minus nesciunt praesentium!
          </p>
        </div>
      </div>
    </div>
  );
};
