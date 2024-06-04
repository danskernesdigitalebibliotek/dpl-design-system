import { useState, FC } from "react";
import { Checkbox } from "../../Forms/checkbox/Checkbox";
import { StatusLabel, StatusLabelProps } from "../../status-label/StatusLabel";
import { ReactComponent as ArrowSmallRight } from "../../Arrows/icon-arrow-ui/icon-arrow-ui-small-right.svg";

export type ListMaterialsProps = {
  title: string;
  author: string;
  year: string;
  statusMessage: string;
  statusMaterialType: StatusLabelProps;
  isChecked: boolean;
  disabled: boolean;
};

export const ListMaterials: FC<ListMaterialsProps> = ({
  title,
  year,
  author,
  statusMaterialType,
  isChecked,
  statusMessage,
  disabled,
}) => {
  const [isItChecked, setIsItChecked] = useState(isChecked);

  const handleToggle = (state: boolean) => {
    setIsItChecked(state);
  };

  return (
    <>
      <li>
        <div
          className={`list-materials ${
            disabled ? "list-materials--disabled" : ""
          }`}
        >
          <div className="list-materials__checkbox mr-32">
            <Checkbox isChecked={false} hiddenLabel label={`Select ${title}`} />
          </div>
          <div className="list-materials__content">
            <div className="list-materials__content-status">
              <StatusLabel {...statusMaterialType} />
            </div>
            <div className="status-label status-label--neutral hide-on-desktop ml-16">
              Afleveres 27-04-2023
            </div>
            <p className="list-materials__content__header mt-8">{title}</p>
            <p className="text-small-caption">
              {author} ({year})
            </p>
            <div className="list-materials__status list-materials__status--mobile">
              {statusMessage && (
                <span className="list-materials__status__note-mobile">
                  {statusMessage}
                </span>
              )}
            </div>
          </div>
          <div className="list-materials__status list-materials__status--desktop">
            <div className="status-label status-label--neutral">
              Afleveres 27-04-2023
            </div>
            {statusMessage && (
              <span className="list-materials__status__note-desktop">
                {statusMessage}
              </span>
            )}
          </div>
          <div className="list-materials__arrow arrow-button">
            <ArrowSmallRight />
          </div>
        </div>
      </li>
      <li>
        <div className="list-materials">
          <div className="list-materials__checkbox mr-32">
            <Checkbox
              callback={handleToggle}
              isChecked={isItChecked}
              hiddenLabel
              label={`Select ${title}`}
            />
          </div>
          <div className="list-materials__content">
            <div className="list-materials__content-status">
              <div className="status-label status-label--outline">Bog</div>
              <div className="status-label status-label--neutral hide-on-desktop ml-16">
                Afleveres 27-04-2023
              </div>
            </div>
            <p className="list-materials__content__header mt-8">{title}</p>
            <p className="text-small-caption">
              {author} ({year})
            </p>
          </div>
          <div className="list-materials__status list-materials__status--desktop">
            <div>
              <div className="status-label status-label--neutral">
                Afleveres 27-04-2023
              </div>
            </div>
          </div>
          <div className="list-materials__arrow arrow-button">
            <ArrowSmallRight />
          </div>
        </div>
      </li>
    </>
  );
};
