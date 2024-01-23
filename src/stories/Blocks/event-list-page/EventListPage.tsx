import React from "react";
import EventList from "../../Library/event-list/EventList";
import eventListData from "../../Library/event-list/EventListData";

const EventListPage: React.FC = () => {
  return (
    <div className="event-list-page">
      <h1 className="event-list-page__heading">Arrangementer</h1>
      <EventList events={eventListData} />
    </div>
  );
};

export default EventListPage;
