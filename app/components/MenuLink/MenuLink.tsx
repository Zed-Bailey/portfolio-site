import { useEffect, useRef } from "react";
import { Link } from "react-router";

interface MenuLinkProps {
  text: string;
  to: string;
}
export const MenuLink = ({ text, to }: MenuLinkProps) => {
  const containerRef = useRef<HTMLAnchorElement | null>(null);
  const linkRef = useRef<HTMLHeadingElement | null>(null);

  const hasEntered = useRef(false);

  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 }); // smooth position
  const rafId = useRef<number | null>(null);

  const animate = () => {
    if (!linkRef.current || !containerRef.current) return;

    const el = linkRef.current;
    const rect = containerRef.current.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();

    // Clamp mouse position inside container
    const minX = elRect.width / 2;
    const maxX = rect.width - elRect.width / 2;
    const minY = elRect.height / 2;
    const maxY = rect.height - elRect.height / 2;

    const targetX = Math.min(Math.max(mouse.current.x, minX), maxX);
    const targetY = Math.min(Math.max(mouse.current.y, minY), maxY);

    // Smooth interpolation (lerp)
    pos.current.x += (targetX - pos.current.x) * 0.15;
    pos.current.y += (targetY - pos.current.y) * 0.15;

    el.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;

    rafId.current = requestAnimationFrame(animate);
  };

  const startAnimation = () => {
    if (rafId.current) return;
    rafId.current = requestAnimationFrame(animate);
  };

  const stopAnimation = () => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    rafId.current = null;
  };

  return (
    <Link
      ref={containerRef}
      to={to}
      className="relative block hover:bg-black hover:text-white hover:font-bold font-light transition ease-in-out"
      onMouseEnter={() => {
        hasEntered.current = true;
        startAnimation();
      }}
      onMouseLeave={() => {
        hasEntered.current = false;
        stopAnimation();

        if (linkRef.current) {
          linkRef.current.style.transition = "transform 300ms ease-out";
          linkRef.current.style.transform = "translate(0px,0px)";

          setTimeout(() => {
            if (linkRef.current) {
              linkRef.current.style.transition = "";
              linkRef.current.style.transform = "";
            }
          }, 301);
        }
      }}
      onMouseMove={(e) => {
        if (!hasEntered.current || !containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();

        // mouse relative to container
        mouse.current.x = e.clientX - rect.left;
        mouse.current.y = e.clientY - rect.top;
      }}
    >
      <h2
        ref={linkRef}
        className="absolute top-0 left-0 text-7xl uppercase pointer-events-none will-change-transform"
      >
        {text}
      </h2>
    </Link>
  );
};
