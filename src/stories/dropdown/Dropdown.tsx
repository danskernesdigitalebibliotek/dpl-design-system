import React from "react";

export type DropdownItem = {
  title: string;
  href: string;
};

export type DropdownProps = {
  list: DropdownItem[];
  ariaLabel: string;
};

export const Dropdown = (props: DropdownProps) => {
  return (
    <div className="dropdown">
      <select className="dropdown__select" aria-label={props.ariaLabel}>
        {props.list.map((i, index) => (
          <option key={index} className="dropdown__option" value={i.title}>
            {i.title}
          </option>
        ))}
      </select>
      <div className="dropdown__arrows">
        <img
          className="dropdown__arrow"
          src="icons/basic/icon-triangle.svg"
          alt=""
        />
        <img
          className="dropdown__arrow dropdown__arrow--bottom"
          src="icons/basic/icon-triangle.svg"
          alt=""
        />
      </div>
    </div>
  );
};
