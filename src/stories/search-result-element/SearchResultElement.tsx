import { AvailabilityLabel } from "../availability-label/AvailabilityLabel";
import { IconFavourite } from "../icon/icon-favourite/IconFavourite";
import { Material } from "../material/Material";

export type SearchResultElementProps = {
  heartFill?: boolean;
  title: string;
  author: string;
  year: string;
  seriesNumber?: string;
  series?: string;
};

export const SearchResultElement = ({
  heartFill,
  title = "Title",
  author = "Author",
  year = "2022",
  seriesNumber,
  series,
}: SearchResultElementProps) => {
  return (
    <div className="search-result-element">
      <div className="search-result-element__info">
        <Material
          url={"images/book_cover_3.jpg"}
          size={"small"}
          animate={false}
          tint={"120"}
        />
        <div className="search-result-element__info__text-content">
          <div className="search-result-element__info__text-content__top">
            <IconFavourite fill={heartFill} />

            {seriesNumber && (
              <div className="search-result-element__info__text-content__top__category-score text-small-caption">
                <span className="text-label-semibold">{`Nr. ${seriesNumber} `}</span>
                {series && (
                  <>
                    i serien{" "}
                    <span className="search-result-element__info__text-content__top__category-score__underline">
                      {series}
                    </span>
                  </>
                )}
              </div>
            )}
          </div>
          <div className="search-result-element__info__text-content__bottom">
            <h3 className="text-header-h3">{title}</h3>
            <p className="text-small-caption">{`Af ${author} (${year})`}</p>
          </div>
        </div>
      </div>
      <div className="search-result-element__availability">
        <AvailabilityLabel
          manifestation={"Bog"}
          availability={"Hjemme"}
          status={"available"}
        />
        <AvailabilityLabel
          manifestation={"Ebog"}
          availability={"Online"}
          status={"selected"}
        />
        <AvailabilityLabel
          manifestation={"Lydbog (cd-mp3)"}
          availability={"Udlånt"}
          status={"unavailable"}
        />
      </div>
    </div>
  );
};
