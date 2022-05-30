export type AutosuggestTextType = {
  items: string[]
}

export const AutosuggestText = (props: AutosuggestTextType) => {
  const { items } = props;
  return (
    <ul className="suggest-text--container">
      {items.map((item) => {
        return (
          <li className="suggest-text--item text-body-medium-regular">
            {item}
          </li>
        )
      })}
    </ul>
  )
}
