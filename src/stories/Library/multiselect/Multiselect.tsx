import { Checkbox } from "../Forms/checkbox/Checkbox";
import { ReactComponent as ExpandMoreIcon } from "../../../public/icons/collection/ExpandMore.svg";

export type MultiselectProps = {
  options: string[];
  isOpen?: boolean;
  withCaption?: boolean;
};

export const Multiselect: React.FC<MultiselectProps> = ({
  options,
  isOpen = false,
  withCaption,
}) => {
  return (
    <>
      {withCaption && (
        <div className="multiselect__caption">Caption for multiselect</div>
      )}
      <div className="multiselect">
        <div className="multiselect__selected">
          Mulighed 1, Mulighed 2, Mulighed 3, Mulighed 4
        </div>
        <div className="multiselect__opener">
          <ExpandMoreIcon className="multiselect__icon" />
        </div>
        {isOpen && (
          <ul className="multiselect__options">
            {options.map((item, index) => (
              <li
                className={`multiselect__option ${
                  index === 0 ? "multiselect__option--highlighted" : ""
                }`}
                key={`${item}${index}`}
              >
                {item}
                <Checkbox
                  hiddenLabel
                  isChecked
                  ariaLabel={`checkbox ${item}`}
                  classNames="multiselect__checkbox"
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
