import classNames from "classnames/bind";
import styles from "./Route.module.css";
import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";
import "@xyflow/react/dist/style.css";
import { useEffect, useRef, useState, type Ref } from "react";
import { RightArrowCircleIcon } from "~/components/icons/Icons";

const cx = classNames.bind(styles);

export default function PannableCanvas() {
  const panRef = useRef({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const introRef = useRef<HTMLDivElement | null>(null);
  const hasPositioned = useRef(false);
  const [reveal, setReveal] = useState(false);

  const canvasRef = useRef<HTMLDivElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);

  const refMap = useRef<Map<string, HTMLDivElement>>(new Map());

  useEffect(() => {
    if (!hasPositioned.current && introRef.current) {
      const rect = introRef.current?.getBoundingClientRect();
      introRef.current.style.top = `${rect.top}px`;
      introRef.current.style.left = `${rect.left}px`;
      introRef.current.style.position = "absolute";
      introRef.current.style.transform = "";
      hasPositioned.current = true;
    }
  }, []);

  const handleWheel = (e) => {
    if (!reveal) return;
    e.preventDefault();

    console.log("pan", e.deltaX, e.deltaY);

    let x = panRef.current.x;
    x = Number.parseFloat(x) - e.deltaX;

    let y = panRef.current.y;
    y = Number.parseFloat(y) - e.deltaY;

    canvasRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    panRef.current = { x, y };
  };

  const handleMouseDown = (e) => {
    if (!reveal) return;
    isDragging.current = true;
    // Calculate where the mouse started relative to the current pan position
    dragStart.current = {
      x: e.clientX - panRef.current.x,
      y: e.clientY - panRef.current.y,
    };
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;

    const x = e.clientX - dragStart.current.x;
    const y = e.clientY - dragStart.current.y;
    // New pan is current mouse position minus the offset where we started dragging
    canvasRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    panRef.current = { x, y };
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const focusOnCard = (id: string) => {
    const viewport = viewportRef.current;
    const cardDOMElement = refMap.current.get(id);

    if (!viewport || !cardDOMElement) return;

    // 1. Measure screen-space bounding rect
    const {
      width: cardWidth,
      height: cardHeight,
      x,
      y,
    } = cardDOMElement.getBoundingClientRect();
    const { x: viewX, y: viewY } = viewport.getBoundingClientRect();

    // 2. Convert screen X/Y back into stable canvas coordinates
    // by subtracting the viewport offset and the current canvas pan
    const cardCanvasX = x - viewX - panRef.current.x;
    const cardCanvasY = y - viewY - panRef.current.y;

    // 3. Get viewport size
    const viewWidth = viewport.clientWidth;
    const viewHeight = viewport.clientHeight;

    // 4. Center math using stable calculated canvas positions
    const targetX = viewWidth / 2 - cardCanvasX - cardWidth / 2;
    const targetY = viewHeight / 2 - cardCanvasY - cardHeight / 2;

    canvasRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
    panRef.current = { x: targetX, y: targetY };
  };
  return (
    <div
      ref={viewportRef}
      className={cx("canvas-viewport")}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onWheel={handleWheel}
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div className={cx("canvas-content")} ref={canvasRef}>
        <div
          ref={introRef}
          className={cx("introBlock")}
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <p>
            Hi i'm Zoran, A software engineer from Melbourne, Australia. I love
            building clean, efficient, and performant, user-friendly
            applications.
          </p>
          {reveal ? (
            <span>[ DRAG TO MOVE ]</span>
          ) : (
            <button onClick={() => setReveal((p) => !p)}>VIEW</button>
          )}
        </div>

        <Card
          reveal={reveal}
          ref={(el) => {
            if (el) {
              refMap.current.set("1", el);
            } else {
              refMap.current.delete("1");
            }
          }}
        />

        <Card
          reveal={reveal}
          imgHref={"/princess.webp"}
          position={{
            x: 100,
            y: 200,
          }}
          tag={{
            label: "PROJECT",
            type: "project",
          }}
          ref={(el) => {
            if (el) {
              refMap.current.set("2", el);
            } else {
              refMap.current.delete("2");
            }
          }}
        />
      </div>

      <div className={cx("toolbar", { showtoolbar: reveal })}>
        <button onClick={() => focusOnCard("1")}>focus role</button>
        <button onClick={() => focusOnCard("2")}>focus project</button>
        <button
          onClick={() => {
            panRef.current = { x: 0, y: 0 };
            setReveal(false);
            canvasRef.current.style.transform = `translate3d(0px, 0px, 0)`;
          }}
        >
          reset
        </button>
      </div>
    </div>
  );
}

interface CardProps {
  reveal: boolean;
  heading: string;
  subHeading: string;
  imgHref?: string;
  position: {
    x: number;
    y: number;
  };
  tag?: {
    label: string;
    type: "project" | "work";
  };
  ref?: Ref<HTMLDivElement>;
}

const Card = ({
  reveal,
  heading = "Project #1",
  subHeading = "this is the subheading",
  imgHref,
  position = {
    x: 0,
    y: 0,
  },
  tag,
  ref,
}: CardProps) => {
  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <article className={cx("card", { visible: reveal })}>
        {tag ? (
          <div className={cx("cardTag", "geist")}>
            <span className={cx("dot", tag.type)} />
            <span>{tag.label}</span>
          </div>
        ) : null}
        {imgHref ? <img src={imgHref} width={"100%"} /> : null}

        <div className={cx("headingWrapper")}>
          <h3 className={cx("gloock")}>{heading}</h3>
          <button className={cx("modalButton")}>
            <RightArrowCircleIcon />
          </button>
        </div>
        <p className={cx("subHeading", "geist")}>{subHeading}</p>
      </article>
    </div>
  );
};

const LavaLampCard = () => {
  return (
    <ShaderGradientCanvas
      style={{
        position: "absolute",
        top: 600,
        left: 1000,
        width: 500,
        height: 500,
        pointerEvents: "none",
      }}
      fov={30}
    >
      <ShaderGradient
        animate="on"
        //   axesHelper="on"
        bgColor1="#000000"
        bgColor2="#000000"
        brightness={1.1}
        cAzimuthAngle={180}
        cDistance={3.9}
        cPolarAngle={115}
        cameraZoom={1}
        color1="#5606ff"
        color2="#fe8989"
        color3="#000000"
        destination="onCanvas"
        embedMode="off"
        envPreset="city"
        format="gif"
        fov={45}
        frameRate={10}
        gizmoHelper="hide"
        grain="off"
        lightType="3d"
        pixelDensity={1}
        positionX={-0.5}
        positionY={0.1}
        positionZ={0}
        range="disabled"
        rangeEnd={40}
        rangeStart={0}
        reflection={0.1}
        rotationX={0}
        rotationY={0}
        rotationZ={235}
        shader="defaults"
        type="waterPlane"
        uAmplitude={0}
        uDensity={1.1}
        uFrequency={5.5}
        uSpeed={0.1}
        uStrength={2.4}
        uTime={0.2}
        wireframe={false}
      />
    </ShaderGradientCanvas>
  );
};
