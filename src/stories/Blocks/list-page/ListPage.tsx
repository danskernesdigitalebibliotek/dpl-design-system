import React from "react";
import EventList from "../../Library/event-list/EventList";
import eventListData from "../../Library/event-list/EventListData";
import { InputLabel } from "../../Library/input-label/InputLabel";
import { Dropdown } from "../../Library/dropdown/Dropdown";

const list = [
  {
    title: "Bob Dylan 80 år",
    href: "/",
  },
  {
    title: "5 Nordiske fuldtræffere",
    href: "/",
  },
];

const ListPage: React.FC = () => {
  return (
    <div className="list-page">
      <h1 className="list-page__heading">Arrangementer</h1>
      <div className="list-page__filters">
        <div className="list-page__filter">
          <InputLabel text="Kategorier" />
          <Dropdown list={list} ariaLabel="Kategorier" arrowIcon="chevron" />
        </div>
      </div>
      <EventList events={eventListData} />
    </div>
  );
};

export default ListPage;
