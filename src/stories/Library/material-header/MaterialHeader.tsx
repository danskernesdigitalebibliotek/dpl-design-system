import React from "react";
import { AvailabilityLabel } from "../availability-label/AvailabilityLabel";
import { ButtonFavourite } from "../Buttons/button-favourite/ButtonFavourite";
import { Button } from "../Buttons/button/Button";
import { Material } from "../material/Material";
import MaterialHeaderText from "./MaterialHeaderText";
import MaterialPeriodikumSelect from "./MaterialPeriodikumSelect";

const listOfAvailabilityLabels = [
  {
    manifestation: "Bog",
    availability: "Hjemme",
    status: "selected",
  } as const,
  {
    manifestation: "Bog",
    availability: "Hjemme",
    status: "available",
  } as const,
  {
    manifestation: "Bog",
    availability: "Hjemme",
    status: "available",
  } as const,
  {
    manifestation: "Bog",
    availability: "Hjemme",
    status: "available",
  } as const,
  {
    manifestation: "Bog",
    availability: "Hjemme",
    status: "available",
  } as const,
].map((item) => <AvailabilityLabel {...item} />);

interface MaterialHeaderProps {
  title: string;
  author: string;
  periodikum?: boolean;
  ctaText?: string;
}

const MaterialHeader: React.FC<MaterialHeaderProps> = ({
  title,
  author,
  periodikum,
  ctaText,
}) => {
  return (
    <header className="material-header">
      <div className="material-header__cover">
        <Material
          url="images/book_cover_3.jpg"
          size="large"
          tint="120"
          animate
        />
      </div>
      <div className="material-header__content">
        <ButtonFavourite />
        <MaterialHeaderText title={title} author={author} />
        <div className="material-header__availability-label">
          {listOfAvailabilityLabels}
        </div>
        {periodikum && <MaterialPeriodikumSelect />}
        <div className="material-header__button">
          <Button
            label={periodikum ? "RESERVER MAGASIN" : "RESERVER BOG"}
            buttonType="none"
            variant="filled"
            disabled={false}
            collapsible={false}
            size="large"
          />
          <Button
            label="FIND PÅ HYLDEN"
            buttonType="none"
            variant="outline"
            disabled={false}
            collapsible={false}
            size="large"
          />
        </div>
        {ctaText && <p className="mt-16 text-small-caption">{ctaText}</p>}
      </div>
    </header>
  );
};

export default MaterialHeader;
