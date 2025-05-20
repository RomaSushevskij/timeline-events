export type TimelineEvent = {
  id: string;
  description: string;
  date: string;
};

export type TimeSegment = {
  id: string;
  title: string;
  events: TimelineEvent[];
};
