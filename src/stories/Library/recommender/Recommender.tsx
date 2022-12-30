import { Cover } from "../cover/Cover";
import { ReactComponent as SvgIcon } from "../Icons/icon-favourite/icon-favourite.svg";

const Recommender: React.FC = () => {
  return (
    <div className="recommender">
      <h1 className="text-header-h1">
        Kunne du lide “Audrey Hepburn” og mangler du noget at læse?
      </h1>
      <div className="recommender-grid">
        {Array.from(Array(4).keys()).map(() => (
          <div className="recommender__grid__material">
            <div className="button-favourite">
              <SvgIcon
                className={
                  Math.random() < 0.5
                    ? "icon-favourite icon-favourite--filled"
                    : "icon-favourite"
                }
              />
            </div>
            <Cover
              url="images/book_cover_3.jpg"
              size="medium"
              animate={false}
              tint="120"
            />
            <div className="recommender__grid__material__text">
              <div className="recommender__grid__material__text__title">
                En bog
              </div>
              <div className="recommender__grid__material__text__author">
                Af forfatter1 og forfatter2
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommender;
