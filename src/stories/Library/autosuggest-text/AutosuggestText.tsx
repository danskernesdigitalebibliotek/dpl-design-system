export type AutosuggestTextProps = {
  items: string[];
  withCategory: boolean;
  categoryText: string;
};

export const AutosuggestText = (props: AutosuggestTextProps) => {
  const { items, withCategory, categoryText } = props;
  return (
    <ul className="autosuggest pb-16">
      <li>
        <ul>
          {items.map((item) => {
            return (
              <li className="autosuggest__text text-body-medium-regular px-24">
                {item}
                {withCategory && (
                  <div className="boxed-text text-tags noselect ml-8">
                    {categoryText}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </li>
    </ul>
  );
};
