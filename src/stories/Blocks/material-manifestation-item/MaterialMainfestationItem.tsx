import { useState } from "react";
import { AvailabilityLabel } from "../../Library/availability-label/AvailabilityLabel";
import { Button } from "../../Library/Buttons/button/Button";
import ListDescription, {
  ListData,
} from "../../Library/Lists/list-description/ListDescription";
import { Material } from "../../Library/material/Material";

export type MaterialMainfestationItemProps = {
  title: string;
  author: string;
  year: string;
  detailsData: ListData;
};

export const MaterialMainfestationItem = ({
  title,
  author,
  year,
  detailsData,
}: MaterialMainfestationItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="material-manifestation-item">
      <div className="material-manifestation-item__availability">
        <AvailabilityLabel
          manifestation="Bog"
          availability="Hjemme"
          status="available"
        />
      </div>
      <div className="material-manifestation-item__cover">
        <Material
          url="images/book_cover_3.jpg"
          size="small"
          animate={false}
          tint="120"
        />
      </div>
      <div className="material-manifestation-item__text">
        <h2 className="material-manifestation-item__title text-header-h4">
          {title}
        </h2>
        <p className="text-small-caption">{`Af ${author} (${year})`}</p>
        <div
          className={`material-manifestation-item__details ${
            isOpen ? "expanded" : ""
          }`}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <p className="link-tag text-small-caption">Detaljer om materialet </p>
          <img src="icons/collection/ExpandMore.svg" alt="ExpandMore" />
        </div>
        {isOpen && <ListDescription className="mt-24" data={detailsData} />}
      </div>

      <div className="material-manifestation-item__buttons">
        <Button
          label="RESERVER"
          buttonType="none"
          disabled={false}
          collapsible={false}
          size="small"
          variant="filled"
        />
        <span className="link-tag text-small-caption material-manifestation-item__find">
          Find på hylden
        </span>
      </div>
    </div>
  );
};
