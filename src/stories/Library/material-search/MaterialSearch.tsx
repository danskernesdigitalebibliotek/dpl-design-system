import { FC, useState } from "react";
import MaterialSearchInputs from "./MaterialSearchInputs";
import MaterialSearchPreview from "./MaterialSearchPreview";
import MaterialSearchList from "./MaterialSearchList";
import { PreviewData } from "./MaterialSearchExampleData";

const MaterialSearch: FC = () => {
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
        <MaterialSearchPreview displayMaterial={searchInput.length > 1} />
        <MaterialSearchList
          showListResults={searchInput.length > 1}
          selectedWorkId={selectedWorkId}
        />
      </div>
    </div>
  );
};

export default MaterialSearch;
