import clsx from "clsx";
import { FC } from "react";

type Category = {
  category: string;
  time: string;
};

type OpeningHoursEntryProps = {
  day: string;
  categories: Category[] | null;
};

const OpeningHourEntry: FC<OpeningHoursEntryProps> = ({ day, categories }) => (
  <li className="opening-hours__row">
    <div className="opening-hours__day">{day}</div>
    {categories && categories.length > 0 ? (
      categories.map((category, index) => {
        const individualOpeningClasses = clsx(
          "opening-hours__individual-opening",
          {
            "opening-hours__individual-opening--odd": index % 2 === 0,
          }
        );

        return (
          <div key={index} className={individualOpeningClasses}>
            <div className="opening-hours__category">{category.category}</div>
            <div className="opening-hours__time">{category.time}</div>
          </div>
        );
      })
    ) : (
      <p>
        Biblioteket er <strong>lukket</strong> denne dag.
      </p>
    )}
  </li>
);

export default OpeningHourEntry;
