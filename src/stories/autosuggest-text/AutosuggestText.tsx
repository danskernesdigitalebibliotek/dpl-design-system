export type AutosuggestTextProps = {
  items: string[]
}

export const AutosuggestText = (props: AutosuggestTextProps) => {
  const { items } = props;
  return (
    <ul className="autosuggest-text-container">
      {items.map((item) => {
        return (
          <li className="autosuggest-text-container__item text-body-medium-regular">
            {item}
          </li>
        )
      })}
    </ul>
  )
}
