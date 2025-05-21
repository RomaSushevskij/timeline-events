import { ReactNode } from "react";
import clsx from "clsx";

import { UiTypography } from "@/shared/ui/ui-typography";

import s from "./layout.module.scss";
import { useScreenSize } from "@/shared/lib/hooks/use-screen-size";

export const Layout = ({
  carousel,
  carouselStepper,
  title,
  yearsRange,
  swiper,
  segmentsPagination,
}: {
  title: ReactNode;
  carousel: ReactNode;
  carouselStepper: ReactNode;
  yearsRange: ReactNode;
  swiper: ReactNode;
  segmentsPagination: ReactNode;
}) => {
  const { width } = useScreenSize();

  const titleElement =
    typeof title === "object" ? title : <UiTypography variant={"h1"}>{title}</UiTypography>;

  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.title}>{titleElement}</div>
        <div className={clsx(s.carousel, { [s.hidden]: width <= 1023 })}>{carousel}</div>
        <div className={s.stepper_container}>
          <div>{carouselStepper}</div>
          <div className={s.segments_pagination}>{segmentsPagination}</div>
        </div>
        <div className={s.years_range}>{yearsRange}</div>
        <div className={s.swiper}>{swiper}</div>
      </div>
    </div>
  );
};
