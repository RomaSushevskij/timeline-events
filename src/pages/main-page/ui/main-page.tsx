import { TimelineViewer } from "@/modules/timeline-viewer";

import s from "./main-page.module.scss";
import { mockSegments } from "../api/data";

export const MainPage = () => {
  return (
    <div className={s.root}>
      <TimelineViewer data={mockSegments} title="Исторические даты" />
    </div>
  );
};
