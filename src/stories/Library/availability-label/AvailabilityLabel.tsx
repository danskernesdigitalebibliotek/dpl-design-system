import { AvailabilityLabelPropsType } from "../../availability-label/types";
import { Pagefold } from "../pagefold/Pagefold";
import { withAvailabilityProps } from "./abilityLabel.hoc";

export const AvailabilityLabel = (props: AvailabilityLabelPropsType) => {
  const { manifestation, availability, status } = props;
  const AvailabilityPagefold = withAvailabilityProps(Pagefold);

  return (
    <AvailabilityPagefold status={status}>
      <img
        className={`availability-label--check ${status}`}
        src="icons/collection/Check.svg"
        alt="check-icon"
      />
      <p className="text-label-semibold ml-24">{manifestation.toUpperCase()}</p>
      <div className="availability-label--divider ml-4" />
      <p className="text-label-normal ml-4 mr-8">{availability}</p>
    </AvailabilityPagefold>
  );
};

export default AvailabilityLabel;
