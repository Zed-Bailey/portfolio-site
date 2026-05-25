import classNames from "classnames/bind";
import styles from "./Card.module.css";
import { DownArrowIcon } from "../icons/Icons";

const cx = classNames.bind(styles);

interface CardProps {
  heading: string;
  subHeading?: string;
}

export const Card = ({ heading, subHeading }: CardProps) => {
  return (
    <article className={cx("border border-black", "card")}>
      <div className="flex flex-col gap-0.5 border-b border-b-black p-2">
        <h2
          className={cx("text-4xl flex flex-row justify-between items-center")}
        >
          <a href="#project1" className={cx("link")}>
            {heading}
          </a>
          <DownArrowIcon className={cx("icon", "animate-bounce")} />
        </h2>
        {subHeading ? (
          <p className="text-sm text-slate-600">{subHeading}</p>
        ) : null}
      </div>

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
