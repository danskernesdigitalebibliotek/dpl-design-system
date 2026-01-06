import React from "react";

const AdvancedSearchToggle: React.FC<{ checked?: boolean }> = ({ checked }) => {
  return (
    <div className="advanced-search-toggle">
      <button
        type="button"
        role="switch"
        aria-checked="true"
        aria-label="on-shelf"
        className={`advanced-search-toggle__button ${checked && "advanced-search-toggle__button--checked"}`}
        id="on-shelf"
      >
        <span className="advanced-search-toggle__slider" />
      </button>
      <label
        htmlFor="on-shelf"
        className="advanced-search-toggle__content cursor-pointer"
      >
        <span className="advanced-search-toggle__label">På hylden</span>
        <span className="advanced-search-toggle__description">
          Vis kun titler, som har eksemplarer hjemme på hylden.
        </span>
      </label>
    </div>
  );
};

export default AdvancedSearchToggle;
