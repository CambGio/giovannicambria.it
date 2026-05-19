import type { CSSProperties } from "react";

type WordmarkProps = {
  size?: number;
  className?: string;
  color?: string;
};

export function Wordmark({ size = 22, className, color }: WordmarkProps) {
  const style: CSSProperties = {
    fontFamily: "var(--font-serif), Georgia, serif",
    fontSize: size,
    fontWeight: 500,
    letterSpacing: "-0.015em",
    lineHeight: 1,
    color: color ?? "currentColor",
  };
  return (
    <span className={className} style={style}>
      Giovanni Cambria
    </span>
  );
}

type MonogramProps = {
  size?: number;
  className?: string;
  color?: string;
};

export function Monogram({ size = 40, className, color }: MonogramProps) {
  const fill = color ?? "currentColor";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 96 96"
      width={size}
      height={size}
      className={className}
      aria-label="Giovanni Cambria"
      role="img"
    >
      <text
        x="22"
        y="74"
        fontFamily="var(--font-serif), Georgia, serif"
        fontSize="76"
        fontWeight={500}
        fill={fill}
        letterSpacing="-1.5"
      >
        C
      </text>
      <rect x="70" y="65" width="7.5" height="7.5" fill={fill} />
    </svg>
  );
}
