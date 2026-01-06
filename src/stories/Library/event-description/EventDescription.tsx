import { FC } from "react";
import HorizontalTermLine, {
  HorizontalTermLineProps,
  generateId,
} from "../horizontal-term-line/HorizontalTermLine";

export type TicketCategory = {
  label: string;
  price: string;
};

export type EventDescriptionProps = {
  horizontalTermLineData: HorizontalTermLineProps[];
  description: string;
};

const EventDescription: FC<EventDescriptionProps> = ({
  description,
  horizontalTermLineData,
}) => {
  return (
    <section className="event-description">
      <div className="event-description__content">
        <p className="event-description__description">{description}</p>

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
    </section>
  );
};

export default EventDescription;
