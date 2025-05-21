import { useRef, useState } from "react";
import { SwiperRef } from "swiper/swiper-react";
import type { Swiper as SwiperClass } from "swiper/types";

export const useEventsSwiper = () => {
  const swiperRef = useRef<SwiperRef | null>(null);
  const [activeIndex, setActiveIndex] = useState(swiperRef.current?.swiper.realIndex);

  const slideTo = (index: number) => {
    swiperRef.current?.swiper.slideTo(index);
  };

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveIndex(swiper.realIndex);
  };

  return { swiperRef, slideTo, activeIndex, handleSlideChange };
};
