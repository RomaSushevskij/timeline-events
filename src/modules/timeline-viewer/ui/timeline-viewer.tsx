import { Layout } from "./layout/layout";
import { Carousel } from "@/modules/timeline-viewer";
import { TimelineEvent, TimeSegment } from "@/modules/timeline-viewer/model/types";
import { ReactNode } from "react";
import { CarouselStepper } from "@/modules/timeline-viewer/ui/carousel-stepper/carousel-stepper";
import { useCarousel } from "@/modules/timeline-viewer/ui/carousel/use-carousel";
import { YearsRange } from "@/modules/timeline-viewer/ui/years-range/years-range";

export const TimelineViewer = ({ data, title }: { title?: ReactNode; data: TimeSegment[] }) => {
  const { carouselRef, moveToPrevSegment, moveToNextSegment, activeIndex, setActiveIndex } =
    useCarousel();

  const activeSegmentEvents = data[activeIndex].events;

  function getYearRange(events: TimelineEvent[]): { minYear: number; maxYear: number } {
    const years = events.map((event) => new Date(event.date).getFullYear());
    const minYear = Math.min(...years);
    const maxYear = Math.max(...years);

    return { minYear, maxYear };
  }

  const { minYear, maxYear } = getYearRange(activeSegmentEvents);

  return (
    <Layout
      title={title}
      carousel={<Carousel data={data} ref={carouselRef} onChangeActiveIndex={setActiveIndex} />}
      carouselStepper={
        <CarouselStepper
          currentIndex={activeIndex + 1}
          itemsCount={data.length}
          onNextBtnClick={moveToNextSegment}
          onPrevBtnClick={moveToPrevSegment}
        />
      }
      yearsRange={<YearsRange minYear={minYear} maxYear={maxYear} />}
    />
  );
};
