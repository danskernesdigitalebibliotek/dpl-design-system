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
    <div className="contact-info-flex">
      <Input
        id={leftLabel}
        label={leftLabel}
        type="text"
        classNames="patron__input patron__input--desktop mr-16"
      />
      <Input
        id={rightLabel}
        label={rightLabel}
        type="text"
        classNames="patron__input patron__input--desktop"
      />
    </div>
  );
};

export default DoubleInputRow;
