export type AutosuggestTextProps = {
  items: string[];
};

export const AutosuggestText = (props: AutosuggestTextProps) => {
  const { items } = props;
  return (
    <ul className="autosuggest pb-16">
      <li>
        <ul>
          {items.map((item) => {
            return (
              <li className="autosuggest__text text-body-medium-regular px-24">
                {item}
              </li>
            );
          })}
        </ul>
      </li>
    </ul>
  );
};
