export type AutosuggestTextProps = {
  items: string[];
  categoryText: string;
};

export const AutosuggestText = (props: AutosuggestTextProps) => {
  const { items, categoryText } = props;
  return (
    <ul className="autosuggest pb-16">
      {items.map((item) => {
        return (
          <li className="autosuggest__text-item text-body-medium-regular px-24">
            <p className="autosuggest__text text-body-medium-regular">{item}</p>
            {categoryText && (
              <div className="boxed-text text-tags noselect ml-8">
                {categoryText}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
};
