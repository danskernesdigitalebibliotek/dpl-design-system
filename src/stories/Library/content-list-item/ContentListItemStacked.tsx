import { FC } from "react";
import { ReactComponent as ArrowSmallRight } from "../Arrows/icon-arrow-ui/icon-arrow-ui-small-right.svg";
import ContentListItemStatus, {
  ContentListItemStatuses,
} from "../content-list-item-status/ContentListItemStatus";
import { ReactComponent as IconPin } from "../../../../public/icons/collection/icon-pin.svg";
import { ReactComponent as IconEvent } from "../../../../public/icons/collection/icon-event.svg";
import { ReactComponent as IconTime } from "../../../../public/icons/collection/icon-time.svg";

interface ContentListItemStackedProps {
  title: string;
  href: string;
  time?: string;
  date?: string;
  location?: string;
  status?: ContentListItemStatuses;
}

const ContentListItemStacked: FC<ContentListItemStackedProps> = ({
  title,
  href = "#",
  time,
  date,
  location,
  status,
}) => {
  const placeholderDateTime = "2023-03-10T15:00"; // ISO format date and time

  return (
    <a
      href={href}
      className="content-list-item-stacked arrow__hover--right-small"
    >
      <h3 className="hide-visually">{title}</h3>
      <div
        className={
          status
            ? "content-list-item-stacked__status"
            : "content-list-item-stacked__status content-list-item-stacked__status--hidden"
        }
      >
        {status && <ContentListItemStatus status={status} />}
      </div>
      <div className="content-list-item-stacked__content">
        <div className="content-list-item-stacked__content__item">
          <IconPin />
          <p className="content-list-item-stacked__location">{location}</p>
        </div>
        <div className="content-list-item-stacked__content__item">
          <IconEvent />
          <p className="content-list-item-stacked__date">{date}</p>
        </div>
        <div className="content-list-item-stacked__content__item">
          <IconTime />
          <time
            className="content-list-item-stacked__time"
            dateTime={placeholderDateTime}
          >
            {time}
          </time>
        </div>
      </div>
      <ArrowSmallRight />
    </a>
  );
};

export default ContentListItemStacked;
