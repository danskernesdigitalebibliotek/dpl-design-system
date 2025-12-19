import { useState } from "react";
import AvailabilityLabel from "../../Library/availability-label/AvailabilityLabel";
import { Button } from "../../Library/Buttons/button/Button";
import ListDescription, {
  ListData,
} from "../../Library/Lists/list-description/ListDescription";
import Cover from "../../Library/cover/Cover";
import { CopyLink } from "../../Library/copy-link/CopyLink";
import { ReactComponent as ExpandMoreIcon } from "../../../public/icons/collection/ExpandMore.svg";
import MaterialContents from "../../Library/material-contents/MaterialContents";
import { Content } from "../../Library/material-contents/types";

export type MaterialMainfestationItemProps = {
  title: string;
  author: string;
  year: string;
  detailsData: ListData;
  defaultOpen?: boolean;
  contents?: Content[];
};

export const MaterialMainfestationItem = ({
  title,
  author,
  year,
  detailsData,
  defaultOpen = false,
  contents,
}: MaterialMainfestationItemProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

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
          <ExpandMoreIcon />
        </div>
        {isOpen && (
          <>
            <ListDescription className="mt-24" data={detailsData} />
            {contents && (
              <div className="mt-24">
                <MaterialContents contents={contents} />
              </div>
            )}
            <CopyLink label="Kopiér link til udgave" className="mt-24 mb-24" />
          </>
        )}
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
