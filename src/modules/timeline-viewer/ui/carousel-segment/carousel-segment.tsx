import { DetailedHTMLProps, HTMLAttributes, useEffect, useRef } from "react";
import clsx from "clsx";
import { gsap } from "gsap";

import { UiTypography } from "@/shared/ui/ui-typography";

import { TimeSegment } from "../../model/types";
import s from "./carousel-segment.module.scss";

export const CarouselSegment = ({
  children,
  className,
  isActive,
  data,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  isActive: boolean;
  data: TimeSegment;
}) => {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!titleRef.current) return;

    gsap.killTweensOf(titleRef.current);

    if (isActive) {
      gsap.to(titleRef.current, { opacity: 1, display: "block", delay: 0.8 });
    } else {
      gsap.to(titleRef.current, { opacity: 0, display: "none" });
    }
  }, [isActive]);

  return (
    <div className={s.root}>
      <div className={clsx(s.back_circle, className, { [s.active]: isActive })} {...props}>
        <div className={s.circle}>
          <UiTypography className={s.inner}>{children}</UiTypography>
        </div>
        <UiTypography weight={"700"} className={s.title} ref={titleRef}>
          {data.title}
        </UiTypography>
      </div>
    </div>
  );
};
