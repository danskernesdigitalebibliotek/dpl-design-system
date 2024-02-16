import { ReactComponent as ArrowSmallRight } from "../Arrows/icon-arrow-ui/icon-arrow-ui-small-right.svg";
import Tag from "../tag/Tag";

export type EventListItemScheduleType = {
  date: string;
  time: string;
};

export type EventListItemProps = {
  image: string;
  tagText: string;
  title: string;
  description: string;
  schedule: EventListItemScheduleType[];
  location: string;
  price: string;
  href: string;
};

export const EventListItem: React.FC<EventListItemProps> = ({
  image,
  tagText,
  title,
  description,
  schedule,
  location,
  price,
  href,
}) => {
  // Hardcoded placeholders for datetime
  // These are calculated in the corresponding template in the CMS
  const placeholderDateTime = "2023-03-10T15:00"; // ISO format date and time

  return (
    <a href={href} className="event-list-item arrow__hover--right-small">
      <div className="event-list-item__image-container">
        <img src={image} alt={title} className="event-list-item__image" />
      </div>
      <div className="event-list-item__content">
        {tagText && (
          <Tag hasBackground className="event-list-item__tag">
            {tagText}
          </Tag>
        )}
        <div className="event-list-item__date">{schedule[0].date}</div>
        <h2 className="event-list-item__title">{title}</h2>
        <div className="event-list-item__description">
          <p>{description}</p>
        </div>
        <div className="event-list-item__location-wrapper">
          <p className="event-list-item__location">{location}</p>
        </div>
        <div className="event-list-item__schedule">
          <time
            className="event-list-item__time"
            dateTime={placeholderDateTime}
          >
            {schedule[0].time}
          </time>
          <p className="event-list-item__pricing">{price}</p>
        </div>
      </div>
      <ArrowSmallRight />
    </a>
  );
};
