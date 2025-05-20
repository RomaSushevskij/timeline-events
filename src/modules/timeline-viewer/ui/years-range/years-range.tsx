import clsx from "clsx";

import { UiTypography } from "@/shared/ui/ui-typography";
import { useAnimatedNumber } from "@/shared/lib/hooks/use-animated-number";

import s from "./years-range.module.scss";

export const YearsRange = ({
  className,
  minYear,
  maxYear,
}: {
  className?: string;
  minYear: number;
  maxYear: number;
}) => {
  const animatedMinYear = useAnimatedNumber(minYear);
  const animatedMaxYear = useAnimatedNumber(maxYear);

  return (
    <div className={clsx(s.root, className)}>
      <UiTypography color={"indigo-blue"} className={s.year} weight={"700"}>
        {animatedMinYear}
      </UiTypography>
      <UiTypography color={"pink"} className={s.year} weight={"700"}>
        {animatedMaxYear}
      </UiTypography>
    </div>
  );
};
