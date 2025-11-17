import { FC } from "react";
import clsx from "clsx";

export type AdvancedSearchToggleType = {
  label: string;
  description: string;
  checked: boolean;
};

const AdvancedSearchToggle: FC<AdvancedSearchToggleType> = ({
  label,
  description,
  checked,
}) => {
  return (
    <div className="advanced-search-toggle">
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        className={clsx(
          "advanced-search-toggle__button",
          checked && "advanced-search-toggle__button--checked",
        )}
      >
        <span className="advanced-search-toggle__slider" />
      </button>
      <div className="advanced-search-toggle__content">
        <p className="advanced-search-toggle__label">{label}</p>
        <p className="advanced-search-toggle__description">{description}</p>
      </div>
    </div>
  );
};

export default AdvancedSearchToggle;
