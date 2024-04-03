import { FC } from "react";
import { ReactComponent as ArrowLeft } from "../../../public/icons/collection/ArrowLeft.svg";
import { ReactComponent as ArrowRight } from "../../../public/icons/collection/ArrowRight.svg";
import { GroupedOpeningHours } from "./OpeningHoursExampleData";
import OpeningHoursWeekList from "./OpeningHoursWeekList";

type OpeningHoursProps = {
  title: string;
  weekCurrentlyDisplayed: string;
  groupedOpeningHours: GroupedOpeningHours;
};

const OpeningHours: FC<OpeningHoursProps> = ({
  groupedOpeningHours,
  weekCurrentlyDisplayed,
}) => {
  return (
    <div className="opening-hours">
      <div className="opening-hours__wrapper">
        <div className="opening-hours__header">
          <h2 className="opening-hours__heading">Åbningstider</h2>
          <div className="opening-hours__navigation-controls">
            <button
              className="opening-hours__navigation-control"
              aria-label="Previous week"
              type="button"
            >
              <ArrowLeft />
            </button>
            <div className="opening-hours__week-display">
              {weekCurrentlyDisplayed}
            </div>
            <button
              className="opening-hours__navigation-control"
              aria-label="Next week"
              type="button"
            >
              <ArrowRight />
            </button>
          </div>
        </div>
        <OpeningHoursWeekList groupedOpeningHours={groupedOpeningHours} />
      </div>
    </div>
  );
};

export default OpeningHours;
