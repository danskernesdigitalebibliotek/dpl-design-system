import { FC, ReactNode } from "react";
import Hero from "../../Library/Heros/hero/Hero";
import EventDescription, {
  EventDescriptionProps,
} from "../../Library/event-description/EventDescription";
import { EventParagraphs } from "../../Library/paragraphs/Paragraphs";

type EventPageProps = {
  title: string;
  date: string;
  placeholderText?: string;
  image?: ReactNode;
} & EventDescriptionProps;

const EventPage: FC<EventPageProps> = ({
  title,
  date,
  placeholderText,
  image,
  descriptionDescription,
  horizontalTermLineData,
  listDescriptionData,
}) => {
  const { price } = listDescriptionData;
  const priceContent = price?.tickets ? (
    <>
      {price.tickets.map((ticket, index) => (
        <div
          className="ticket-category"
          key={index}
          data-ticket-label={ticket.label}
          data-ticket-price={ticket.price}
        >
          {ticket.label}: {ticket.price}
        </div>
      ))}
    </>
  ) : null;

  return (
    <article className="event-page">
      <header className="border-bottom">
        <Hero
          title={title}
          date={date}
          image={image}
          placeholderText={placeholderText}
          cta="Køb billet"
          tag="Arrangement"
          price={priceContent}
        />
      </header>

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
