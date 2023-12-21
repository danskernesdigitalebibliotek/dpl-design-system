import {
  EventListItem,
  EventListItemProps,
} from "../../Library/event-list-item/EventListItem";

type EventListProps = {
  events: EventListItemProps[];
};

const EventList: React.FC<EventListProps> = ({ events }) => {
  return (
    <ul className="event-list">
      {events.map((event, index) => (
        <li key={index} className="event-list__item">
          <EventListItem {...event} />
        </li>
      ))}
    </ul>
  );
};

export default EventList;
