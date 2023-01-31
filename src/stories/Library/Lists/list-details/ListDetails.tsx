import { Dropdown, DropdownProps } from "../../dropdown/Dropdown";
import { Links } from "../../links/Links";

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

export const ListDetails: React.FC<ListDetailsProps> = ({
  title,
  date,
  icon,
  menu,
  link,
}) => {
  const id = "list-details-header";
  return (
    <div className="list-details">
      <div className="list-details__icon">
        <img src={icon} alt="arrow accent" />
      </div>
      <div className="list-details__container">
        <div className="list-details__content">
          <h3 id={id} className="text-header-h5">
            {title}
          </h3>
          <p className="text-small-caption">{date}</p>
        </div>
        <div className="list-details__menu">
          {menu && (
            <Dropdown
              arialabelledby={id}
              ariaLabel={menu.ariaLabel}
              list={menu.list}
              arrowIcon="chevron"
            />
          )}
          {link && <Links href={link.url} linkText={link.label} />}
        </div>
      </div>
    </div>
  );
};
