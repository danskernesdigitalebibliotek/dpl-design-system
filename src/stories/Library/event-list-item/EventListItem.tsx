import { ReactComponent as ArrowSmallRight } from "../Arrows/icon-arrow-ui/icon-arrow-ui-small-right.svg";
import { Tag } from "../tag/Tag";

export type EventListItemProps = {
  image: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  price: number;
  href: string;
};

export const EventListItem = ({
  image,
  title,
  description,
  date,
  time,
  location,
  price,
  href,
}: EventListItemProps) => {
  return (
    <a href={href} className="event-list-item arrow__hover--right-small">
      <div className="event-list-item__image-container">
        <img src={image} alt={title} className="event-list-item__image" />
      </div>
      <div className="event-list-item__content">
        <Tag hasBackground className="event-list-item__tag">
          foredrag
        </Tag>
        <p className="event-list-item__date">{date}</p>
        <h3 className="event-list-item__title">{title}</h3>
        <p className="event-list-item__description">{description}</p>
        <p className="event-list-item__location">{location}</p>
        <div className="event-list-item__schedule">
          <time className="event-list-item__time">{time}</time>
          <p className="event-list-item__pricing">{price} KR</p>
        </div>
      </div>
      <ArrowSmallRight />
    </a>
  );
};
