import { StatusLabel, StatusLabelProps } from "../../status-label/StatusLabel";
import { Number, NumberProps } from "../../number/Number";

export type ListDashboardProps = {
  title: string;
  number: NumberProps;
  label: StatusLabelProps;
  showDot: boolean;
};

export const ListDashboard: React.FC<ListDashboardProps> = ({
  title,
  number,
  label,
  showDot,
}) => {
  return (
    <div className="list-dashboard">
      <Number label={number.label} status={number.status} />
      <span className="list-dashboard__title text-header-h4">{title}</span>
      {label && <StatusLabel label={label.label} status={label.status} />}
      {showDot && <div className="list-dashboard__dot" />}
    </div>
  );
};
