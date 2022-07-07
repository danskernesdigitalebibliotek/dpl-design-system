import { AvailabilityLabel } from "../availability-label/AvailabilityLabel";
import { Button } from "../button/Button";
import { Material } from "../material/Material";

export type MaterialMainfestationItemProps = {
  title: string;
  author: string;
  year: string;
};

const DetailList: React.FC = () => {
  type Values = {[k: string]: {value: string, type: "standard" | "link"}};
  const detailsListValues: Values = {
    Type: {value: "Bog", type: "standard"},
    Sprog: {value: "Dansk", type: "standard"},
    Bidragsydere: {value: "Karsten Sand Iversen", type: "link"},
    Originaltitel: {value: "Ulysses (1922)", type: "standard"},
    ISBN: {value: "9788763814584", type: "standard"},
    Udgave: {value: "Udgave, 2. oplag (2015)", type: "standard"},
    Omfang: {value: "795 sider", type: "standard"},
    Forlag: {value: "Rosinante", type: "standard"},
    Målgruppe: {value: "Voksenmateriale", type: "standard"},
  }
  return (
    <dl>
      {Object.keys(detailsListValues).map((key, i) => {
        const {value, type} =  detailsListValues[key as keyof Values];
        return (
          <>
            <dt>{key}:</dt>
            <dd>
              {type === "standard" && value}
              {type === "link" && <span className="link-tag">{value}</span>}
            </dd>
          </>
        );
      })}
    </dl>
  )
};

export const MaterialMainfestationItem = ({
  title,
  author,
  year,
}: MaterialMainfestationItemProps) => {
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
        <h2 className="material-manifestation-item__text__title text-header-h4">
          {title}
        </h2>
        <p className="text-small-caption">{`Af ${author} (${year})`}</p>
        <div className="material-manifestation-item__text__details expanded">
          <p className="link-tag text-small-caption">Detaljer om materialet </p>
          <img src="icons/collection/ExpandMore.svg" alt="ExpandMore" />
        </div>
        <div className="details-list mt-24">
          <DetailList />
          </div>
      </div>

      <div className="material-manifestation-item__reserve">
        <Button
          label="RESERVER"
          buttonType="none"
          disabled={false}
          collapsible={false}
          size="small"
          variant="filled"
        />
        <span className="link-tag text-small-caption material-manifestation-item__reserve__find">
          Find på hylden
        </span>
      </div>
    </div>
  );
};
