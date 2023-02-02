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
      <li>
        <ul>
          <li className="autosuggest__text text-body-medium-regular px-24">
            I am a contextual text item
          </li>
        </ul>
      </li>
      <li className="autosuggest__divider" />
      <li>
        <ul className="autosuggest__materials">
          {items.map((item) => {
            return (
              <li className="autosuggest__material">
                <div className="autosuggest__material__content">
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
      </li>
    </ul>
  );
};
