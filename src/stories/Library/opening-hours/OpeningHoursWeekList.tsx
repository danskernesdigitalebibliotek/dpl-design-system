import React from "react";
import OpeningHoursDayEntry from "./OpeningHoursDayEntry";
import { GroupedOpeningHours } from "./OpeningHoursExampleData";

type OpeningHoursWeekListProps = {
  groupedOpeningHours: GroupedOpeningHours;
};

const OpeningHoursWeekList: React.FC<OpeningHoursWeekListProps> = ({
  groupedOpeningHours,
}) => {
  return (
    <ol className="opening-hours__content">
      {groupedOpeningHours.map(({ day, date, openingHourEntries }) => {
        const formattedDateForDisplay = new Date(date).toLocaleDateString(
          "da-DK",
          {
            day: "numeric",
            month: "2-digit",
          },
        );

        return (
          <li key={date} className="opening-hours__row">
            <h3 className="opening-hours__individual-day">
              {`${day}:`}
              <time dateTime={date}>d. {formattedDateForDisplay}</time>
            </h3>
            {openingHourEntries.length > 0 ? (
              <ol>
                {openingHourEntries.map((item) => (
                  <OpeningHoursDayEntry key={item.id} data={item} />
                ))}
              </ol>
            ) : (
              <p>
                Biblioteket er <strong>lukket</strong> denne dag.
              </p>
            )}
          </li>
        );
      })}
    </ol>
  );
};

export default OpeningHoursWeekList;
