import classNames from "classnames/bind";
import styles from "./Projects.module.css";
import { GithubCircle } from "~/components/icons/Icons";
import { Card } from "~/components/Card/Card";

const cx = classNames.bind(styles);

export default function Projects() {
  return (
    <div className="py-12 container">
      <h1 className="text-9xl font-bold">Projects</h1>
      <p className="pb-16 pt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sint
        excepturi odio illo dolor explicabo, consequuntur ipsam porro assumenda
        magnam deserunt! Nam itaque iste, dolorem ratione deserunt blanditiis
        odit illo!
      </p>
      <div className="grid grid-cols-3 gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
