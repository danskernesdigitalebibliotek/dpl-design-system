import { ButtonProps } from "../../Library/Buttons/button/Button";
import { Dropdown, DropdownItem } from "../../Library/dropdown/Dropdown";
import {
  LinkFilter,
  LinkFilters,
} from "../../Library/link-filters/LinkFilters";
import {
  MaterialCard,
  MaterialCardProps,
} from "../../Library/material-card/MaterialCard";

export type MaterialBannerProps = {
  title: string;
  body: string;
  linkFilters: LinkFilter[];
  button?: ButtonProps;
  cards: MaterialCardProps[];
  showLinkfilters: boolean;
  showBodyText: boolean;
};

export const MaterialBanner: React.FC<MaterialBannerProps> = ({
  title,
  body,
  linkFilters,
  button,
  cards,
  showBodyText,
  showLinkfilters,
}) => {
  const dropdownList: DropdownItem[] = linkFilters.map((i) => ({
    title: i.title,
    href: i.href || "",
  }));

  return (
    <div className="material-banner">
      <div className="material-banner__header">
        <div className="material-banner__row">
          <h3 className="text-header-h2">{title}</h3>
          {showLinkfilters && (
            <div className="material-banner__menu">
              <LinkFilters filters={linkFilters} />
              <Dropdown
                ariaLabel="Dropdown filter"
                list={dropdownList}
                arrowIcon="triangles"
              />
            </div>
          )}
        </div>
        {showBodyText && <p className="text-body-medium-regular">{body}</p>}
      </div>
      <ul className="material-banner__cards">
        {cards.map((card, index) => (
          <li>
            <MaterialCard key={index} {...card} />
          </li>
        ))}
      </ul>
    </div>
  );
};
