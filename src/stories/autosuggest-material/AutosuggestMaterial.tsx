import { Material } from "../material/Material";

export type AutosuggestMaterialProps = {
  items: {
    cover: string;
    title: string;
    author: string;
    year: string;
  }[]
}

export const AutosuggestMaterial = (props: AutosuggestMaterialProps) => {
  const {items} = props

  return (
    <ul className="autosuggest">
      <li className="autosuggest__item--text text-body-medium-regular">
            I am a contextual text item
      </li>
      <li>
        <hr className="autosuggest__divider"/>
      </li>
      <li>
        <ul className="autosuggest__item--materials">
          {items.map((item) => {
            return (
              <li className="autosuggest__item--materials__item">
                <div className="autosuggest__item--materials__item__content">
                  <div className="autosuggest__item--materials__item__content--cover">
                    <Material size="xsmall" animate={true} url={item.cover} />
                  </div>
                  <div className="autosuggest__item--materials__item__content--info">
                    <div className="text-body-medium-medium autosuggest__item--materials__item__content--info__title">{item.title}</div>
                    <div className="text-body-small-regular autosuggest__item--materials__item__content--info__author">{`${item.author} (${item.year})`}</div>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </li>
    </ul>
  )
}
