import { FC } from "react";
import { Tag } from "../tag/Tag";
import { FacetLineItem } from "./FacetLine";

export interface FacetLineSelectedProps {
  items: FacetLineItem<"term">[];
}

const FacetLineSelectedTerms: FC<FacetLineSelectedProps> = ({ items }) => {
  return (
    <ul className="facet-line-selected-terms">
      {items.map(({ title }) => (
        <li className="facet-line-selected-terms__item">
          <Tag showCloseIcon hasBackground>
            {title}
          </Tag>
        </li>
      ))}
    </ul>
  );
};

export default FacetLineSelectedTerms;
