import Input from "./Input";

export type DoubleInputRowProps = {
  leftLabel: string;
  rightLabel: string;
};

const DoubleInputRow: React.FC<DoubleInputRowProps> = ({
  leftLabel,
  rightLabel,
}) => {
  return (
    <div className="dpl-input__flex">
      <Input
        id={leftLabel}
        label={leftLabel}
        type="text"
        classNames="dpl-input dpl-input--double mr-16"
      />
      <Input
        id={rightLabel}
        label={rightLabel}
        type="text"
        classNames="dpl-input dpl-input--double"
      />
    </div>
  );
};

export default DoubleInputRow;
