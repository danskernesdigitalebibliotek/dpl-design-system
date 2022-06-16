export type AutosuggestTextProps = {
  items: string[]
}

export const AutosuggestText = (props: AutosuggestTextProps) => {
  const { items } = props;
  return (
    <ul className="autosuggest">
      {items.map((item) => {
        return (
          <li className="autosuggest__item--text text-body-medium-regular px-24">
            {item}
          </li>
        )
      })}
    </ul>
  )
}
