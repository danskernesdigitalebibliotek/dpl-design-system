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
      <Material
        url={"images/book_cover_3.jpg"}
        size={"small"}
        animate={false}
        tint={"120"}
      />
      <div className="search-result-element-content">
        <div className="search-result-element-content__text">
          <div className="search-result-element-content__text__top">
            <IconFavourite fill={heartFill} />

            {seriesNumber && (
              <div className="search-result-element-content__text__top__series-number text-small-caption">
                <span className="text-label-semibold">{`Nr. ${seriesNumber} `}</span>
                {series && (
                  <>
                    i serien{" "}
                    <a href="/" className="link-tag text-label-semibold">
                      {series}
                    </a>
                  </>
                )}
              </div>
            )}
          </div>
          <div className="search-result-element-content__text__bottom">
            <h2 className="text-header-h4">{title}</h2>
            <p className="text-small-caption">{`Af ${author} (${year})`}</p>
          </div>
        </div>
        <div className="search-result-element-availability">
          <AvailabilityLabel
            manifestation={"Bog"}
            availability={"Hjemme"}
            status={"available"}
          />
          <AvailabilityLabel
            manifestation={"Bog"}
            availability={"Hjemme"}
            status={"available"}
          />

          <AvailabilityLabel
            manifestation={"Lydbog (cd-mp3)"}
            availability={"Udlånt"}
            status={"unavailable"}
          />
          <AvailabilityLabel
            manifestation={"Lydbog (cd-mp3)"}
            availability={"Udlånt"}
            status={"unavailable"}
          />
        </div>
      </div>
    </div>
  );
};
