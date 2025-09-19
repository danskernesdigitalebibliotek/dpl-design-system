import { clsx } from "clsx";
import { ReactNode } from "react";
import { ReactComponent as ArrowSmallRight } from "../Arrows/icon-arrow-ui/icon-arrow-ui-small-right.svg";
import Tag from "../tag/Tag";
import MediaContainer from "../media-container/MediaContainer";
import ContentListItemStatus, {
  ContentListItemStatuses,
} from "../content-list-item-status/ContentListItemStatus";

export type ContentListItemProps = {
  eventSeriesId?: string;
  image?: ReactNode;
  placeholderText?: string;
  tagText: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  price: string;
  href: string;
  isStacked?: boolean;
  status?: ContentListItemStatuses;
};

export const ContentListItem: React.FC<ContentListItemProps> = ({
  image,
  placeholderText,
  tagText,
  title,
  description,
  date,
  time,
  location,
  price,
  href,
  status,
}) => {
  // Hardcoded placeholders for datetime
  // These are calculated in the corresponding template in the CMS
  const placeholderDateTime = "2023-03-10T15:00"; // ISO format date and time

  return (
    <a
      href={href}
      className={clsx(
        "content-list-item arrow__hover--right-small",
        status && "content-list-item--status-parent",
      )}
    >
      {status && <ContentListItemStatus status={status} />}
      <div className="content-list-item__image-container">
        <MediaContainer media={image} placeholderText={placeholderText} />
      </div>
      <div className="content-list-item__content">
        {tagText && (
          <Tag hasBackground className="content-list-item__tag">
            {tagText}
          </Tag>
        )}
        <div className="content-list-item__date">{date}</div>
        <h2 className="content-list-item__title">{title}</h2>
        <div className="content-list-item__description">{description}</div>
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
