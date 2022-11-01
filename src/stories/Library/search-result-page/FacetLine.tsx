import * as React from "react";
import { FC } from "react";
import { Dropdown } from "../dropdown/Dropdown";

export type FacetLineTermItem = {
  title: string;
  type: "term";
  score: number;
  terms: never;
};
export type FacetLineFacetItem = {
  title: string;
  type: "facet";
  terms: FacetLineTermItem[];
  score: never;
};
export interface FacetLineProps {
  items: (FacetLineTermItem | FacetLineFacetItem)[];
}

const FacetLine: FC<FacetLineProps> = ({ items }) => {
  return (
    <ul className="facet-line mt-48">
      {items.map(({ type, title, terms, score }, index) => {
        if (type === "term") {
          return (
            <li key={index} className="tag tag--outlined facet-line__item">
              {title} ({score})
            </li>
          );
        }
        if (type === "facet") {
          return (
            <li className="facet-line__item">
              <Dropdown
                ariaLabel="Choose periodical year"
                list={[{ title, disabled: true }, ...terms]}
                arrowIcon="chevron"
                classNames="dropdown--grey-borders"
              />
            </li>
          );
        }

        return null;
      })}
      <li className="tag tag--outlined facet-line__item">+ Flere filtre</li>
    </ul>
  );
};

export default FacetLine;
