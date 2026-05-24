import classNames from "classnames/bind";
import styles from "./Projects.module.css";
import { GithubCircle } from "~/components/icons/Icons";

const cx = classNames.bind(styles);

export default function Projects() {
  return (
    <div className="p-12">
      <div className="grid grid-cols-3 gap-4">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}

const ProjectCard = () => {
  return (
    <article className={cx("border border-black")}>
      <h2 className="text-4xl border-b border-b-black p-2">Project #1</h2>
      <p className="text-sm text-slate-900 p-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
        perferendis molestias dignissimos eos mollitia labore, delectus
        asperiores nisi nam doloremque, aspernatur aliquid iste ut numquam quod
        maiores atque quaerat neque.
      </p>
      <div className="flex flex-row gap-2 flex-wrap text-[12px] text-slate-600 p-2">
        <span>technology</span>
        <span>technology</span>
        <span>technology</span>
      </div>
    </article>
  );
};
