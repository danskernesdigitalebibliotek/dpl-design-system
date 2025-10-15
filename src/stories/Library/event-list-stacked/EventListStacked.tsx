import React from "react";
import { ContentListItem } from "../content-list-item/ContentListItem";
import ContentListItemStacked from "../content-list-item/ContentListItemStacked";
import contentListData from "../content-list/ContentListData";

interface PromoteEventsListProps {
  title: string;
}

const EventListStacked: React.FC<PromoteEventsListProps> = ({ title }) => {
  return (
    <section className="event-list-stacked">
      <h2 className="event-list-stacked__heading">{title}</h2>
      <ContentListItem {...contentListData[0]} />
      {contentListData.map((event) => (
        <ContentListItemStacked
          title={event.title}
          href={event.href}
          time={event.time}
          date={event.date}
          location={event.location}
          status={event.status}
        />
      ))}
    </section>
  );
};
export default EventListStacked;
