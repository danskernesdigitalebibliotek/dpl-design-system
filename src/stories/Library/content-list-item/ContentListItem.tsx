import { ReactComponent as ArrowSmallRight } from "../Arrows/icon-arrow-ui/icon-arrow-ui-small-right.svg";
import Tag from "../tag/Tag";

export type ContentListItemProps = {
  eventSeriesId?: string;
  image: string;
  tagText: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  price: string;
  href: string;
  isStacked?: boolean;
};

export const ContentListItem: React.FC<ContentListItemProps> = ({
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
  const placeholderDateTime = "2023-03-10T15:00"; // ISO format date and time

  return (
    <a href={href} className="content-list-item arrow__hover--right-small">
      <div className="content-list-item__image-container">
        <img src={image} alt={title} className="content-list-item__image" />
      </div>
      <div className="content-list-item__content">
        {tagText && (
          <Tag hasBackground className="content-list-item__tag">
            {tagText}
          </Tag>
        )}
        <div className="content-list-item__date">{date}</div>
        <h2 className="content-list-item__title">{title}</h2>
        <div className="content-list-item__description">
          <p>{description}</p>
        </div>
        <div className="content-list-item__content-bottom-container">
          <p className="content-list-item__location">{location}</p>
        </div>
        <div className="content-list-item__content-right-container">
          <time
            className="content-list-item__time"
            dateTime={placeholderDateTime}
          >
            {time}
          </time>
          <p className="content-list-item__pricing">{price}</p>
        </div>
      </div>
      <ArrowSmallRight />
    </a>
  );
};
