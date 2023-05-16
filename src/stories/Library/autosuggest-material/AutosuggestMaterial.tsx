import Cover from "../cover/Cover";

export type AutosuggestMaterialProps = {
  materialSuggestions: {
    cover: string;
    title: string;
    author: string;
    year: string;
  }[];
  classes?: string;
};

export const AutosuggestMaterial: React.FC<AutosuggestMaterialProps> = ({
  materialSuggestions,
  classes,
}) => {
  return (
    <>
      {materialSuggestions.map((item) => {
        return (
          <li className={`autosuggest__material-item ${classes || ""}`}>
            <div className="autosuggest__material-card">
              <Cover size="xsmall" animate src={item.cover} shadow />
              <div className="autosuggest__info">
                <div className="text-body-medium-medium autosuggest__title">
                  {item.title}
                </div>
                <div className="text-body-small-regular autosuggest__author">{`${item.author} (${item.year})`}</div>
              </div>
            </div>
          </li>
        );
      })}
    </>
  );
};
