import clsx from "clsx";
import {
  EventListItem,
  EventListItemProps,
} from "../event-list-item/EventListItem";
import EventListItemStacked from "../event-list-item/EventListItemStacked";

type EventListProps = {
  events: EventListItemProps[];
};

const EventList: React.FC<EventListProps> = ({ events }) => {
  return (
    <ul className="event-list">
      {events.map((event, index) => {
        // Check if current event should be stacked with the previous one
        const isStacked =
          events[index].eventSeriesId === events[index - 1]?.eventSeriesId ??
          false;

        return (
          <li
            key={index}
            className={clsx("event-list__item", {
              "event-list__item--stacked": isStacked,
            })}
          >
            {isStacked ? (
              <EventListItemStacked {...event} />
            ) : (
              <EventListItem {...event} />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default EventList;
