import clsx from "clsx";
import { FC } from "react";
import { DplOpeningHoursListGET200Item } from "./OpeningHoursExampleData";

type OpeningHoursDayEntryProps = {
  data: DplOpeningHoursListGET200Item;
  isOdd: boolean;
};

const OpeningHoursDayEntry: FC<OpeningHoursDayEntryProps> = ({
  data,
  isOdd,
}) => {
  const { start_time: startTime, end_time: endTime, category } = data;
  return (
    <li
      className={clsx("opening-hours__individual-opening", {
        "opening-hours__individual-opening--odd": isOdd,
      })}
    >
      <div className="opening-hours__category">{category.title}</div>
      <div className="opening-hours__time">
        {startTime} - {endTime}
      </div>
    </li>
  );
};

export default OpeningHoursDayEntry;
