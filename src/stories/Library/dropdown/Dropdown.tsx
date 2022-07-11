export type DropdownItem = {
  title: string;
  href: string;
};

export type DropdownProps = {
  list: DropdownItem[];
  ariaLabel: string;
  arrowIcon: "triangles" | "chevron";
};

export const Dropdown: React.FC<DropdownProps> = ({
  arrowIcon,
  ariaLabel,
  list,
}) => {
  const Icon = () => {
    if (arrowIcon === "triangles") {
      return (
        <span>
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
        </span>
      );
    }

    if (arrowIcon === "chevron") {
      return (
        <img
          className="dropdown__arrow"
          src="icons/collection/ExpandMore.svg"
          alt=""
        />
      );
    }

    return null;
  };

  return (
    <div className="dropdown">
      <select className="dropdown__select" aria-label={ariaLabel}>
        {list.map((i, index) => (
          <option key={index} className="dropdown__option" value={i.title}>
            {i.title}
          </option>
        ))}
      </select>
      <div className="dropdown__arrows">
        <Icon />
      </div>
    </div>
  );
};
