import React from "react";

const OperatorButtons: React.FC = () => {
  return (
    <div className="advanced-search-suggest__operators">
      <button type="button" className="advanced-search-suggest__operator">
        OG
      </button>
      <button
        type="button"
        className="advanced-search-suggest__operator advanced-search-suggest__operator--active"
      >
        ELLER
      </button>
      <button type="button" className="advanced-search-suggest__operator">
        IKKE
      </button>
    </div>
  );
};

export default OperatorButtons;
