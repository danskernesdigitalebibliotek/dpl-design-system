import { FC } from "react";
import { DplOpeningHoursListGET200Item } from "./OpeningHoursExampleData";

type OpeningHoursDayEntryProps = {
  data: DplOpeningHoursListGET200Item;
};

const OpeningHoursDayEntry: FC<OpeningHoursDayEntryProps> = ({ data }) => {
  const { start_time: startTime, end_time: endTime, category } = data;
  return (
    <li className="opening-hours__individual-opening">
      <div className="opening-hours__category">{category.title}</div>
      <div className="opening-hours__time">
        {startTime} - {endTime}
      </div>
    </li>
  );
};

export default OpeningHoursDayEntry;
