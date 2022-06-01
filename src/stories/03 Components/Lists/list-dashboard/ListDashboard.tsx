import {
  StatusLabel,
  StatusLabelProps,
} from "../../../01 Atoms/status-label/StatusLabel";
import { Number, NumberProps } from "../../../01 Atoms/number/Number";

export type ListDashboardProps = {
  title: string;
  number: NumberProps;
  label: StatusLabelProps;
  showDot: boolean;
};

export const ListDashboard = (props: ListDashboardProps) => {
  return (
    <div className="list-dashboard">
      <Number label={props.number.label} status={props.number.status} />
      <span className="list-dashboard__title text-header-h4">
        {props.title}
      </span>
      {props.label && (
        <StatusLabel label={props.label.label} status={props.label.status} />
      )}
      {props.showDot && <div className="list-dashboard__dot" />}
    </div>
  );
};
