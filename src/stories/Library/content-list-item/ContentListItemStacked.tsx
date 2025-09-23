import { FC } from "react";
import { ReactComponent as ArrowSmallRight } from "../Arrows/icon-arrow-ui/icon-arrow-ui-small-right.svg";
import ContentListItemStatus, {
  ContentListItemStatuses,
} from "../content-list-item-status/ContentListItemStatus";

interface ContentListItemStackedProps {
  title: string;
  href: string;
  time: string;
  date: string;
  status?: ContentListItemStatuses;
}

const ContentListItemStacked: FC<ContentListItemStackedProps> = ({
  title,
  href = "#",
  time,
  date,
  status,
}) => {
  return (
    <a
      href={href}
      className="content-list-item-stacked arrow__hover--right-small"
    >
      <h3 className="hide-visually">{title}</h3>
      <div className="content-list-item-stacked__content">
        <div className="content-list-item-stacked__date-status">
          <time className="content-list-item-stacked__date">{date}</time>
          {status && <ContentListItemStatus status={status} />}
        </div>
        <time className="content-list-item-stacked__time">{time}</time>
      </div>
      <ArrowSmallRight />
    </a>
  );
};

export default ContentListItemStacked;
