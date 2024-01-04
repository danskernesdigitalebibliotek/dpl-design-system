import { ReactComponent as ArrowSmallRight } from "../Arrows/icon-arrow-ui/icon-arrow-ui-small-right.svg";
import { Tag } from "../tag/Tag";

export type EventListItemProps = {
  image: string;
  tagText: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  price: string;
  href: string;
};

export const EventListItem: React.FC<EventListItemProps> = ({
  image,
  tagText,
  title,
  description,
  date,
  time,
  location,
  price,
  href,
}) => {
  // Hardcoded placeholders for datetime
  // These are calculated in the corresponding template in the CMS
  const placeholderDate = "2023-03-10"; // ISO format date
  const placeholderDateTime = "2023-03-10T15:00"; // ISO format date and time

  return (
    <a href={href} className="event-list-item arrow__hover--right-small">
      <div className="event-list-item__image-container">
        <img src={image} alt={title} className="event-list-item__image" />
      </div>
      <div className="event-list-item__content">
        <Tag hasBackground className="event-list-item__tag">
          {tagText}
        </Tag>
        <time className="event-list-item__date" dateTime={placeholderDate}>
          {date}
        </time>
        <h2 className="event-list-item__title">{title}</h2>
        <p className="event-list-item__description">{description}</p>
        <div className="event-list-item__location-wrapper">
          <p className="event-list-item__location">{location}</p>
        </div>
        <div className="event-list-item__schedule">
          <time
            className="event-list-item__time"
            dateTime={placeholderDateTime}
          >
            {time}
          </time>
          <p className="event-list-item__pricing">{price}</p>
        </div>
      </div>
      <ArrowSmallRight />
    </a>
  );
};
