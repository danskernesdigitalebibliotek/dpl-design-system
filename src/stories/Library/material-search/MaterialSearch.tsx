import { FC, useState } from "react";
import { PreviewData } from "./MaterialSearchExampleData";
import MaterialSearchInputs from "./MaterialSearchInputs";
import MaterialSearchList from "./MaterialSearchList";
import MaterialSearchPreview from "./MaterialSearchPreview";
import ErrorState from "./Errors/ErrorState";

interface MaterialSearchProps {
  errorState: ErrorState;
}

const MaterialSearch: FC<MaterialSearchProps> = ({ errorState }) => {
  const [searchInput, setSearchInput] = useState("");
  const [selectedMaterialType, setSelectedMaterialType] = useState("");
  const [selectedWorkId] = useState(PreviewData.workId);

  const handleSetSearchInput = (value: string) => {
    setSearchInput(value);
  };

  return (
    <div className="material-search">
      <MaterialSearchInputs
        searchInput={searchInput}
        setSearchInput={handleSetSearchInput}
        selectedMaterialType={selectedMaterialType}
        onMaterialTypeChange={setSelectedMaterialType}
      />
      <div className="material-search__materials-wrapper">
        <MaterialSearchPreview
          displayMaterial={searchInput.length > 1}
          errorState={errorState}
        />
        <MaterialSearchList
          showListResults={searchInput.length > 1}
          selectedWorkId={selectedWorkId}
        />
      </div>
    </div>
  );
};

export default MaterialSearch;
