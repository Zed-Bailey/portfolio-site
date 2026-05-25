import classNames from "classnames/bind";
import styles from "./Projects.module.css";
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

      <h2 className="text-6xl font-bold py-4">tldr;</h2>
      <div className="grid grid-cols-3 gap-4">
        <Card heading="Project #1" />
        <Card heading="Project #2" />
        <Card heading="Project #3" />
        <Card heading="Project #4" />
        <Card heading="Project #5" />
        <Card heading="Project #6" />
      </div>
      <ProjectSection />
    </div>
  );
}

const ProjectSection = () => {
  return (
    <section id="#project1" className="mt-24">
      <h3 className="text-6xl font-bold py-4">Project #1</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sint
        excepturi odio illo dolor explicabo, consequuntur ipsam porro assumenda
        magnam deserunt! Nam itaque iste, dolorem ratione deserunt blanditiis
        odit illo!
      </p>
    </section>
  );
};
