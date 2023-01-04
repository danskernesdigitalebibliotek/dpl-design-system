import { AvailabilityLabelPropsType } from "../../availability-label/types";
import AvailabilityLabel from "../availability-label/AvailabilityLabel";
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
  availabilityLabels: number;
};

export const SearchResultItem = ({
  heartFill,
  title,
  author,
  year,
  horizontalTermLineData,
  availabilityLabels,
}: SearchResultItemProps) => {
  const materialTypes: AvailabilityLabelPropsType["manifestationType"][] = [
    "Bog",
    "Ebog",
    "Lydbog (net)",
    "Lydbog (cd-mp3)",
  ];

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
        {/* We render the amount of availability labels defined by the story. */}
        {Array(availabilityLabels)
          .fill(0)
          .map((_value, index) => {
            return (
              // To emulate a more realistic view, we render a mix of available & unavailable
              // labels and cycle through different material types.
              <AvailabilityLabel
                manifestationType={
                  index < 4 ? materialTypes[index] : materialTypes[index % 4]
                }
                availability="Hjemme"
                status={index % 2 === 0 ? "available" : "unavailable"}
              />
            );
          })}
      </div>

      <ArrowSmallRight />
    </a>
  );
};
