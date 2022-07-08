import { AvailabilityLabel } from "../availability-label/AvailabilityLabel";
import { Material } from "../material/Material";
import { ReactComponent as ArrowSmallRight } from "../../icons/arrow-ui/icon-arrow-ui-small-right.svg";
import { ButtonFavourite } from "../button-favourite/ButtonFavourite";
import MaterialLink, {
  SeriesLineProps,
} from "../material-series-line/material-series-line";

export type SearchResultItemProps = {
  heartFill?: boolean;
  title: string;
  author: string;
  year: string;
  materialLinkData?: SeriesLineProps;
};

export const SearchResultItem = ({
  heartFill,
  title,
  author,
  year,
  materialLinkData,
}: SearchResultItemProps) => {
  return (
    <a href="/" className="search-result-item arrow arrow__hover--right-small">
      <div className="search-result-item__cover">
        <Material
          url="images/book_cover_3.jpg"
          size="small"
          animate={false}
          tint="120"
        />
      </div>
      <div className="search-result-item__text">
        <div className="search-result-item__meta">
          <ButtonFavourite fill={heartFill} />
          {materialLinkData && <MaterialLink {...materialLinkData} />}
        </div>

        <h2 className="search-result-item__title text-header-h4">{title}</h2>
        <p className="text-small-caption">{`Af ${author} (${year})`}</p>
      </div>
      <div className="search-result-item__availability">
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
    </a>
  );
};
