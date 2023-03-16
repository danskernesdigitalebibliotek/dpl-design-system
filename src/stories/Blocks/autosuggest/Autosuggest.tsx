import {
  AutosuggestMaterial,
  AutosuggestMaterialProps,
} from "../../Library/autosuggest-material/AutosuggestMaterial";
import {
  AutosuggestText,
  AutosuggestTextProps,
} from "../../Library/autosuggest-text/AutosuggestText";

export type AutosuggestProps = {
  textProps: AutosuggestTextProps;
  materialProps: AutosuggestMaterialProps["materialSuggestions"];
};

export const Autosuggest: React.FC<AutosuggestProps> = ({
  textProps,
  materialProps,
}) => {
  return (
    <ul className="autosuggest pb-16">
      <AutosuggestText textSuggestions={textProps.textSuggestions} />
      <AutosuggestMaterial materialSuggestions={materialProps} />
      <li className="autosuggest__divider" />
      <AutosuggestText
        textSuggestions={textProps.textSuggestions}
        categoryText={textProps.categoryText}
      />
    </ul>
  );
};

export default Autosuggest;
