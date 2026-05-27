import { useRef, useState } from "react";
import { Card } from "~/components/Card/Card";
import styles from "./Route.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function Home2() {
  const [selected, setSelected] = useState<string>();
  const containerRef = useRef<HTMLDivElement | null>(null);

  const onClick = (s: string) => {
    const isFirstSet = !selected;

    setSelected((prev) => {
      if (prev === s) return undefined;

      return s;
    });
    setTimeout(
      () => {
        const element = document.getElementById(`#${s}`);
        element?.scrollIntoView({ behavior: "smooth" });
      },
      isFirstSet ? 300 : 0,
    );
  };

  return (
    <div className="container mt-32">
      <header className={cx("")}>
        <section className={cx("headerGrid", "gap-20 px-6")} style={{}}>
          <div className="w-48">
            <h1 className="text-2xl font-bold">Zoran Bailey</h1>
            <p>Software Engineer</p>
          </div>
          <div>
            <p>
              Hello i'm Zoran! A software engineer from Melbourne, Australia!
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
              obcaecati sit ut illo accusantium consequatur, quos, laborum sint
              recusandae atque nemo! Exercitationem inventore facere iste
              tempora ea repudiandae, maxime praesentium?
            </p>
            <p className="my-2">
              You can view my work on{" "}
              <UnderLinedHoverLink
                href="https://github.com/Zed-Bailey"
                target="_blank"
                label={<code>Github</code>}
              />
              {/* <a
                className="bg-black text-white px-2 py-1 rounded-sm font-bold text-sm aria-pressed:scale-95 transition-transform ease-in-out "
                href="#"
              >
                <code>Github</code>
              </a> */}{" "}
              or come say hi on{" "}
              <a
                href="#"
                className="group relative px-2 py-1 overflow-hidden rounded-sm font-bold text-sm"
              >
                <span className="px-1 relative z-10 group-hover:text-white">
                  Linkedin
                </span>
                <span className="absolute left-0 bottom-0 w-full h-0.5 transition-all bg-[#0077B5] z-0 group-hover:h-full "></span>
              </a>
            </p>

            <p className="my-2">
              Otherwise feel free to get in contact by shooting an email over to{" "}
              <button className="cursor-pointer inline-flex gap-2 border-2 border-black px-2 py-1 rounded-sm items-center hover:bg-black hover:text-white">
                <code className="text-sm">zoran.bailey@gmail.com</code>
                <span>
                  <svg
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    stroke-linejoin="round"
                    stroke-miterlimit="2"
                    viewBox="0 0 24 24"
                    width={14}
                    height={14}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m6 18h-3c-.48 0-1-.379-1-1v-14c0-.481.38-1 1-1h14c.621 0 1 .522 1 1v3h3c.621 0 1 .522 1 1v14c0 .621-.522 1-1 1h-14c-.48 0-1-.379-1-1zm1.5-10.5v13h13v-13zm9-1.5v-2.5h-13v13h2.5v-9.5c0-.481.38-1 1-1z"
                      fill-rule="nonzero"
                    />
                  </svg>
                </span>
              </button>
            </p>
          </div>
        </section>
        <hr className="my-10 col-span-3" />
      </header>

      <div
        className={cx("menu", "items-start", { selected: Boolean(selected) })}
      >
        <div />
        <div className={cx(`flex flex-col p-6`, "stickyHeader")}>
          <HoverButton
            onClick={() => onClick("work")}
            data-selected={selected === "work"}
            label={"WORK"}
          />
          <HoverButton
            onClick={() => onClick("projects")}
            data-selected={selected === "projects"}
            label={"PROJECTS"}
          />
          <HoverButton
            onClick={() => onClick("more")}
            data-selected={selected === "more"}
            label={"MORE"}
          />
        </div>
        <div
          className={cx("content", "px-10 py-6", {
            "visually-hidden-desktop": !selected,
          })}
          ref={containerRef}
        >
          <section id="#work">
            <h2 className="text-4xl font-light">WORK</h2>
            <p className="pt-2 pb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              quasi aliquid perferendis quo quis provident tempora. Repudiandae
              possimus, optio deserunt asperiores, blanditiis nihil impedit ab
              nam quod, consequuntur voluptatum natus!
            </p>

            <div className="flex mt-10 flex-col">
              <a
                href="https://thegoodguys.com.au"
                className="hover:opacity-75"
                target="_blank"
              >
                <img src="logo/tgg.svg" width={32} className="rounded-sm" />
                <span className="text-[#0055a5] font-semibold text-md">
                  The Good Guys
                </span>
              </a>

              <span className="text-lg font-semibold flex gap-1 items-center">
                Frontend Software Developer{" "}
                <span className="text-sm text-green-500 font-bold">• Now</span>
              </span>

              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                veritatis ab molestias similique quaerat at dolorum velit neque
                recusandae, rerum aut laborum maxime nihil tenetur sapiente
                reiciendis dicta pariatur? Libero!
              </p>
            </div>

            <div className="flex mt-20 flex-col">
              <span className="hover:opacity-75">
                <span className="text-black font-semibold text-md">
                  Freelance
                </span>
              </span>

              <span className="text-lg font-semibold flex gap-4 items-center">
                Freelance Web Developer{" "}
                <span className="text-sm text-gray-500 font-bold">
                  2020 - 2021
                </span>
              </span>

              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                veritatis ab molestias similique quaerat at dolorum velit neque
                recusandae, rerum aut laborum maxime nihil tenetur sapiente
                reiciendis dicta pariatur? Libero!
              </p>
            </div>

            <div className="flex mt-20 flex-col">
              <h3 className="text-4xl font-light mb-10">EDUCATION</h3>

              <a
                href="https://rmit.edu.au"
                className="hover:opacity-75"
                target="_blank"
              >
                <img src="logo/rmit.svg" width={64} className="rounded-sm" />
                <span className="text-[#000054] font-semibold text-md">
                  RMIT University
                </span>
              </a>

              <span className="text-lg font-semibold flex gap-4 items-center">
                Bachelor of Information Technology{" "}
                <span className="text-sm text-gray-500 font-bold">
                  2020 - 2024
                </span>
              </span>
              <span>Graduated with distinction</span>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                veritatis ab molestias similique quaerat at dolorum velit neque
                recusandae, rerum aut laborum maxime nihil tenetur sapiente
                reiciendis dicta pariatur? Libero!
              </p>
            </div>
          </section>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <section id="#projects">
            <h2 className="text-4xl font-light">
              PROJECTS{" "}
              <span className="text-sm">[ some of my favourites ]</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              quasi aliquid perferendis quo quis provident tempora. Repudiandae
              possimus, optio deserunt asperiores, blanditiis nihil impedit ab
              nam quod, consequuntur voluptatum natus!
            </p>
            <ProjectInfo />
          </section>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <section id="#more">
            <h2 className="text-4xl font-light">MORE</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              quasi aliquid perferendis quo quis provident tempora. Repudiandae
              possimus, optio deserunt asperiores, blanditiis nihil impedit ab
              nam quod, consequuntur voluptatum natus!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              quasi aliquid perferendis quo quis provident tempora. Repudiandae
              possimus, optio deserunt asperiores, blanditiis nihil impedit ab
              nam quod, consequuntur voluptatum natus!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              quasi aliquid perferendis quo quis provident tempora. Repudiandae
              possimus, optio deserunt asperiores, blanditiis nihil impedit ab
              nam quod, consequuntur voluptatum natus!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              quasi aliquid perferendis quo quis provident tempora. Repudiandae
              possimus, optio deserunt asperiores, blanditiis nihil impedit ab
              nam quod, consequuntur voluptatum natus!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              quasi aliquid perferendis quo quis provident tempora. Repudiandae
              possimus, optio deserunt asperiores, blanditiis nihil impedit ab
              nam quod, consequuntur voluptatum natus!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              quasi aliquid perferendis quo quis provident tempora. Repudiandae
              possimus, optio deserunt asperiores, blanditiis nihil impedit ab
              nam quod, consequuntur voluptatum natus!
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

const HoverButton = ({ onClick, label, ...props }) => {
  return (
    <button
      className=" cursor-pointer font-light hover:bg-black hover:text-white max-w-48 p-10"
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};
const UnderLinedHoverLink = ({
  label,
  ...props
}: React.ComponentProps<"a"> & { label: string | React.ReactNode }) => {
  return (
    <a
      {...props}
      className="group relative px-2 py-1 overflow-hidden rounded-sm font-bold text-sm"
    >
      <span className="px-1 relative z-10 group-hover:text-white">{label}</span>
      <span className="absolute left-0 bottom-0 w-full h-0.5 transition-all bg-black z-0 group-hover:h-full "></span>
    </a>
  );
};

const ProjectInfo = () => {
  return (
    <div className=" my-10">
      <h3 className="text-3xl font-light">
        Project #1{" "}
        <span className="text-sm">
          [ a project to make everyone feel better ]
        </span>
      </h3>

      <div className="mb-4 mt-2 flex gap-4 items-center">
        <UnderLinedHoverLink label="Github" href="https://github.com" />
        <img src="logo/typescript.svg" className="w-5 h-5 " />
      </div>
      <p>
        This project Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Rem amet voluptatem odio, est at id velit cumque temporibus dolorum
        blanditiis consectetur labore quas dicta, non, tempore necessitatibus
        fuga mollitia tenetur?
      </p>

      <div className="mt-5">
        <div className="w-full max-w-60 h-40 bg-black rounded-xl"></div>
      </div>
    </div>
  );
};
