export type InputLabelProps = {
  text: string;
  required?: boolean;
};

export const InputLabel: React.FC<InputLabelProps> = ({ text, required }) => {
  const labelClass = `input-label ${required ? "input-label--required" : ""}`;
  return <label className={labelClass}>{text}</label>;
};
