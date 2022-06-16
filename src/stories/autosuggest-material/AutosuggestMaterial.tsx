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
      <ul className="autosuggest__materials">
        {items.map((item) => {
          return (
            <li className="autosuggest__materials__item">
              <div className="autosuggest__materials__item__content">
                <div className="autosuggest__materials__item__content__cover">
                  <Material size="xsmall" animate={true} url={item.cover} />
                </div>
                <div className="autosuggest__materials__item__content__info">
                  <div className="text-body-medium-medium autosuggest__materials__item__content__info__title">{item.title}</div>
                  <div className="text-body-small-regular autosuggest__materials__item__content__info__author">{`${item.author} (${item.year})`}</div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </ul>
  )
}
