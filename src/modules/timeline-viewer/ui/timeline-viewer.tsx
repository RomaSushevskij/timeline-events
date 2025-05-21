import { ReactNode, useMemo } from "react";

import { TimeSegment } from "../model/types";
import { Layout } from "./layout/layout";

import { CarouselStepper } from "./carousel-stepper/carousel-stepper";
import { useCarousel } from "./carousel/use-carousel";
import { YearsRange } from "./years-range/years-range";
import { EventsSwiper } from "./events-swiper/events-swiper";
import { Carousel } from "./carousel/carousel";
import { SegmentsPagination } from "./segments-pagination/segments-pagination";

export const TimelineViewer = ({ data, title }: { title?: ReactNode; data: TimeSegment[] }) => {
  const {
    carouselRef,
    moveToPrevSegment,
    moveToNextSegment,
    activeIndex: carouselActiveIndex,
    setActiveIndex,
  } = useCarousel();

  const { minYear, maxYear } = useMemo(() => {
    const activeSegmentEvents = data[carouselActiveIndex].events;

    const years = activeSegmentEvents.map((event) => new Date(event.date).getFullYear());
    const minYear = Math.min(...years);
    const maxYear = Math.max(...years);

    return { minYear, maxYear };
  }, [data, carouselActiveIndex]);

  return (
    <Layout
      title={title}
      carousel={
        <Carousel
          data={data}
          ref={carouselRef}
          activeIndex={carouselActiveIndex}
          onChangeActiveIndex={setActiveIndex}
        />
      }
      carouselStepper={
        <CarouselStepper
          currentIndex={carouselActiveIndex + 1}
          itemsCount={data.length}
          onNextBtnClick={moveToNextSegment}
          onPrevBtnClick={moveToPrevSegment}
        />
      }
      yearsRange={<YearsRange minYear={minYear} maxYear={maxYear} />}
      swiper={
        <EventsSwiper
          data={data[carouselActiveIndex].events}
          segmentTitle={data[carouselActiveIndex].title}
        />
      }
      segmentsPagination={
        <SegmentsPagination
          total={data.length}
          activeIndex={carouselActiveIndex}
          onClick={setActiveIndex}
        />
      }
    />
  );
};
