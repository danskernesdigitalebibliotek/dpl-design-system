import Input from "./Input";

export type DoubleInputRowProps = {
  leftLabel: string;
  rightLabel: string;
  descriptionLeft?: string;
  descriptionRight?: string;
  validationLeft?: string;
  validationRight?: string;
};

const DoubleInputRow: React.FC<DoubleInputRowProps> = ({
  leftLabel,
  rightLabel,
  descriptionLeft,
  descriptionRight,
  validationLeft,
  validationRight,
}) => {
  return (
    <div className="dpl-input__flex">
      <Input
        id={leftLabel}
        label={leftLabel}
        description={descriptionLeft}
        validation={validationLeft}
        type="text"
        classNames="dpl-input dpl-input--double mr-16"
      />
      <Input
        id={rightLabel}
        label={rightLabel}
        description={descriptionRight}
        validation={validationRight}
        type="text"
        classNames="dpl-input dpl-input--double"
      />
    </div>
  );
};

export default DoubleInputRow;
