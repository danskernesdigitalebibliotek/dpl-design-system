import { FC } from "react";
import { ReactComponent as ExpandMoreIcon } from "../../../public/icons/collection/ExpandMore.svg";

type OpeningHoursSidebarSummaryType = {
  name: string;
};

const OpeningHoursSidebarSummary: FC<OpeningHoursSidebarSummaryType> = ({
  name,
}) => {
  return (
    <>
      <h3 className="opening-hours-sidebar-summary__name">{name}</h3>
      <ExpandMoreIcon className="opening-hours-sidebar-summary__icon" />
    </>
  );
};

export default OpeningHoursSidebarSummary;
