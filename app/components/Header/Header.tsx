import classNames from "classnames/bind";
import styles from "./Header.module.css";
import { Link } from "react-router";

const cx = classNames.bind(styles);

export const Header = () => {
  return (
    <header className={cx("header")}>
      <Link to={"/"} className="font-bold p-2">
        Zoran Bailey
      </Link>

      <div className="flex h-full">
        <Link to={"/about"} className={cx("font-bold", "menuLink")}>
          About
        </Link>
        <Link to={"/projects"} className={cx("font-bold", "menuLink")}>
          Projects
        </Link>
        <Link to={"/more"} className={cx("font-bold", "menuLink")}>
          More
        </Link>
      </div>
    </header>
  );
};
