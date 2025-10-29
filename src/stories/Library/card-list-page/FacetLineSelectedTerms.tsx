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
        <button className="btn--link-styling">
          <img
            width={18}
            height={18}
            src="icons/basic/icon-filter.svg"
            alt="Filter icon"
          />
          <span className="link-tag">Flere filtre</span>
        </button>
      </li>
    </ul>
  );
};

export default FacetLineSelectedTerms;
