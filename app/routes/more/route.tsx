import classNames from "classnames/bind";
import styles from "./More.module.css";

const cx = classNames.bind(styles);

export default function More() {
  return (
    <div>
      <div className={cx("content")}>
        <h2 className="text-9xl font-bold" id="#spotify">
          Spotify
        </h2>
        <p>What am i currently listening to?</p>
        <div className="grid grid-cols-3 gap-y-3 my-6">
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
    <a href="/" className="w-52 h-52 hover:animate-spin">
      <img src="picture-disk.png" />
    </a>
  );
};
