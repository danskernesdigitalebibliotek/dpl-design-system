import * as React from "react";
import { FC } from "react";

export interface FacetLineSelectedProps {
  items: string[];
}

const FacetLineSelected: FC<FacetLineSelectedProps> = ({ items }) => {
  return (
    <ul className="facet-line-selected">
      {items.map((item) => (
        <li className="facet-line-selected__item">
          <span className="tag tag--small cursor-pointer">
            {item}
            <img
              className="tag-icon"
              src="icons/basic/icon-cross.svg"
              alt="close icon"
            />
          </span>
        </li>
      ))}
    </ul>
  );
};

export default FacetLineSelected;
