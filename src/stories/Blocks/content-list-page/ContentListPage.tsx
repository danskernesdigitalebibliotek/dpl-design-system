import React from "react";
import ContentList from "../../Library/content-list/ContentList";
import contentListData from "../../Library/content-list/ContentListData";
import { InputLabel } from "../../Library/input-label/InputLabel";
import { Dropdown } from "../../Library/dropdown/Dropdown";
import SearchFullText from "../../Library/search-full-text/SearchFullText";

const filters = [
  {
    label: "Kategorier",
    options: [
      {
        title: "Bob Dylan 80 år",
        href: "/",
      },
      {
        title: "5 Nordiske fuldtræffere",
        href: "/",
      },
    ],
  },
  {
    label: "Filialer",
    options: [
      {
        title: "Hovedbiblioteket",
        href: "/",
      },
      {
        title: "Højbjerg",
        href: "/",
      },
    ],
  },
];

const ContentListPage: React.FC = () => {
  return (
    <div className="content-list-page">
      <h1 className="content-list-page__heading">Arrangementer</h1>
      <h2 className="content-list-page__subheading">
        Switch to results for the&nbsp;
        <a href="/search?q=dans">library materials.</a>
      </h2>
      <ul className="content-list-page__filters">
        {filters.map((filter) => {
          return (
            <li className="content-list-page__filter">
              <InputLabel text={filter.label} />
              <Dropdown
                classNames="dropdown--grey-borders"
                innerClassNames={{
                  select: "dropdown__select--grey",
                }}
                list={filter.options}
                ariaLabel="Kategorier"
                arrowIcon="chevron"
              />
            </li>
          );
        })}
        <li className="content-list-page__filter content-list-page__filter--right">
          <InputLabel text="Søg" />
          <SearchFullText />
        </li>
      </ul>
      <ContentList items={contentListData} />
    </div>
  );
};

export default ContentListPage;
