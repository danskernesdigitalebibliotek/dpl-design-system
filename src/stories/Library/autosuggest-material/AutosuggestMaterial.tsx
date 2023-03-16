import Cover from "../cover/Cover";

export type AutosuggestMaterialProps = {
  items: {
    cover: string;
    title: string;
    author: string;
    year: string;
  }[];
};

export const AutosuggestMaterial: React.FC<AutosuggestMaterialProps> = ({
  items,
}) => {
  return (
    <ul className="autosuggest pb-16">
      {/* The contextual item needs to be up to date with AutosuggestText.tsx as it imitates it. */}
      <li className="autosuggest__text-item text-body-medium-regular px-24">
        <p className="autosuggest__text text-body-medium-regular">
          I am a contextual item
        </p>
      </li>
      <li className="autosuggest__divider" />
      {items.map((item) => {
        return (
          <li className="autosuggest__material-item">
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
    </ul>
  );
};
