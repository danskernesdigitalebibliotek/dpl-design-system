import { FC } from "react";
import { Dropdown } from "../dropdown/Dropdown";
import { TagButton } from "../tag/tag-button/TagButton";

export type FacetLineItem<TType extends "facet" | "term"> = {
  title: string;
  type: TType;
  score: TType extends "term" ? number : never;
  facet: TType extends "term" ? string : never;
  terms: TType extends "facet" ? FacetLineItem<"term">[] : never;
};
export interface FacetLineProps {
  items: (FacetLineItem<"term"> | FacetLineItem<"facet">)[];
}

const FacetLine: FC<FacetLineProps> = ({ items }) => {
  return (
    <ul className="facet-line mt-48">
      {items.map(({ type, title, terms }, index) => {
        if (type === "term") {
          return (
            <li key={index} className="facet-line__item">
              <TagButton isClickable={false}>{title}</TagButton>
            </li>
          );
        }
        if (type === "facet") {
          return (
            <li className="facet-line__item">
              <Dropdown
                ariaLabel={title}
                list={[{ title }, ...terms]}
                arrowIcon="chevron"
                classNames="dropdown--grey-borders"
                innerClassNames={{
                  select: "dropdown__select--inline",
                  arrowWrapper: "dropdown__arrows--inline ",
                }}
              />
            </li>
          );
        }

        return null;
      })}
    </ul>
  );
};

export default FacetLine;
