import { FC } from "react";
import { ReactComponent as WatchStaticIcon } from "../../../public/icons/basic/icon-watch-static.svg";
import DisclosureControllable from "../disclosure-controllable/DisclosureControllable";
import OpeningHoursSidebarSummary from "./OpeningHoursSidebarSummary";
import OpeningHoursSidebarDetails, {
  OpeningHoursItemType,
} from "./OpeningHoursSidebarDetails";

type OpeningHoursSidebarType = {
  title: string;
  dateString: string;
  libraries: {
    id: string;
    name: string;
    openingHoursData: OpeningHoursItemType[];
  }[];
  link: string;
};

const OpeningHoursSidebar: FC<OpeningHoursSidebarType> = ({
  title,
  dateString,
  libraries,
  link,
}) => {
  return (
    <section className="opening-hours-sidebar">
      <header className="opening-hours-sidebar__header">
        <WatchStaticIcon className="opening-hours-sidebar__icon" />
        <div className="opening-hours-sidebar__texts">
          <h2 className="opening-hours-sidebar__title">{title}</h2>
          <p className="opening-hours-sidebar__date">{dateString}</p>
        </div>
      </header>

      {libraries.map(({ id, name, openingHoursData }, i) => (
        <DisclosureControllable
          showContent={i === 0}
          key={id}
          id={id}
          detailsClassName="opening-hours-sidebar-details"
          summaryClassName="opening-hours-sidebar-summary"
          summary={<OpeningHoursSidebarSummary name={name} />}
        >
          <OpeningHoursSidebarDetails
            openingHoursData={openingHoursData}
            link={link}
            name={name}
          />
        </DisclosureControllable>
      ))}
    </section>
  );
};

export default OpeningHoursSidebar;
