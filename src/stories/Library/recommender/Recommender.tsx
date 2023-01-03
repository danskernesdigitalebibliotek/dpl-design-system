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
};

const Recommender: React.FC<RecommenderProps> = ({
  recommenderData,
  title,
}) => {
  return (
    <div className="recommender">
      <h2 className="recommender__title text-header-h1">{title}</h2>
      <ul className="recommender__grid">
        {recommenderData.map(({ title: recTitle, filled, authors }) => (
          <li className="recommender-material">
            <div className="recommender-material__favourite">
              <div className="button-favourite button-favourite">
                <SvgIcon
                  className={`icon-favourite icon-favourite--bright ${
                    filled ? "icon-favourite--bright-filled" : ""
                  }`}
                />
              </div>
            </div>
            <div className="recommender-material__cover-container ">
              <Cover
                url="images/book_cover_3.jpg"
                size="medium"
                animate={false}
                tint="120"
              />
            </div>
            <div className="recommender-material__meta">
              <h3 className="recommender-material__meta__title">{recTitle}</h3>
              <div className="recommender-material__meta__author">
                {authors}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recommender;
