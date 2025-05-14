import React from "react";
import { Dropdown } from "../dropdown/Dropdown";
import { MaterialGrid } from "../material-grid/MaterialGrid";
import MaterialGridData from "../material-grid/MaterialGridData";

const MaterialGridRelated: React.FC = () => {
  return (
    <div className="material-grid-related">
      <div className="material-grid-related__header">
        <h2 className="material-grid-related__title">Andre materialer</h2>
        {/* Mobile display : Dropdown */}
        <Dropdown
          ariaLabel="Select material filter"
          arrowIcon="chevron"
          list={[
            { title: "Recommendation" },
            { title: "Series" },
            { title: "Author" },
          ]}
          classNames="dropdown--grey-borders input-with-dropdown__dropdown material-grid-related__dropdown"
          innerClassNames={{
            select: "dropdown__select--inline focus-styling",
            arrowWrapper: "dropdown__arrows--inline",
          }}
        />

        {/* Desktop display : inline */}
        <div
          className="material-grid-related__filter-inline"
          role="group"
          aria-label="Filter displayed materials"
        >
          <button
            className="material-grid-related__filter-button material-grid-related__filter-button--active"
            aria-pressed="true"
          >
            <span className="material-grid-related__filter-text">
              Recommendations
            </span>
            <sup className="material-grid-related__filter-sup">8</sup>
          </button>
          <button
            className="material-grid-related__filter-button"
            aria-pressed="false"
          >
            <span className="material-grid-related__filter-text">
              In same series
            </span>
            <sup className="material-grid-related__filter-sup">8</sup>
          </button>
          <button
            className="material-grid-related__filter-button"
            aria-pressed="false"
          >
            <span className="material-grid-related__filter-text">
              By same author
            </span>
            <sup className="material-grid-related__filter-sup">8</sup>
          </button>
        </div>
      </div>
      <MaterialGrid
        selectedAmountOfMaterialsForDisplay={8}
        initialMaximumDisplay={8}
        materials={MaterialGridData}
      />
    </div>
  );
};

export default MaterialGridRelated;
