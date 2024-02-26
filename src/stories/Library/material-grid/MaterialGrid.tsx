import React, { useState } from "react";
import {
  RecommendedMaterial,
  RecommendedMaterialProps,
} from "../recommended-material/RecommendedMaterial";

export type MaterialGridProps = {
  title: string;
  selectedAmountOfMaterialsForDisplay: 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32;
  materials: RecommendedMaterialProps[];
};

export const MaterialGrid: React.FC<MaterialGridProps> = ({
  title,
  selectedAmountOfMaterialsForDisplay,
  materials,
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
    initialMaterialsToDisplay
  );

  const moreMaterialsThanInitialMaximum =
    selectedAmountOfMaterialsForDisplay > initialMaximumDisplay;

  function handleSetShowAllMaterials() {
    setShowAllMaterials(true);
    setCurrentMaterialsDisplayed(selectedAmountOfMaterialsForDisplay);
  }

  return (
    <div className="material-grid">
      <h2 className="material-grid__title">{title}</h2>
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
          Se alle
        </button>
      )}
    </div>
  );
};
