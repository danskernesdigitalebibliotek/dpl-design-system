import { MaterialTypes } from "./MaterialSearchExampleData";

interface MaterialSearchInputsProps {
  searchInput: string;
  selectedMaterialType: string;
  setSearchInput: (value: string) => void;
  onMaterialTypeChange: (value: string) => void;
}

const MaterialSearchInputs = ({
  searchInput,
  selectedMaterialType,
  setSearchInput,
  onMaterialTypeChange,
}: MaterialSearchInputsProps) => {
  return (
    <div className="material-search__inputs-container">
      <label className="material-search__label" htmlFor="material-search-input">
        Search for materials
        <input
          id="material-search-input"
          type="search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Enter search terms"
          className="material-search__input"
        />
      </label>
      <label
        className="material-search__label"
        htmlFor="material-type-selector"
      >
        Choose material type
        <select
          id="material-type-selector"
          className="material-search__selector"
          disabled={!searchInput}
          onChange={(e) => onMaterialTypeChange(e.target.value)}
          value={selectedMaterialType || ""}
        >
          <option value="" disabled>
            -- Choose material type --
          </option>
          {MaterialTypes.map((materialType: string) => (
            <option key={materialType} value={materialType}>
              {materialType}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default MaterialSearchInputs;
