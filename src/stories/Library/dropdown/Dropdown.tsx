import clsx from "clsx";

export type DropdownItem = {
  title: string;
  href?: string;
  disabled?: boolean;
};

export type DropdownProps = {
  list: DropdownItem[];
  ariaLabel: string;
  arrowIcon: "triangles" | "chevron";
  classNames?: string;
  arialabelledby?: string;
  innerClassNames?: { select?: string; option?: string; arrowWrapper?: string };
};

export const Dropdown: React.FC<DropdownProps> = ({
  arrowIcon,
  ariaLabel,
  list,
  classNames,
  innerClassNames,
  arialabelledby,
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

  const classes = {
    root: clsx("dropdown", classNames),
    select: clsx("dropdown__select", innerClassNames?.select),
    option: clsx("dropdown__option", innerClassNames?.option),
    arrowWrapper: clsx("dropdown__arrows", innerClassNames?.arrowWrapper),
  };

  return (
    <div className={classes.root}>
      <select
        aria-labelledby={arialabelledby}
        className={classes.select}
        aria-label={ariaLabel}
      >
        {list.map(({ title, disabled }, index) => (
          <option
            key={index}
            className={classes.option}
            value={title}
            disabled={disabled !== undefined ? disabled : false}
          >
            {title}
          </option>
        ))}
      </select>
      <div className={classes.arrowWrapper}>
        <Icon />
      </div>
    </div>
  );
};
