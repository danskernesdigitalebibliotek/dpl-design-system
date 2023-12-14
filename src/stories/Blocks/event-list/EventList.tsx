import { EventListItem } from "../../Library/event-list-item/EventListItem";
import eventListData from "./EventListData";

const EventList = () => {
  return (
    <ul className="event-list">
      {eventListData.map((event, index) => (
        <li className="event-list__item">
          <EventListItem
            key={index}
            image={event.image}
            title={event.title}
            description={event.description}
            date={event.date}
            time={event.time}
            location={event.location}
            price={event.price}
            href={event.href}
          />
        </li>
      ))}
    </ul>
  );
};

export default EventList;
