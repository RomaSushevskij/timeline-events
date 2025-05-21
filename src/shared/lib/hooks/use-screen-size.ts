// import { useEffect, useMemo, useState } from "react";
//
// export type TScreenSizeType = "desktop" | "laptop" | "mobile";
//
// const defineScreenSizeType = (width: number): TScreenSizeType => {
//   if (width <= 767) {
//     return "mobile";
//   }
//
//   if (width < 1024) {
//     return "laptop";
//   }
//
//   return "desktop";
// };
//
// export const useScreenSize = () => {
//   const [{ width, height }, setScreenSize] = useState({
//     width: 0,
//     height: 0,
//   });
//
//   useEffect(() => {
//     if (!window) return;
//
//     setScreenSize({ width: window.innerWidth, height: window.innerHeight });
//
//     const handleResize = () => {
//       setScreenSize({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     };
//
//     window.addEventListener("resize", handleResize);
//
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);
//
//   const screenSize = useMemo(() => defineScreenSizeType(width), [width]);
//
//   return {
//     width,
//     height,
//     screenSize,
//   };
// };

import { useEffect, useMemo, useState } from "react";
import { useThrottle } from "@/shared/lib/hooks/use-throttle"; // путь подставь свой

export type TScreenSizeType = "desktop" | "laptop" | "mobile";

const defineScreenSizeType = (width: number): TScreenSizeType => {
  if (width <= 767) return "mobile";
  if (width < 1024) return "laptop";

  return "desktop";
};

export const useScreenSize = () => {
  const [rawSize, setRawSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  const throttledSize = useThrottle(rawSize, 200);

  useEffect(() => {
    const handleResize = () => {
      setRawSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const screenSize = useMemo(
    () => defineScreenSizeType(throttledSize.width),
    [throttledSize.width],
  );

  return {
    width: throttledSize.width,
    height: throttledSize.height,
    screenSize,
  };
};
