import React from "react";
import { ReactComponent as TriangleIcon } from "../../../public/icons/basic/icon-triangle.svg";
import { MaterialGrid } from "../material-grid/MaterialGrid";
import MaterialGridData from "../material-grid/MaterialGridData";

const MaterialGridRelated: React.FC = () => {
  return (
    <div className="material-grid-related">
      <div className="material-grid-related__header">
        <h2 className="material-grid-related__title">Andre materialer</h2>
        {/* Mobile display : Dropdown */}
        <div className="dropdown dropdown--grey-borders input-with-dropdown__dropdown material-grid-related__dropdown">
          <select
            className="dropdown__select dropdown__select--inline focus-styling"
            aria-label="Select material filter"
            value="recommendation"
          >
            <option value="recommendation">Recommendation</option>
            <option value="series">Series</option>
            <option value="author">Author</option>
          </select>
          <div className="dropdown__arrows dropdown__arrows--inline">
            <TriangleIcon
              className="dropdown__arrow dropdown__arrow--bottom"
              aria-hidden="true"
            />
          </div>
        </div>
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
            <sup>8</sup>
          </button>
          <button
            className="material-grid-related__filter-button"
            aria-pressed="false"
          >
            <span className="material-grid-related__filter-text">
              In same series
            </span>
            <sup>8</sup>
          </button>
          <button
            className="material-grid-related__filter-button"
            aria-pressed="false"
          >
            <span className="material-grid-related__filter-text">
              By same author
            </span>
            <sup>8</sup>
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
