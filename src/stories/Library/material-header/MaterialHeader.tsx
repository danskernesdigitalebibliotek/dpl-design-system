import AvailabilityLabel from "../availability-label/AvailabilityLabel";
import { ButtonFavourite } from "../Buttons/button-favourite/ButtonFavourite";
import { Button } from "../Buttons/button/Button";
import { generateId } from "../horizontal-term-line/HorizontalTermLine";
import Cover from "../cover/Cover";
import MaterialHeaderText from "./MaterialHeaderText";
import MaterialPeriodicalSelect from "./MaterialPeriodicalSelect";

const listOfAvailabilityLabels = [
  {
    manifestationType: "Bog",
    availability: "Hjemme",
    status: "selected",
    button: true,
  } as const,
  {
    manifestationType: "Bog",
    availability: "Hjemme",
    status: "available",
    button: true,
  } as const,
  {
    manifestationType: "Bog",
    availability: "Hjemme",
    status: "available",
    button: true,
  } as const,
  {
    manifestationType: "Bog",
    availability: "Hjemme",
    status: "available",
    button: true,
  } as const,
  {
    manifestationType: "Bog",
    availability: "Hjemme",
    status: "available",
    button: true,
  } as const,
].map((item, index) => <AvailabilityLabel {...item} key={generateId(index)} />);

interface MaterialHeaderProps {
  title: string;
  author: string;
  periodical?: boolean;
  ctaText?: string;
}

const MaterialHeader: React.FC<MaterialHeaderProps> = ({
  title,
  author,
  periodical,
  ctaText,
}) => {
  return (
    <header className="material-header">
      <div className="material-header__cover">
        <Cover
          src="images/book_cover_3_large.jpeg"
          size="xlarge"
          tint="120"
          animate
          shadow
        />
      </div>
      <div className="material-header__content">
        <ButtonFavourite />
        <MaterialHeaderText title={title} author={author} />
        <div className="material-header__availability-label">
          {listOfAvailabilityLabels}
        </div>
        {periodical && <MaterialPeriodicalSelect />}
        <div className="material-header__button">
          <Button
            label={periodical ? "RESERVER MAGASIN" : "RESERVER BOG"}
            buttonType="none"
            variant="filled"
            disabled={false}
            collapsible={false}
            size="large"
            classNames="capitalize-all"
          />
          <Button
            label="FIND PÅ HYLDEN"
            buttonType="none"
            variant="outline"
            disabled={false}
            collapsible={false}
            size="large"
            classNames="capitalize-all"
          />
        </div>
        {ctaText && <p className="mt-16 text-small-caption">{ctaText}</p>}
      </div>
    </header>
  );
};

export default MaterialHeader;
