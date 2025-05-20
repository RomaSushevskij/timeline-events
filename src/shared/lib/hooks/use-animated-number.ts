import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export function useAnimatedNumber(
  target: number,
  options?: { durationPerUnit?: number; minDuration?: number },
) {
  const { durationPerUnit = 0.05, minDuration = 0.2 } = options || {};

  const [animatedValue, setAnimatedValue] = useState(target);
  const obj = useRef({ val: target });
  const prev = useRef(target);

  useEffect(() => {
    const diff = Math.abs(target - prev.current);
    const duration = Math.max(diff * durationPerUnit, minDuration);

    gsap.to(obj.current, {
      val: target,
      duration,
      ease: "none",
      roundProps: "val",
      onUpdate: () => {
        setAnimatedValue(Math.round(obj.current.val));
      },
    });

    prev.current = target;
  }, [target, durationPerUnit, minDuration]);

  return animatedValue;
}
