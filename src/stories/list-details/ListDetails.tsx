import { Dropdown, DropdownProps } from "../dropdown/Dropdown";
import { Links } from "../links/Links";

export type ListDetailsProps = {
  title: string;
  date: string;
  icon: string;
  menu?: DropdownProps;
  link?: {
    label: string;
    url: string;
  };
};

export const ListDetails = (props: ListDetailsProps) => {
  return (
    <div className="list-details">
      <div className="list-details__icon">
        <img src={props.icon} alt="arrow accent" />
      </div>
      <div className="list-details__container">
        <div className="list-details__content">
          <p className="text-header-h5">{props.title}</p>
          <p className="text-small-caption">{props.date}</p>
        </div>
        <div className="list-details__menu">
          {props.menu && (
            <Dropdown ariaLabel={props.menu.ariaLabel} list={props.menu.list} arrowIcon="chevron" />
          )}
          {props.link && (
            <Links href={props.link.url} linkText={props.link.label} />
          )}
        </div>
      </div>
    </div>
  );
};