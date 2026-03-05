import React from "react";

const OperatorButtons: React.FC = () => {
  return (
    <div className="search-filter__operators">
      <button type="button" className="search-filter__operator">
        OG
      </button>
      <button
        type="button"
        className="search-filter__operator search-filter__operator--active"
      >
        ELLER
      </button>
      <button type="button" className="search-filter__operator">
        IKKE
      </button>
    </div>
  );
};

export default OperatorButtons;
