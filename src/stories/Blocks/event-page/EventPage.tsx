import { FC } from "react";
import EventHeader from "../../Library/event-header/EventHeader";
import EventDescription, {
  EventDescriptionProps,
} from "../../Library/event-description/EventDescription";
import { RichTextEvent } from "../../Library/rich-text/RichText";

type EventPageProps = {
  title: string;
  date: string;
  image: string;
} & EventDescriptionProps;

const EventPage: FC<EventPageProps> = ({
  title,
  date,
  image,
  descriptionTitle,
  descriptionDescription,
  horizontalTermLineData,
  listDescriptionData,
}) => {
  return (
    <article className="event-page">
      <EventHeader title={title} date={date} image={image} />
      <EventDescription
        descriptionTitle={descriptionTitle}
        descriptionDescription={descriptionDescription}
        horizontalTermLineData={horizontalTermLineData}
        listDescriptionData={listDescriptionData}
      />
      <RichTextEvent />
    </article>
  );
};

export default EventPage;
