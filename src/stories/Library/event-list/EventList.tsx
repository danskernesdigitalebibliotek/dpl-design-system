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
      {events.map((event, index) => (
        <li key={index} className="event-list__item">
          <EventListItem {...event} />
          <EventListItemStacked
            href={event.href}
            date={event.date}
            time={event.time}
          />
          <EventListItemStacked
            href={event.href}
            date={event.date}
            time={event.time}
          />
        </li>
      ))}
    </ul>
  );
};

export default EventList;
