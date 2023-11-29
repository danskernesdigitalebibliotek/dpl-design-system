import { FC } from "react";
import EventHeader from "../../Library/event-header/EventHeader";

type EventPageProps = {
  title: string;
  date: string;
};

const EventPage: FC<EventPageProps> = ({ title, date }) => {
  return (
    <article className="event-page">
      <EventHeader title={title} date={date} />
    </article>
  );
};

export default EventPage;
