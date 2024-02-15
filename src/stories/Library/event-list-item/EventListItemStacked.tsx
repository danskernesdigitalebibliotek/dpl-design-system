import { FC } from "react";
import { ReactComponent as ArrowSmallRight } from "../Arrows/icon-arrow-ui/icon-arrow-ui-small-right.svg";

interface EventListItemStackedProps {
  href: string;
  date: string;
  time: string;
}

const EventListItemStacked: FC<EventListItemStackedProps> = ({
  href = "#",
  date,
  time,
}) => {
  return (
    <a
      href={href}
      className="event-list-item-stacked arrow__hover--right-small"
    >
      <time className="event-list-item-stacked__schedule">
        <span className="event-list-item-stacked__date">{date}</span>
        <span className="event-list-item-stacked__schedule-detail">{time}</span>
      </time>
      <ArrowSmallRight />
    </a>
  );
};

export default EventListItemStacked;
