import s from "./main-page.module.scss";
import { TimelineViewer } from "@/modules/timeline-viewer";
import { mockSegments } from "@/modules/timeline-viewer/model/data";

export const MainPage = () => {
  return (
    <div className={s.root}>
      <TimelineViewer data={mockSegments} title="Исторические даты" />
    </div>
  );
};
