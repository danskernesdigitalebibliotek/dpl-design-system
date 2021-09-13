import React from "react";

type DropdownItem = {
  title: string;
  href: string;
};

type DropdownProps = {
  list: DropdownItem[];
};

export const Dropdown = (props: DropdownProps) => {
  return (
    <div className="dropdown">
      <select className="dropdown--select" name="cars" id="ddlProducts">
        {props.list.map((i) => (
          <option className="dropdown--option" value={i.title}>
            {i.title}
          </option>
        ))}
      </select>
      <div className="dropdown--arrows">
        <img
          className="dropdown--arrow--top"
          src="icons/basic/icon-triangle.svg"
          alt=""
        />
        <img
          className="dropdown--arrow--bottom"
          src="icons/basic/icon-triangle.svg"
          alt=""
        />
      </div>
    </div>
  );
};
