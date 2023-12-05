import { FC } from "react";
import EventHeader from "../../Library/event-header/EventHeader";

type EventPageProps = {
  title: string;
  date: string;
  image: string;
};

const EventPage: FC<EventPageProps> = ({ title, date, image }) => {
  return (
    <article className="event-page">
      <EventHeader title={title} date={date} image={image} />
    </article>
  );
};

export default EventPage;
