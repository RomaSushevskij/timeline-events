import clsx from "clsx";

import s from "./segments-pagination.module.scss";

export const SegmentsPagination = ({
  total,
  onClick,
  activeIndex,
}: {
  total: number;
  activeIndex: number;
  onClick: (index: number) => void;
}) => {
  return (
    <div className={s.root}>
      {Array.from({ length: total }).map((_, index) => (
        <div key={index} onClick={() => onClick(index)} className={s.bullet}>
          <div className={clsx(s.bullet_point, { [s.active]: index === activeIndex })} />
        </div>
      ))}
    </div>
  );
};
