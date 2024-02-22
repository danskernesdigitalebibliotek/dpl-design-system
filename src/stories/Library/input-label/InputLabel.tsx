export type InputLabelProps = {
  text: string;
};

export const InputLabel: React.FC<InputLabelProps> = ({ text }) => {
  return <label className="input-label">{text}</label>;
};
