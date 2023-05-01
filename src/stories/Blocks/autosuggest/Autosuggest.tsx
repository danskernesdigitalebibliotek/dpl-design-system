import {
  AutosuggestMaterial,
  AutosuggestMaterialProps,
} from "../../Library/autosuggest-material/AutosuggestMaterial";
import {
  AutosuggestText,
  AutosuggestTextProps,
} from "../../Library/autosuggest-text/AutosuggestText";

export type AutosuggestProps = AutosuggestTextProps & AutosuggestMaterialProps;

export const Autosuggest: React.FC<AutosuggestProps> = ({
  textSuggestions,
  categoryText,
  materialSuggestions,
  classes,
}) => {
  return (
    <ul className="autosuggest pb-16">
      <AutosuggestText textSuggestions={textSuggestions} />
      <AutosuggestMaterial
        materialSuggestions={materialSuggestions}
        classes={classes}
      />
      <AutosuggestText
        textSuggestions={textSuggestions}
        categoryText={categoryText}
      />
    </ul>
  );
};

export default Autosuggest;
