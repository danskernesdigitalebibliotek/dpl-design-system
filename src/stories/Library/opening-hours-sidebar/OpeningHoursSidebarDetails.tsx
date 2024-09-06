import React from "react";

export type OpeningHoursItemType = {
  term: string;
  description: string;
};

type OpeningHoursSidebarDetailsType = {
  openingHoursData: OpeningHoursItemType[];
  link: string;
  name: string;
};

const OpeningHoursSidebarDetails: React.FC<OpeningHoursSidebarDetailsType> = ({
  openingHoursData,
  link,
  name,
}) => {
  return (
    <div className="opening-hours-sidebar-details__content">
      <dl className="opening-hours-sidebar-details__list">
        {openingHoursData.map(({ term, description }, i) => (
          <div key={i} className="opening-hours-sidebar-details__item">
            <dt className="opening-hours-sidebar-details__term">{term}</dt>
            <dd className="opening-hours-sidebar-details__description">
              {description}
            </dd>
          </div>
        ))}
      </dl>
      <a href={link} className="opening-hours-sidebar__link">
        {`Gå til ${name}`}
      </a>
    </div>
  );
};

export default OpeningHoursSidebarDetails;
