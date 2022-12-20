import { AvailabilityLabel } from "../availability-label/AvailabilityLabel";
import { Cover } from "../cover/Cover";
import { ReactComponent as ArrowSmallRight } from "../Arrows/icon-arrow-ui/icon-arrow-ui-small-right.svg";
import { ButtonFavourite } from "../Buttons/button-favourite/ButtonFavourite";
import HorizontalTermLine, {
  HorizontalTermLineProps,
} from "../horizontal-term-line/HorizontalTermLine";

export type SearchResultItemProps = {
  heartFill?: boolean;
  title: string;
  author: string;
  year: string;
  horizontalTermLineData?: HorizontalTermLineProps;
};

export const SearchResultItem = ({
  heartFill,
  title,
  author,
  year,
  horizontalTermLineData,
}: SearchResultItemProps) => {
  return (
    <a href="/" className="search-result-item arrow arrow__hover--right-small">
      <div className="search-result-item__cover">
        <Cover
          url="images/book_cover_3.jpg"
          size="small"
          animate={false}
          tint="120"
        />
      </div>
      <div className="search-result-item__text">
        <div className="search-result-item__meta">
          <ButtonFavourite fill={heartFill} />
          {horizontalTermLineData && (
            <HorizontalTermLine {...horizontalTermLineData} />
          )}
        </div>

        <h2 className="search-result-item__title text-header-h4">
          <a href="">{title}</a>
        </h2>
        <p className="text-small-caption">{`Af ${author} (${year})`}</p>
      </div>
      <div className="search-result-item__availability">
        <AvailabilityLabel
          manifestationType="Bog"
          availability="Hjemme"
          status="available"
        />
        <AvailabilityLabel
          manifestationType="Ebog"
          availability="Online"
          status="available"
        />

        <AvailabilityLabel
          manifestationType="Lydbog (cd-mp3)"
          availability="Udlånt"
          status="unavailable"
        />
        <AvailabilityLabel
          manifestationType="Lydbog (net)"
          availability="Online"
          status="available"
        />
      </div>

      <ArrowSmallRight />
    </a>
  );
};
