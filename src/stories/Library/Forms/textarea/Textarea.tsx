import { FC } from "react";
import Label from "../label/Label";

export interface TextareaProps {
  id: string;
  name: string;
  label: string;
  rows?: number;
  cols?: number;
}

const Textarea: FC<TextareaProps> = ({
  id,
  name,
  label,
  rows = 8,
  cols = 80,
}) => {
  return (
    <div className="dpl-input">
      <Label id={id}>{label}</Label>
      <div>
        <textarea id={id} name={name} rows={rows} cols={cols} />
      </div>
    </div>
  );
};

export default Textarea;
