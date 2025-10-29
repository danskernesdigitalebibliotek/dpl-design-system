import { FC } from "react";
import HorizontalTermLine, {
  HorizontalTermLineProps,
  generateId,
} from "../horizontal-term-line/HorizontalTermLine";
import ListDescription, {
  ListData,
} from "../Lists/list-description/ListDescription";

export type TicketCategory = {
  label: string;
  price: string;
};

export type EventDescriptionData = {
  descriptionItems: ListData;
  price?: {
    tickets: TicketCategory[];
  };
  relationsItems: ListData;
};

export type EventDescriptionProps = {
  listDescriptionData: EventDescriptionData;
  horizontalTermLineData: HorizontalTermLineProps[];
  descriptionDescription: string;
};

const EventDescription: FC<EventDescriptionProps> = ({
  descriptionDescription,
  horizontalTermLineData,
  listDescriptionData,
}) => {
  const { descriptionItems, price, relationsItems } = listDescriptionData;

  return (
    <section className="event-description">
      <div className="event-description__content">
        <p className="event-description__description">
          {descriptionDescription}
        </p>

        <div className="event-description__links">
          {horizontalTermLineData.map((item, index) => (
            <HorizontalTermLine
              {...item}
              collapsible={false}
              key={generateId(index)}
            />
          ))}
        </div>
      </div>
      <div className="event-description__info">
        <div className="event-description__card">
          <ListDescription
            className="list-description--event"
            data={descriptionItems}
          />

          {price && price.tickets.length > 0 && (
            <div className="event-description__price">
              {price.tickets.map((ticket, index) => (
                <div className="ticket-category" key={generateId(index)}>
                  {ticket.label}: {ticket.price}
                </div>
              ))}
            </div>
          )}
        </div>

        <ListDescription
          className="list-description--relations"
          data={relationsItems}
        />
      </div>
    </section>
  );
};

export default EventDescription;
