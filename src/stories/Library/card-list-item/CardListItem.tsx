import { AvailabilityLabelPropsType } from "../../availability-label/types";
import AvailabilityLabel from "../availability-label/AvailabilityLabel";
import Cover from "../cover/Cover";
import { ReactComponent as ArrowSmallRight } from "../Arrows/icon-arrow-ui/icon-arrow-ui-small-right.svg";
import { ButtonFavourite } from "../Buttons/button-favourite/ButtonFavourite";
import HorizontalTermLine, {
  HorizontalTermLineProps,
} from "../horizontal-term-line/HorizontalTermLine";
import { getCoverTint } from "../cover/helper";

export type CardListItemProps = {
  heartFill?: boolean;
  title: string;
  author: string;
  year: string;
  horizontalTermLineData?: HorizontalTermLineProps;
  availabilityLabels: number;
  tintIndex: number;
};

export const CardListItem = ({
  heartFill,
  title,
  author,
  year,
  horizontalTermLineData,
  availabilityLabels,
  tintIndex,
}: CardListItemProps) => {
  const materialTypes: AvailabilityLabelPropsType["manifestationType"][] = [
    "Bog",
    "Ebog",
    "Lydbog (net)",
    "Lydbog (cd-mp3)",
  ];

  return (
    <a href="/" className="card-list-item arrow arrow__hover--right-small">
      <div className="card-list-item__cover">
        <Cover
          src="images/book_cover_3.jpg"
          size="small"
          animate={false}
          tint={getCoverTint(tintIndex)}
        />
      </div>
      <div className="card-list-item__text">
        <div className="card-list-item__meta">
          <ButtonFavourite fill={heartFill} />
          {horizontalTermLineData && (
            <HorizontalTermLine {...horizontalTermLineData} />
          )}
        </div>

        <h2 className="card-list-item__title text-header-h4 mb-4">
          <a href="">{title}</a>
        </h2>
        <p className="text-small-caption">{`Af ${author} (${year})`}</p>
      </div>
      <div className="card-list-item__availability">
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
