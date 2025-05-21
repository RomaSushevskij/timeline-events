import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import gsap from "gsap";
import clsx from "clsx";

import { UiTypography } from "@/shared/ui/ui-typography";
import ArrowLeftIcon from "@/shared/assets/icons/arrow-left.svg";
import { useScreenSize } from "@/shared/lib/hooks/use-screen-size";

import { TimelineEvent } from "../../model/types";
import s from "./events-swiper.module.scss";

export const EventsSwiper = ({
  data,
  segmentTitle,
}: {
  data: TimelineEvent[];
  segmentTitle: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const didMount = useRef(false);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const [internalData, setInternalData] = useState(data);
  const [internalSegmentTitle, setInternalSegmentTitle] = useState(segmentTitle);

  const { width, screenSize } = useScreenSize();

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      setInternalData(data);
      setInternalSegmentTitle(segmentTitle);

      return;
    }

    if (!containerRef.current) return;

    const tl = gsap.timeline({
      defaults: { duration: 0.4, ease: "power2.out" },
    });

    tl.to(containerRef.current.children, {
      opacity: 0,
      stagger: 0.05,
      onComplete: () => {
        setInternalData(data);
        setInternalSegmentTitle(segmentTitle);
      },
    });
  }, [data, segmentTitle]);

  useLayoutEffect(() => {
    if (!didMount.current || !containerRef.current) return;

    gsap.fromTo(
      containerRef.current.children,
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: "power2.out",
      },
    );
  }, [internalData, internalSegmentTitle]);

  return (
    <div ref={containerRef} className={s.root}>
      {screenSize === "desktop" && (
        <>
          <NavigationButton ref={prevRef} variant={"prev"} className={s.prev} />
          <NavigationButton ref={nextRef} variant={"next"} className={s.next} />
        </>
      )}
      <UiTypography variant={"h2"} as={"h1"} weight={"700"} className={s.segment_title}>
        {internalSegmentTitle}
      </UiTypography>

      <Swiper
        modules={[Navigation]}
        className={s.swiper}
        spaceBetween={80}
        breakpoints={{
          320: {
            navigation: false,
            slidesPerView: 1.75,
            spaceBetween: 25,
          },
          767: { slidesPerView: 2 },
          1024: { spaceBetween: 80 },
          1280: {
            navigation: { prevEl: prevRef.current, nextEl: nextRef.current },
            slidesPerView: (0.8 * width) / 510,
          },
        }}
        onInit={(swiper) => {
          if (swiper.params.navigation && typeof swiper.params.navigation !== "boolean") {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }
        }}
      >
        {internalData.map((event) => (
          <SwiperSlide key={event.id}>
            <SlideContent data={event} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const SlideContent = ({ data }: { data: TimelineEvent }) => {
  return (
    <>
      <UiTypography
        variant={"h2"}
        as={"h1"}
        color={"blue"}
        weight={"700"}
        fontFamily={"secondary"}
        uppercase
        className={s.slide_title}
      >
        {new Date(data.date).getFullYear()}
      </UiTypography>
      <UiTypography>{data.description}</UiTypography>
    </>
  );
};

const NavigationButton = ({
  variant = "prev",
  className,
  ...props
}: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  variant?: "next" | "prev";
}) => {
  return (
    <button className={clsx(s.navigation_btn, className)} {...props}>
      <ArrowLeftIcon className={clsx(s.navigation_icon, s[variant])} />
    </button>
  );
};
