import { FC } from "react";
import { TagButton } from "../tag/tag-button/TagButton";
import { FacetLineItem } from "./FacetLine";

export interface FacetLineSelectedProps {
  items: FacetLineItem<"term">[];
}

const FacetLineSelectedTerms: FC<FacetLineSelectedProps> = ({ items }) => {
  return (
    <ul className="facet-line-selected-terms">
      {items.map(({ title }) => (
        <li className="facet-line-selected-terms__item">
          <TagButton showCloseIcon hasBackground>
            {title}
          </TagButton>
        </li>
      ))}
      <li className="facet-line-more-filters">
        <TagButton isClickable={false} className="btn--link-styling">
          <img
            src="icons/basic/icon-filter.svg"
            alt="Filter icon"
            className="mr-8"
          />
          <span className="link-tag">Flere filtre</span>
        </TagButton>
      </li>
    </ul>
  );
};

export default FacetLineSelectedTerms;
