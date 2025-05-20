import { ReactNode } from "react";
import { UiTypography } from "@/shared/ui/ui-typography";

import s from "./layout.module.scss";

export const Layout = ({
  carousel,
  carouselStepper,
  title,
  yearsRange,
}: {
  title: ReactNode;
  carousel: ReactNode;
  carouselStepper: ReactNode;
  yearsRange: ReactNode;
}) => {
  const titleElement =
    typeof title === "object" ? title : <UiTypography variant={"h1"}>{title}</UiTypography>;

  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.title}>{titleElement}</div>
        <div className={s.carousel}>{carousel}</div>
        <div className={s.stepper}>{carouselStepper}</div>
        <div className={s.years_range}>{yearsRange}</div>
      </div>
    </div>
  );
};
