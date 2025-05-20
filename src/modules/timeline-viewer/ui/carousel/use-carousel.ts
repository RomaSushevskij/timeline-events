import { useRef, useState } from "react";

import { TCarouselMethods } from "./carousel";

export const useCarousel = () => {
  const carouselRef = useRef<TCarouselMethods | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const moveToNextSegment = () => {
    carouselRef.current?.moveToNextSegment();
  };

  const moveToPrevSegment = () => {
    carouselRef.current?.moveToPrevSegment();
  };

  return { moveToNextSegment, moveToPrevSegment, carouselRef, activeIndex, setActiveIndex };
};
