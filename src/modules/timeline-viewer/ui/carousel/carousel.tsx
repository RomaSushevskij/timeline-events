import React, { Ref, useEffect, useImperativeHandle, useRef, useState } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

import { TimeSegment } from "../../model/types";
import s from "./carousel.module.scss";
import { CarouselSegment } from "../carousel-segment/carousel-segment";

gsap.registerPlugin(MotionPathPlugin);

const duration = 0.8;

export type TCarouselMethods = {
  moveToNextSegment: () => void;
  moveToPrevSegment: () => void;
};

export const Carousel = ({
  ref,
  data,
  onChangeActiveIndex,
}: {
  data: TimeSegment[];
  ref?: Ref<TCarouselMethods>;
  onChangeActiveIndex?: (index: number) => void;
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const svgRef = useRef<SVGSVGElement>(null);
  const tracker = useRef({ item: 0 });
  const tl = useRef<gsap.core.Timeline>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const itemsCount = data.length;
  const itemsOffset = 90 / 360 - 360 / itemsCount / 2 / 360;

  useEffect(() => {
    const holder = svgRef.current?.querySelector<SVGCircleElement>("#holder");
    const circlePath = MotionPathPlugin.convertToPath(holder, false)[0];
    circlePath.id = "circlePath";
    svgRef.current?.prepend(circlePath);

    const wrapTracker = gsap.utils.wrap(0, itemsCount);

    gsap.set(itemsRef.current, {
      motionPath: {
        path: circlePath,
        align: circlePath,
        alignOrigin: [0.5, 0.5],
        end: (i: number) => (i / itemsCount - itemsOffset) % 1,
      },
    });

    tl.current = gsap.timeline({ paused: true, reversed: true });

    tl.current.to(wrapperRef.current, {
      rotation: 360,
      transformOrigin: "center",
      duration,
      ease: "none",
    });

    tl.current.to(
      itemsRef.current,
      {
        rotation: "-=360",
        transformOrigin: "center",
        duration,
        ease: "none",
      },
      0,
    );

    tl.current.to(
      tracker.current,
      {
        item: itemsCount,
        duration,
        ease: "none",
        modifiers: {
          item: (value) => wrapTracker(itemsCount - Math.round(Number(value))),
        },
      },
      0,
    );
  }, [itemsCount, itemsOffset]);

  const moveWheel = (amount: number) => {
    const itemStep = 1 / itemsCount;
    const snap = gsap.utils.snap(itemStep);
    const wrapProgress = gsap.utils.wrap(0, 1);

    const currentProgress = tl.current!.progress();
    tl.current!.progress(wrapProgress(snap(currentProgress + amount)));
    const newIndex = tracker.current.item;
    tl.current!.progress(currentProgress);

    setActiveIndex(newIndex);
    onChangeActiveIndex?.(newIndex);

    gsap.to(tl.current!, {
      progress: snap(currentProgress + amount),
      duration,
      modifiers: {
        progress: wrapProgress,
      },
    });
  };

  const handleSegmentClick = (index: number) => {
    const current = tracker.current.item;
    if (index === current) return;

    const itemStep = 1 / itemsCount;
    const diff = current - index;
    const absDiff = Math.abs(diff);

    if (absDiff < itemsCount / 2) {
      moveWheel(diff * itemStep);
    } else {
      const amt = itemsCount - absDiff;
      moveWheel((current > index ? -amt : amt) * itemStep);
    }
  };

  const moveToNextSegment = () => {
    handleSegmentClick(activeIndex + 1);
  };

  const moveToPrevSegment = () => {
    handleSegmentClick(activeIndex - 1);
  };

  useImperativeHandle(ref, () => ({
    moveToNextSegment,
    moveToPrevSegment,
  }));

  return (
    <div className={s.container}>
      <div className={s.wrapper} ref={wrapperRef}>
        {data.map((item, index) => (
          <CarouselSegment
            key={index}
            ref={(el) => {
              if (el) {
                itemsRef.current[index] = el;
              }
            }}
            data={item}
            isActive={activeIndex === index}
            onClick={() => handleSegmentClick(index)}
          >
            {index + 1}
          </CarouselSegment>
        ))}

        <svg ref={svgRef} className={s.circle} viewBox="0 0 300 300">
          <circle id="holder" cx="151" cy="151" r="150" />
        </svg>
      </div>
    </div>
  );
};
