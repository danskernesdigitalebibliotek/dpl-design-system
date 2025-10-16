import { clsx } from "clsx";
import { ReactNode } from "react";
import { ReactComponent as ArrowSmallRight } from "../Arrows/icon-arrow-ui/icon-arrow-ui-small-right.svg";
import Tag from "../tag/Tag";
import MediaContainer from "../media-container/MediaContainer";
import ContentListItemStatus, {
  ContentListItemStatuses,
} from "../content-list-item-status/ContentListItemStatus";
import { ReactComponent as IconPin } from "../Icons/icon-pin/icon-pin.svg";
import { ReactComponent as IconEvent } from "../Icons/icon-event/icon-event.svg";
import { ReactComponent as IconTime } from "../Icons/icon-time/icon-time.svg";

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
        "content-list-item-grid content-list-item arrow__hover--right-small",
        status && "content-list-item--status-parent",
      )}
    >
      <div className="content-list-item__image-container">
        {status && <ContentListItemStatus status={status} />}
        <MediaContainer media={image} placeholderText={placeholderText} />
      </div>
      <div className="content-list-item__content">
        {tagText && (
          <Tag hasBackground className="content-list-item__tag">
            {tagText}
          </Tag>
        )}
        <div className="content-list-item__content-top-container">
          <div className="content-list-item__content-top-container__inner">
            <h2 className="content-list-item__title">{title}</h2>
            <div className="content-list-item__description">{description}</div>
          </div>
          <div className="content-list-item__content-top-container__price">
            {price}
          </div>
        </div>

        <div className="content-list-item__content-bottom-container">
          <div className="content-list-item__content-bottom-container__item">
            <IconPin />
            <p className="content-list-item__location">{location}</p>
          </div>
          <div className="content-list-item__content-bottom-container__item">
            <IconEvent />
            <p className="content-list-item__date">{date}</p>
          </div>
          <div className="content-list-item__content-bottom-container__item">
            <IconTime />
            <time
              className="content-list-item__time"
              dateTime={placeholderDateTime}
            >
              {time}
            </time>
          </div>
        </div>
        <div className="content-list-item__content__price">{price}</div>
      </div>
      <ArrowSmallRight />
    </a>
  );
};
