export type ButtonUIProps = {
  icon?: {
    url: string;
    alt: string;
  };
  label?: string;
  classes?: string;
};

export const ButtonUI = (props: ButtonUIProps) => {
  const { label, icon, classes } = props;

  return (
    <button type="button" className={`button-ui ${classes || ""}`}>
      {icon && <img src={icon.url} alt={icon.alt} />}
      {label && label}
    </button>
  );
};
