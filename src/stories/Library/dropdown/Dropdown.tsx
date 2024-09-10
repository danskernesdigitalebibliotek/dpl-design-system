import clsx from "clsx";
import { ReactComponent as ExpandMoreIcon } from "../../../public/icons/collection/ExpandMore.svg";
import { ReactComponent as TriangleIcon } from "../../../public/icons/basic/icon-triangle.svg";
import Label from "../Forms/label/Label";

export type DropdownItem = {
  title: string;
  href?: string;
  disabled?: boolean;
};

export type DropdownElementProps = {
  labelComponent?: ReturnType<typeof Label>;
  list: DropdownItem[];
  ariaLabel: string;
  arrowIcon: "triangles" | "chevron";
  classNames?: string;
  innerClassNames?: { select?: string; option?: string; arrowWrapper?: string };
  footnote?: string;
};

const DropdownElement: React.FC<DropdownElementProps> = ({
  labelComponent,
  arrowIcon,
  ariaLabel,
  list,
  classNames,
  innerClassNames,
  footnote,
}) => {
  const Icon = () => {
    if (arrowIcon === "triangles") {
      return (
        <>
          <TriangleIcon className="dropdown__arrow" />
          <TriangleIcon className="dropdown__arrow dropdown__arrow--bottom" />
        </>
      );
    }

    if (arrowIcon === "chevron") {
      return <ExpandMoreIcon className="dropdown__arrow" />;
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
    <>
      {labelComponent && labelComponent}
      <div className={classes.root}>
        <select className={classes.select} aria-label={ariaLabel}>
          {list.map(({ title, disabled }, index) => (
            <option
              key={index + title}
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
      {footnote && <div className="dropdown__footnote">{footnote}</div>}
    </>
  );
};

export type DropdownProps = {
  labelComponent?: ReturnType<typeof Label>;
  list: DropdownItem[];
  ariaLabel: string;
  arrowIcon: "triangles" | "chevron";
  classNames?: string;
  innerClassNames?: { select?: string; option?: string; arrowWrapper?: string };
  hideInputWrapper?: boolean;
  footnote?: string;
};

export const Dropdown: React.FC<DropdownProps> = ({
  labelComponent,
  arrowIcon,
  ariaLabel,
  list,
  classNames,
  innerClassNames,
  hideInputWrapper = false,
  footnote,
}) => {
  if (hideInputWrapper) {
    return (
      <DropdownElement
        labelComponent={labelComponent}
        arrowIcon={arrowIcon}
        ariaLabel={ariaLabel}
        list={list}
        classNames={classNames}
        innerClassNames={innerClassNames}
        footnote={footnote}
      />
    );
  }

  return (
    <div className="dpl-input">
      <DropdownElement
        labelComponent={labelComponent}
        arrowIcon={arrowIcon}
        ariaLabel={ariaLabel}
        list={list}
        classNames={classNames}
        innerClassNames={innerClassNames}
        footnote={footnote}
      />
    </div>
  );
};
