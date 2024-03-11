import { FC } from "react";
import Hero from "../../Library/Heros/hero/Hero";
import EventDescription, {
  EventDescriptionProps,
} from "../../Library/event-description/EventDescription";
import { EventParagraphs } from "../../Library/paragraphs/Paragraphs";

type EventPageProps = {
  title: string;
  date: string;
  image: string;
} & EventDescriptionProps;

const EventPage: FC<EventPageProps> = ({
  title,
  date,
  image,
  descriptionDescription,
  horizontalTermLineData,
  listDescriptionData,
}) => {
  return (
    <article className="event-page">
      <Hero
        title={title}
        date={date}
        image={image}
        cta="Køb billet"
        tag="Arrangement"
      />
      <EventDescription
        descriptionDescription={descriptionDescription}
        horizontalTermLineData={horizontalTermLineData}
        listDescriptionData={listDescriptionData}
      />
      <EventParagraphs />
    </article>
  );
};

export default EventPage;
