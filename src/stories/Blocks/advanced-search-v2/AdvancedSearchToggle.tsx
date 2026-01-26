import React from "react";

const AdvancedSearchToggle: React.FC<{ checked?: boolean }> = ({ checked }) => {
  return (
    <div className="search-toggle">
      <button
        type="button"
        role="switch"
        aria-checked="true"
        aria-label="on-shelf"
        className={`search-toggle__button ${checked && "search-toggle__button--checked"}`}
        id="on-shelf"
      >
        <span className="search-toggle__slider" />
      </button>
      <label
        htmlFor="on-shelf"
        className="search-toggle__content cursor-pointer"
      >
        <span className="search-toggle__label">På hylden</span>
        <span className="search-toggle__description">
          Vis kun titler, som har eksemplarer hjemme på hylden.
        </span>
      </label>
    </div>
  );
};

export default AdvancedSearchToggle;
