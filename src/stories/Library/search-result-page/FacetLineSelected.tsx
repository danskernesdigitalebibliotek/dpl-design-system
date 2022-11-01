import * as React from "react";
import { FC } from "react";
import { Tag } from "../tag/Tag";
import { FacetLineItem } from "./FacetLine";

export interface FacetLineSelectedProps {
  items: FacetLineItem<"term">[];
}

const FacetLineSelected: FC<FacetLineSelectedProps> = ({ items }) => {
  return (
    <ul className="facet-line-selected">
      {items.map(({ title }) => (
        <li className="facet-line-selected__item">
          <Tag showCloseIcon hasBackground>
            {title}
          </Tag>
        </li>
      ))}
    </ul>
  );
};

export default FacetLineSelected;
