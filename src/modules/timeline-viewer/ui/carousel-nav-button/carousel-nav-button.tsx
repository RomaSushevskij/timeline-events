import clsx from "clsx";
import ArrowLeft from "@/shared/assets/icons/arrow-left.svg";

import s from "./carousel-nav-button.module.scss";

export const CarouselNavButton = ({
  variant = "prev",
  className,
  onClick,
  disabled,
}: {
  variant?: "prev" | "next";
  className?: string;
  onClick: () => void;
  disabled?: boolean;
}) => {
  return (
    <button
      className={clsx(s.root, className, { [s.disabled]: disabled })}
      onClick={onClick}
      disabled={disabled}
    >
      <ArrowLeft className={clsx(s.icon, s[variant])} />
    </button>
  );
};
