import { useState } from "react";
import { Checkbox } from "../../Forms/checkbox/Checkbox";
import { StatusLabel, StatusLabelProps } from "../../status-label/StatusLabel";

export type ListMaterialsProps = {
  title: string;
  author: string;
  statusMaterialType: StatusLabelProps;
  statusDelivery: StatusLabelProps;
  canBeRenewed: boolean;
  isChecked: boolean;
};

export const ListMaterials: React.FC<ListMaterialsProps> = ({
  title,
  author,
  statusDelivery,
  statusMaterialType,
  canBeRenewed,
  isChecked,
}) => {
  const [isItChecked, setIsItChecked] = useState(isChecked);

  const handleToggle = (state: boolean) => {
    setIsItChecked(state);
  };

  return (
    <div
      className={`list-materials ${
        isItChecked ? "list-materials__selected" : ""
      }`}
    >
      {canBeRenewed && (
        <div className="list-materials__checkbox mr-32">
          <Checkbox
            isChecked={isItChecked}
            callback={handleToggle}
            ariaLabel="Vælg materiale"
          />
        </div>
      )}
      <div className="list-materials__content">
        <div className="list-materials__content-status">
          <StatusLabel {...statusMaterialType} />
          <StatusLabel
            classNames="list-materials__content-status-label"
            {...statusDelivery}
          />
        </div>
        <p className="text-header-h5 mt-8">{title}</p>
        <p className="text-small-caption">{author}</p>
      </div>
      <div className="list-materials__status">
        {!canBeRenewed && (
          <span className="text-small-caption">
            Digitale materialer kan ikke fornys
          </span>
        )}
        <StatusLabel {...statusDelivery} />
      </div>
    </div>
  );
};
