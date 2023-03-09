import { useState } from "react";
import AvailabilityLabel from "../../Library/availability-label/AvailabilityLabel";
import { Button } from "../../Library/Buttons/button/Button";
import ListDescription, {
  ListData,
} from "../../Library/Lists/list-description/ListDescription";
import Cover from "../../Library/cover/Cover";

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
          manifestationType="Bog"
          availability="Hjemme"
          status="available"
        />
      </div>
      <div className="material-manifestation-item__cover">
        <Cover
          src="images/book_cover_3.jpg"
          size="small"
          animate={false}
          tint="120"
        />
      </div>
      <div className="material-manifestation-item__text">
        <h3 className="material-manifestation-item__title text-header-h4">
          {title}
        </h3>
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
          classNames="reserve-button"
        />
        <button className="link-tag text-small-caption material-manifestation-item__find">
          Find på hylden
        </button>
      </div>
    </div>
  );
};
