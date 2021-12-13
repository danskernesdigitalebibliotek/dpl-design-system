import { StatusLabel, StatusLabelProps } from "../status-label/StatusLabel";
import { Number, NumberProps } from "../number/Number";
import { Dropdown } from "../dropdown/Dropdown";

export type ListDetailsProps = {
  title: string;
  date: string;
  icon: string;
};

export const ListDetails = (props: ListDetailsProps) => {
  return (
    <div className="list-details">
      <div className="list-details__icon">
        <img src="icons/collection/Ebook.svg" alt="arrow accent" />
      </div>
      <div className="list-details__container">
        <div className="list-details__content">
          <p className="text-header-h5">{props.title}</p>
          <p className="text-small-caption">{props.date}</p>
        </div>
        <div className="list-details__menu">
          <Dropdown
            ariaLabel="dropdown"
            list={[
              {
                href: "",
                title: "6 måneder",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

declare global {
  interface Window {
    eventHeader: () => void;
  }
}
