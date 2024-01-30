import { FC } from "react";
import HorizontalTermLine, {
  HorizontalTermLineProps,
  generateId,
} from "../horizontal-term-line/HorizontalTermLine";
import ListDescription, {
  ListData,
} from "../Lists/list-description/ListDescription";

export type EventDescriptionProps = {
  listDescriptionData: ListData;
  horizontalTermLineData: HorizontalTermLineProps[];
  descriptionDescription: string;
};

const EventDescription: FC<EventDescriptionProps> = ({
  descriptionDescription,
  horizontalTermLineData,
  listDescriptionData,
}) => {
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
      <ListDescription
        className="event-description__info list-description--event"
        data={listDescriptionData}
      />
    </section>
  );
};

export default EventDescription;
