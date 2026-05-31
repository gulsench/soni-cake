import { useRef, useEffect, useState, useMemo, useId, useCallback } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import "./CurvedLoop.css";

type CurvedLoopProps = {
  marqueeText?: string;
  speed?: number;
  className?: string;
  curveAmount?: number;
  direction?: "left" | "right";
  interactive?: boolean;
  icon?: "cupcake" | "emoji";
  emoji?: string;
  /** Gap between repeats, as a fraction of the label width (e.g. 0.35). */
  repeatGap?: number;
};

const PATH_VIEW_WIDTH = 1640;

function CupcakeSymbol({ id }: { id: string }) {
  return (
    <symbol id={id} viewBox="0 0 24 24" overflow="visible">
      <path
        d="M8.5 20h7M7.5 20l1.6-6.5h6.8L17.5 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 13.5c0-2.2 1.35-3.8 3-3.8s3 1.6 3 3.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M10.2 12.8c.7-.9 1.7-1.3 1.8-1.3s1.1.4 1.8 1.3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path d="M12 8.5V7" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="12" cy="6.2" r="1.1" fill="currentColor" stroke="none" />
    </symbol>
  );
}

function measureNbspWidth(measureEl: SVGTextElement, count: number) {
  measureEl.textContent = "\u00A0".repeat(count);
  return measureEl.getComputedTextLength();
}

function buildSpacer(measureEl: SVGTextElement, targetWidth: number) {
  if (targetWidth <= 0) return { spacer: "", width: 0 };

  let low = 1;
  let high = 64;

  while (measureNbspWidth(measureEl, high) < targetWidth && high < 256) {
    high *= 2;
  }

  while (low < high) {
    const mid = Math.ceil((low + high) / 2);
    if (measureNbspWidth(measureEl, mid) < targetWidth) {
      low = mid;
    } else {
      high = mid - 1;
    }
  }

  const count = Math.max(1, low + 1);
  const spacer = "\u00A0".repeat(count);
  measureEl.textContent = spacer;
  return { spacer, width: measureEl.getComputedTextLength() };
}

export default function CurvedLoop({
  marqueeText = "",
  speed = 2,
  className,
  curveAmount = 400,
  direction = "left",
  interactive = true,
  icon,
  emoji = "🍰",
  repeatGap = 0,
}: CurvedLoopProps) {
  const label = useMemo(() => marqueeText.trimEnd(), [marqueeText]);

  const measureRef = useRef<SVGTextElement>(null);
  const textPathRef = useRef<SVGTextPathElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const iconsRef = useRef<SVGGElement>(null);
  const jacketRef = useRef<HTMLDivElement>(null);
  const [spacing, setSpacing] = useState(0);
  const [iconSize, setIconSize] = useState(0);
  const [segmentText, setSegmentText] = useState("");
  const spacingRef = useRef(0);
  const textLengthRef = useRef(0);
  const spacerWidthRef = useRef(0);
  const iconSizeRef = useRef(0);
  const offsetRef = useRef(0);
  const uid = useId();
  const pathId = `curve-${uid.replace(/:/g, "")}`;
  const iconId = `cupcake-${uid.replace(/:/g, "")}`;
  const pathD = `M-100,52 Q720,${52 + curveAmount} 1540,52`;

  const dragRef = useRef(false);
  const lastXRef = useRef(0);
  const dirRef = useRef(direction);
  const velRef = useRef(0);

  const measureSpacing = useCallback(() => {
    if (!measureRef.current) return;

    measureRef.current.textContent = label;
    const textLen = measureRef.current.getComputedTextLength();
    if (textLen <= 0) return;

    textLengthRef.current = textLen;

    if (!icon || icon === "emoji") {
      iconSizeRef.current = 0;
      setIconSize(0);

      const segmentLabel = icon === "emoji" ? `${label} ${emoji}` : label;
      measureRef.current.textContent = segmentLabel;
      const segmentLen = measureRef.current.getComputedTextLength();
      textLengthRef.current = segmentLen;

      if (repeatGap > 0) {
        const { spacer, width: spacerWidth } = buildSpacer(measureRef.current, segmentLen * repeatGap);
        spacerWidthRef.current = spacerWidth;
        spacingRef.current = segmentLen + spacerWidth;
        setSegmentText(`${segmentLabel}${spacer}`);
        setSpacing(segmentLen + spacerWidth);
        return;
      }

      spacerWidthRef.current = 0;
      spacingRef.current = segmentLen;
      setSegmentText(`${segmentLabel}\u00A0`);
      setSpacing(segmentLen);
      return;
    }

    const nextIconSize = textLen * 0.11;
    const { spacer, width: spacerWidth } = buildSpacer(measureRef.current, nextIconSize + textLen * 0.1);
    const period = textLen + spacerWidth;

    iconSizeRef.current = nextIconSize;
    spacerWidthRef.current = spacerWidth;
    spacingRef.current = period;
    setIconSize(nextIconSize);
    setSegmentText(`${label}\u00A0${spacer}`);
    setSpacing(period);
  }, [emoji, icon, label, repeatGap]);

  const totalText = useMemo(() => {
    if (!spacing || !segmentText) return segmentText;
    const jacketWidth = jacketRef.current?.clientWidth ?? 400;
    const minLength = PATH_VIEW_WIDTH * 2 + jacketWidth * 2;
    const count = Math.ceil(minLength / spacing) + 4;
    return Array(count).fill(segmentText).join("");
  }, [segmentText, spacing]);

  const iconCount = useMemo(() => {
    if (!icon || icon === "emoji" || !spacing) return 0;
    const jacketWidth = jacketRef.current?.clientWidth ?? 400;
    const minLength = PATH_VIEW_WIDTH * 2 + jacketWidth * 2;
    return Math.ceil(minLength / spacing) + 6;
  }, [icon, spacing]);

  const ready = spacing > 0;

  const wrapOffset = useCallback((value: number) => {
    const period = spacingRef.current;
    if (period <= 0) return value;
    let next = value;
    while (next <= -period) next += period;
    while (next > 0) next -= period;
    return next;
  }, []);

  const updateIcons = useCallback(() => {
    const path = pathRef.current;
    const icons = iconsRef.current;
    if (!icon || icon === "emoji" || !path || !icons) return;

    const pathLen = path.getTotalLength();
    if (pathLen <= 0) return;

    const period = spacingRef.current;
    const textLen = textLengthRef.current;
    const spacerWidth = spacerWidthRef.current;
    const size = iconSizeRef.current;
    const offset = offsetRef.current;
    const iconCenter = textLen + spacerWidth / 2;

    for (let i = 0; i < icons.children.length; i++) {
      const dist = offset + i * period + iconCenter;
      const normalized = ((dist % pathLen) + pathLen) % pathLen;
      const pt = path.getPointAtLength(normalized);
      const pt2 = path.getPointAtLength(Math.min(normalized + 1, pathLen));
      const angle = (Math.atan2(pt2.y - pt.y, pt2.x - pt.x) * 180) / Math.PI;
      const node = icons.children[i] as SVGGraphicsElement;
      node.setAttribute(
        "transform",
        `translate(${pt.x},${pt.y}) rotate(${angle}) translate(${-size / 2},${-size * 0.55})`,
      );
    }
  }, [icon]);

  const applyOffset = useCallback(() => {
    textPathRef.current?.setAttribute("startOffset", `${offsetRef.current}px`);
    updateIcons();
  }, [updateIcons]);

  useEffect(() => {
    measureSpacing();
  }, [label, className, measureSpacing]);

  useEffect(() => {
    if (!jacketRef.current) return;
    const observer = new ResizeObserver(() => measureSpacing());
    observer.observe(jacketRef.current);
    return () => observer.disconnect();
  }, [measureSpacing]);

  useEffect(() => {
    if (!spacing) return;
    offsetRef.current = -spacing;
    applyOffset();
  }, [spacing, applyOffset]);

  useEffect(() => {
    if (!spacing || !ready) return;
    let frame = 0;
    const step = () => {
      if (!dragRef.current && textPathRef.current) {
        const delta = dirRef.current === "right" ? speed : -speed;
        offsetRef.current = wrapOffset(offsetRef.current + delta);
        applyOffset();
      }
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [spacing, speed, ready, wrapOffset, applyOffset]);

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!interactive) return;
    dragRef.current = true;
    lastXRef.current = e.clientX;
    velRef.current = 0;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!interactive || !dragRef.current || !textPathRef.current) return;
    const dx = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;
    velRef.current = dx;

    offsetRef.current = wrapOffset(offsetRef.current + dx);
    applyOffset();
  };

  const endDrag = () => {
    if (!interactive) return;
    dragRef.current = false;
    dirRef.current = velRef.current > 0 ? "right" : "left";
  };

  const cursorStyle = interactive ? (dragRef.current ? "grabbing" : "grab") : "auto";

  return (
    <div
      ref={jacketRef}
      className="curved-loop-jacket"
      style={{ visibility: ready ? "visible" : "hidden", cursor: cursorStyle }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
    >
      <svg className={`curved-loop-svg ${className ?? ""}`} viewBox="0 0 1440 120" aria-hidden="true">
        <text ref={measureRef} xmlSpace="preserve" className={className} style={{ visibility: "hidden", opacity: 0, pointerEvents: "none" }}>
          {label}
        </text>
        <defs>
          <path ref={pathRef} id={pathId} d={pathD} fill="none" stroke="transparent" />
          {icon === "cupcake" && <CupcakeSymbol id={iconId} />}
        </defs>
        {ready && (
          <>
            <text fontWeight="bold" xmlSpace="preserve" className={className}>
              <textPath ref={textPathRef} href={`#${pathId}`} startOffset={`${offsetRef.current}px`} xmlSpace="preserve">
                {totalText}
              </textPath>
            </text>
            {(icon === "cupcake") && iconSize > 0 && (
              <g ref={iconsRef} className="curved-loop-icons">
                {Array.from({ length: iconCount }).map((_, i) => (
                  <g key={i}>
                    <use href={`#${iconId}`} width={iconSize} height={iconSize} />
                  </g>
                ))}
              </g>
            )}
          </>
        )}
      </svg>
    </div>
  );
}
