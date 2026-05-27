import classNames from "classnames/bind";
import styles from "./More.module.css";

const cx = classNames.bind(styles);

export default function More() {
  return (
    <div className="container">
      <h2 className="text-5xl font-bold" id="#spotify">
        Spotify
      </h2>
      <p>What am i currently listening to?</p>
      <div className="grid grid-cols-2 gap-y-3 my-6">
        <div>
          <VinylRecord />
          <VinylRecord />
          <VinylRecord />
          <VinylRecord />
          <VinylRecord />
          <VinylRecord />
        </div>
      </div>
    </div>
  );
}

const VinylRecord = () => {
  return (
    <div className={cx("vinyl")}>
      <a href="/" className="">
        <img src="picture-disk.webp" alt="pizza" />
      </a>
    </div>
  );
};
