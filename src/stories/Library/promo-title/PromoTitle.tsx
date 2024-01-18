import clsx from "clsx";

type PromoTitleProps = {
  text: string;
  variant?: string;
};

export const PromoTitle = (props: PromoTitleProps) => {
  const { text, variant } = props;

  return (
    <h1 className={clsx("promo-title", `promo-title--${variant}`)}>{text}</h1>
  );
};

export default PromoTitle;
