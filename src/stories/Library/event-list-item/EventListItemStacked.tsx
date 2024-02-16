import { FC } from "react";
import { ReactComponent as ArrowSmallRight } from "../Arrows/icon-arrow-ui/icon-arrow-ui-small-right.svg";
import { EventListItemScheduleType } from "./EventListItem";

interface EventListItemStackedProps {
  href: string;
  schedule: EventListItemScheduleType[];
}

const EventListItemStacked: FC<EventListItemStackedProps> = ({
  href = "#",
  schedule,
}) => {
  return (
    <>
      {schedule.map(({ date, time }, index) => {
        // Skip the first schedule item, as it is already displayed in the main event-list-item
        if (index === 0) return null;
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
      })}
    </>
  );
};

export default EventListItemStacked;
