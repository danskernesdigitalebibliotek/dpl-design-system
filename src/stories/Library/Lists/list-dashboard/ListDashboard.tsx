import { StatusLabel, StatusLabelProps } from "../../status-label/StatusLabel";
import { Number, NumberProps } from "../../number/Number";
import { ReactComponent as ArrowSmallRight } from "../../Arrows/icon-arrow-ui/icon-arrow-ui-small-right.svg";

export type ListDashboardProps = {
  title: string;
  href: string;
  number: NumberProps;
  label: StatusLabelProps;
  showDot: boolean;
};

export const ListDashboard: React.FC<ListDashboardProps> = ({
  title,
  href,
  number,
  label,
  showDot,
}) => {
  return (
    <a
      href={href}
      className="list-dashboard shadow-medium-hover arrow__hover--right-small"
    >
      <Number label={number.label} status={number.status} />
      <span
        className={
          label
            ? "list-dashboard__title text-header-h4"
            : "list-dashboard__title text-body-medium-regular"
        }
      >
        {title}
      </span>
      {label && <StatusLabel label={label.label} status={label.status} />}
      {showDot && <div className="list-dashboard__dot" />}
      <div className="list-dashboard__arrow">
        <ArrowSmallRight />
      </div>
    </a>
  );
};
