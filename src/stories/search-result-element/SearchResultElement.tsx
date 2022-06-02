import { AvailabilityLabel } from "../availability-label/AvailabilityLabel";
import { IconFavourite } from "../icon/icon-favourite/IconFavourite";
import { Material } from "../material/Material";
import { ReactComponent as ArrowSmallRight } from "../../icons/arrow-ui/icon-arrow-ui-small-right.svg";

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
  title,
  author,
  year,
  seriesNumber,
  series,
}: SearchResultElementProps) => {
  return (
    <div className="search-result-element arrow arrow__hover--right-small">
      <div className="search-result-element__cover">
        <Material
          url="images/book_cover_3.jpg"
          size="small"
          animate={false}
          tint="120"
        />
      </div>
      <div className="search-result-element__text">
        <div className="search-result-element__meta">
          <IconFavourite fill={heartFill} />

          {seriesNumber && (
            <div className="text-small-caption">
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
        <h2 className="search-result-element__title text-header-h4">{title}</h2>
        <p className="text-small-caption">{`Af ${author} (${year})`}</p>
      </div>
      <div className="search-result-element__availability">
        <AvailabilityLabel
          manifestation="Bog"
          availability="Hjemme"
          status="available"
        />
        <AvailabilityLabel
          manifestation="Ebog"
          availability="Online"
          status="available"
        />

        <AvailabilityLabel
          manifestation="Lydbog (cd-mp3)"
          availability="Udlånt"
          status="unavailable"
        />
        <AvailabilityLabel
          manifestation="Lydbog (net)"
          availability="Online"
          status="available"
        />
      </div>

      <ArrowSmallRight />
    </div>
  );
};
