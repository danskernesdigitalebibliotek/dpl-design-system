import Cover from "../cover/Cover";
import { ReactComponent as SvgIcon } from "../Icons/icon-favourite/icon-favourite.svg";

export type RecommenderData = {
  title: string;
  authors: string;
  filled: boolean;
};
export type RecommenderProps = {
  recommenderData: RecommenderData[];
  title: string;
  bright: boolean;
};

const FavoritesListMaterialComponent: React.FC<RecommenderProps> = ({
  recommenderData,
  title,
  bright,
}) => {
  return (
    <div
      className={`favorites-list-mc ${
        bright ? "favorites-list-mc--bright" : ""
      }`}
    >
      <h3 className="text-header-h3 recommender__title--left">{title}</h3>
      <div className="favorites-list-mc__buttons">
        <button
          type="button"
          className={`button-link ${bright ? "button-link--bright" : ""}`}
        >
          Gå til dine favoritter
        </button>
      </div>
      <ul className="favorites-list-mc__grid">
        {recommenderData.map(({ title: recTitle, filled, authors }) => (
          <li
            className={`favorites-list-mc-material ${
              bright ? "`favorites-list-mc-material--bright" : ""
            }`}
          >
            <div className="favorites-list-mc-material__favourite">
              <div className="button-favourite button-favourite">
                <SvgIcon
                  className={`icon-favourite icon-favourite${
                    !bright ? "--bright" : ""
                  } ${
                    filled
                      ? `icon-favourite--${!bright ? "bright-" : ""}filled`
                      : ""
                  }`}
                />
              </div>
            </div>
            <div className="favorites-list-mc-material__cover-container">
              <Cover
                src="images/book_cover_3.jpg"
                size="medium"
                animate={false}
                tint="120"
              />
            </div>
            <div className="favorites-list-mc-material__meta">
              <a className="favorites-list-mc-material__title">{recTitle}</a>
              <div className="favorites-list-mc-material__author">
                {authors}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesListMaterialComponent;
