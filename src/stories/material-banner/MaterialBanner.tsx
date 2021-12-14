import { ButtonProps } from "../button/Button";
import { Dropdown } from "../dropdown/Dropdown";
import { LinkFilters } from "../link-filters/LinkFilters";
import { LinksProps } from "../links/Links";
import { MaterialCard, MaterialCardProps } from "../material-card/MaterialCard";

export type MaterialBannerProps = {
  title: string;
  body: string;
  links: LinksProps[];
  button?: ButtonProps;
  cards: MaterialCardProps[];
  showLinkfilters: boolean;
  showBodyText: boolean;
};

export const MaterialBanner = (props: MaterialBannerProps) => {
  return (
    <div className="material-banner">
      <div className="material-banner__header">
        <div className="material-banner__row">
          <h3 className="text-header-h2">{props.title}</h3>
          {props.showLinkfilters && (
            <div className="material-banner__menu">
              <LinkFilters filters={linksFilters} />
              <Dropdown ariaLabel="Dropdown filter" list={linksFilters} />
            </div>
          )}
        </div>
        {props.showBodyText && (
          <p className="text-body-medium-regular">{props.body}</p>
        )}
      </div>
      <div className="material-banner__cards">
        {props.cards.map((card, index) => (
          <MaterialCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

const linksFilters = [
  {
    title: "Bob Dylan 80 år",
    href: "",
    counter: "8",
  },
  {
    title: "Familien Bridgerton",
    href: "",
    counter: "24",
  },
  {
    title: "Bøger til din ferie",
    href: "",
    counter: "48",
  },
  {
    title: "Læs dig gennem Danmark",
    href: "",
    counter: "16",
  },
];
