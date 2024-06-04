import { AvailabilityLabelPropsType } from "../../availability-label/types";
import PageFoldButton from "../Buttons/page-fold-button/PageFoldButton";
import Pagefold from "../pagefold/Pagefold";
import { withAvailabilityProps } from "./abilityLabel.hoc";
import { ReactComponent as CheckIcon } from "../../../public/icons/collection/Check.svg";

const AvailabilityLabel: React.FC<AvailabilityLabelPropsType> = ({
  manifestationType,
  availability,
  status,
  quantity,
  button,
}) => {
  const content = (
    <>
      <CheckIcon className={`availability-label__check ${status}`} />
      {manifestationType && (
        <>
          <p className="availability-label__text text-label-semibold ml-24">
            {manifestationType.toUpperCase()}
          </p>
          <div className="availability-label__divider ml-4" />
          <p className="text-label-normal ml-4 mr-8">{availability}</p>
        </>
      )}
      {!manifestationType && (
        <p className="availability-label__text text-label-normal ml-24 mr-8">
          {availability}
        </p>
      )}
      {quantity && (
        <>
          <div className="availability-label__divider ml-4" />
          <p className="availability-label__text text-label-normal mx-8">
            {quantity} stk
          </p>
        </>
      )}
    </>
  );

  const AvailabilityPagefold = withAvailabilityProps(Pagefold);
  const AvailabilityPagefoldButton = withAvailabilityProps(PageFoldButton);

  if (button) {
    return (
      <AvailabilityPagefoldButton status={status}>
        {content}
      </AvailabilityPagefoldButton>
    );
  }

  return <AvailabilityPagefold status={status}>{content}</AvailabilityPagefold>;
};

export default AvailabilityLabel;
