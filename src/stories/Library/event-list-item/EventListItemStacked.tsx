import { FC } from "react";
import { ReactComponent as ArrowSmallRight } from "../Arrows/icon-arrow-ui/icon-arrow-ui-small-right.svg";

interface EventListItemStackedProps {
  href: string;
  time: string;
  date: string;
}

const EventListItemStacked: FC<EventListItemStackedProps> = ({
  href = "#",
  time,
  date,
}) => {
  return (
    <a
      href={href}
      className="event-list-item-stacked arrow__hover--right-small"
    >
      <time className="event-list-item-stacked__content">
        <span className="event-list-item-stacked__date">{date}</span>
        <span className="event-list-item-stacked__time">{time}</span>
      </time>
      <ArrowSmallRight />
    </a>
  );
};

export default EventListItemStacked;
