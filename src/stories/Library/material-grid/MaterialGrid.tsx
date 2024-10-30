import React, { useState } from "react";
import clsx from "clsx";
import {
  RecommendedMaterial,
  RecommendedMaterialProps,
} from "../recommended-material/RecommendedMaterial";

export type MaterialGridProps = {
  title: string;
  description: string;
  selectedAmountOfMaterialsForDisplay: 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32;
  materials: RecommendedMaterialProps[];
  buttonText: string;
};

export const MaterialGrid: React.FC<MaterialGridProps> = ({
  title,
  description,
  selectedAmountOfMaterialsForDisplay,
  materials,
  buttonText,
}) => {
  // The JS code here is just an example of how this works.
  // The proper implementation is in the react repo.
  const initialMaximumDisplay = 4;
  const initialMaterialsToDisplay =
    selectedAmountOfMaterialsForDisplay > initialMaximumDisplay
      ? initialMaximumDisplay
      : selectedAmountOfMaterialsForDisplay;

  const [showAllMaterials, setShowAllMaterials] = useState(false);
  const [currentMaterialsDisplayed, setCurrentMaterialsDisplayed] = useState(
    initialMaterialsToDisplay,
  );

  const moreMaterialsThanInitialMaximum =
    selectedAmountOfMaterialsForDisplay > initialMaximumDisplay;

  function handleSetShowAllMaterials() {
    setShowAllMaterials(true);
    setCurrentMaterialsDisplayed(selectedAmountOfMaterialsForDisplay);
  }

  const titleClasses = clsx("material-grid__title", {
    "material-grid__title--no-description": !description,
  });

  return (
    <div className="material-grid">
      {(title || description) && (
        <div className="material-grid__text-wrapper">
          {title && <h2 className={titleClasses}>{title}</h2>}
          {description && (
            <p className="material-grid__description">{description}</p>
          )}
        </div>
      )}
      <ul className="material-grid__items">
        {materials
          .slice(0, currentMaterialsDisplayed)
          .map((material, index) => (
            <li key={index}>
              <RecommendedMaterial partOfGrid {...material} />
            </li>
          ))}
      </ul>
      {moreMaterialsThanInitialMaximum && !showAllMaterials && (
        <button
          className="material-grid__show-more btn-primary btn-outline btn-medium"
          data-show-more
          aria-expanded={showAllMaterials ? "true" : "false"}
          aria-controls="material-grid__items"
          onClick={() => handleSetShowAllMaterials()}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};
