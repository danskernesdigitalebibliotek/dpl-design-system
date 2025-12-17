import React from "react";

const OperatorButtons: React.FC = () => {
  return (
    <div className="advanced-search-filter__operators">
      <button type="button" className="advanced-search-filter__operator">
        OG
      </button>
      <button
        type="button"
        className="advanced-search-filter__operator advanced-search-filter__operator--active"
      >
        ELLER
      </button>
      <button type="button" className="advanced-search-filter__operator">
        IKKE
      </button>
    </div>
  );
};

export default OperatorButtons;
