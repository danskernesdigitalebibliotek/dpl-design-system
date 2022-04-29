import { ButtonProps } from "../button/Button";
import { Dropdown, DropdownItem } from "../dropdown/Dropdown";
import { LinkFilter, LinkFilters } from "../link-filters/LinkFilters";
import { MaterialCard, MaterialCardProps } from "../material-card/MaterialCard";

export type MaterialBannerProps = {
  title: string;
  body: string;
  linkFilters: LinkFilter[];
  button?: ButtonProps;
  cards: MaterialCardProps[];
  showLinkfilters: boolean;
  showBodyText: boolean;
};

export const MaterialBanner = (props: MaterialBannerProps) => {
const dropdownList: DropdownItem[] = props.linkFilters.map(i => ({
  title: i.title,
  href: i.href || "",
}))

  return (
    <div className="material-banner">
      <div className="material-banner__header">
        <div className="material-banner__row">
          <h3 className="text-header-h2">{props.title}</h3>
          {props.showLinkfilters && (
            <div className="material-banner__menu">
              <LinkFilters filters={props.linkFilters} />
              <Dropdown ariaLabel="Dropdown filter" list={dropdownList} arrowIcon="triangles" />
            </div>
          )}
        </div>
        {props.showBodyText && (
          <p className="text-body-medium-regular">{props.body}</p>
        )}
      </div>
      <ul className="material-banner__cards">
        {props.cards.map((card, index) => (
          <li>
            <MaterialCard key={index} {...card} />
          </li>
        ))}
      </ul>
    </div>
  );
};
