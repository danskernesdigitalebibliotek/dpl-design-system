import { Cover } from "../cover/Cover";
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

const Recommender: React.FC<RecommenderProps> = ({
  recommenderData,
  title,
  bright,
}) => {
  return (
    <div className={`recommender ${bright ? "recommender--bright" : ""}`}>
      <h2 className="recommender__title text-header-h1">{title}</h2>
      <div className="recommender__buttons">
        <button
          type="button"
          className={`button-link button-link--selected ${
            bright ? "button-link--bright" : ""
          }`}
        >
          Something similar
        </button>
        <button
          type="button"
          className={`button-link ${bright ? "button-link--bright" : ""}`}
        >
          By the same author
        </button>
      </div>
      <ul className="recommender__grid">
        {recommenderData.map(({ title: recTitle, filled, authors }) => (
          <li
            className={`recommender-material ${
              bright ? "`recommender-material--bright" : ""
            }`}
          >
            <div className="recommender-material__favourite">
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
            <div className="recommender-material__cover-container">
              <Cover
                url="images/book_cover_3.jpg"
                size="medium"
                animate={false}
                tint="120"
              />
            </div>
            <div className="recommender-material__meta">
              <a className="recommender-material__title">{recTitle}</a>
              <div className="recommender-material__author">{authors}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recommender;