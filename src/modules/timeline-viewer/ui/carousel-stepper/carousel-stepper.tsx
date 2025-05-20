import { UiTypography } from "@/shared/ui/ui-typography";

import { CarouselNavButton } from "../carousel-nav-button/carousel-nav-button";
import s from "./carousel-stepper.module.scss";

export const CarouselStepper = ({
  currentIndex,
  itemsCount,
  onNextBtnClick,
  onPrevBtnClick,
}: {
  currentIndex: number;
  itemsCount: number;
  onNextBtnClick: () => void;
  onPrevBtnClick: () => void;
}) => {
  const formattedCurrentIndex = String(currentIndex).padStart(2, "0");
  const formattedItemsCount = String(itemsCount).padStart(2, "0");

  return (
    <div className={s.root}>
      <UiTypography
        variant={"body2"}
      >{`${formattedCurrentIndex}/${formattedItemsCount}`}</UiTypography>
      <div className={s.controls}>
        <CarouselNavButton
          variant={"prev"}
          onClick={onPrevBtnClick}
          disabled={currentIndex === 1}
        />
        <CarouselNavButton
          variant={"next"}
          onClick={onNextBtnClick}
          disabled={currentIndex === itemsCount}
        />
      </div>
    </div>
  );
};
