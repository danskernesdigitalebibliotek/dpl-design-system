import { FC } from "react";
import EventDescription, {
  EventDescriptionProps,
} from "../../Library/event-description/EventDescription";
import { EventParagraphs } from "../../Library/paragraphs/Paragraphs";
import {
  Event as Hero,
  EventArgs as HeroArgs,
} from "../../Library/hero/Hero.stories";

type EventPageProps = EventDescriptionProps;

const EventPage: FC<EventPageProps> = ({
  description,
  horizontalTermLineData,
}) => {
  return (
    <article className="event-page">
      <Hero {...HeroArgs} />

      <EventDescription
        description={description}
        horizontalTermLineData={horizontalTermLineData}
      />

      <EventParagraphs />
    </article>
  );
};

export default EventPage;
