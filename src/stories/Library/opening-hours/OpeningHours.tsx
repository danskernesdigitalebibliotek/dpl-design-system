import { FC } from "react";
import OpeningHoursDayEntry from "./OpeningHoursDayEntry";
import { OpeningHourDay } from "./OpeningHoursExampleData";
import { ReactComponent as ArrowLeft } from "../../../public/icons/collection/ArrowLeft.svg";
import { ReactComponent as ArrowRight } from "../../../public/icons/collection/ArrowRight.svg";

type OpeningHoursProps = {
  title: string;
  weekCurrentlyDisplayed: string;
  openingHoursData: OpeningHourDay[];
};

const OpeningHours: FC<OpeningHoursProps> = ({
  title,
  openingHoursData,
  weekCurrentlyDisplayed,
}) => {
  return (
    <div className="opening-hours">
      <div className="opening-hours__header">
        <h2 className="opening-hours__heading">{title}</h2>
        <div className="opening-hours__navigation-controls">
          <button
            className="opening-hours__navigation-control opening-hours__navigation-control--previous"
            aria-label="Previous week"
          >
            <ArrowLeft />
          </button>
          <div className="opening-hours__week-select-wrapper">
            <div className="opening-hours__week-currently-displayed">
              {weekCurrentlyDisplayed}
            </div>
            <button
              className="opening-hours__navigation-control opening-hours__navigation-control--select"
              aria-label="Open week selection menu"
            >
              <ArrowRight />
            </button>
          </div>
          <button
            className="opening-hours__navigation-control opening-hours__navigation-control--next"
            aria-label="Next week"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
      <ul className="opening-hours__content">
        {openingHoursData.map((dayEntry, index) => (
          <OpeningHoursDayEntry
            key={index}
            day={dayEntry.day}
            categories={dayEntry.categories}
          />
        ))}
      </ul>
    </div>
  );
};

export default OpeningHours;
