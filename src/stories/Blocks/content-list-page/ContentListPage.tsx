import React from "react";
import ContentList from "../../Library/content-list/ContentList";
import contentListData from "../../Library/content-list/ContentListData";
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

const ContentListPage: React.FC = () => {
  return (
    <div className="content-list-page">
      <h1 className="content-list-page__heading">Arrangementer</h1>
      <div className="content-list-page__filters">
        <div className="content-list-page__filter">
          <InputLabel text="Kategorier" />
          <Dropdown list={list} ariaLabel="Kategorier" arrowIcon="chevron" />
        </div>
      </div>
      <ContentList items={contentListData} />
    </div>
  );
};

export default ContentListPage;
