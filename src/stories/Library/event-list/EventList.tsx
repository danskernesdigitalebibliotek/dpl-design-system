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
        return (
          <li key={index} className="event-list__item">
            <EventListItem {...event} />
            {event.schedule.length > 1 && (
              <EventListItemStacked
                schedule={event.schedule}
                href={event.href}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default EventList;
