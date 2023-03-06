import { Dropdown, DropdownProps } from "../../dropdown/Dropdown";
import { Links } from "../../links/Links";

export type ListDetailsProps = {
  title: string;
  reservationPlace?: string;
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
  reservationPlace,
  link,
}) => {
  return (
    <div className="list-details">
      <div className="list-details__icon">
        <img src={icon} alt="arrow accent" />
      </div>
      <div className="list-details__container">
        <div>
          <h3 className="text-header-h5">{title}</h3>
          {reservationPlace && (
            <p className="text-small-caption">{reservationPlace}</p>
          )}
          <p className="text-small-caption">{date}</p>
        </div>
        {menu && (
          <div className="list-details__dropdown">
            <Dropdown
              ariaLabel={menu.ariaLabel}
              list={menu.list}
              arrowIcon="chevron"
            />
          </div>
        )}
      </div>
      {link && <Links href={link.url} linkText={link.label} />}
    </div>
  );
};
