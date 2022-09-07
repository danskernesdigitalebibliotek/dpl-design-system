import { AvailabilityLabelPropsType } from "../../availability-label/types";
import { Pagefold } from "../pagefold/Pagefold";
import { withAvailabilityProps } from "./abilityLabel.hoc";

export const AvailabilityLabel: React.FC<AvailabilityLabelPropsType> = ({
  manifestation,
  availability,
  status,
}) => {
  const AvailabilityPagefold = withAvailabilityProps(Pagefold);

  return (
    <AvailabilityPagefold status={status}>
      <img
        className={`availability-label--check ${status}`}
        src="icons/collection/Check.svg"
        alt="check-icon"
      />
      {manifestation && (
        <>
          <p className="text-label-semibold ml-24">
            {manifestation.toUpperCase()}
          </p>
          <div className="availability-label--divider ml-4" />
          <p className="text-label-normal ml-4 mr-8">{availability}</p>
        </>
      )}
      {!manifestation && (
        <p className="text-label-normal ml-24 mr-8">{availability}</p>
      )}
    </AvailabilityPagefold>
  );
};

export default AvailabilityLabel;
