import clsx from "clsx";
import { ButtonIcon } from "./ButtonIcon";
import { getSize, getVariant } from "./helper";
import { ButtonSize, ButtonType, ButtonVariant } from "./types";

export type LinkButtonProps = {
  href: string;
  text: string;
  size: ButtonSize;
  variant: ButtonVariant;
  classNames?: string;
  buttonType?: ButtonType;
  target?: "_blank" | "_self" | "_parent" | "_top";
};

export const LinkButton = ({
  href,
  text,
  classNames,
  size,
  variant,
  buttonType,
  target,
}: LinkButtonProps) => {
  return (
    <a
      target={target}
      href={href}
      className={clsx(
        "btn-primary",
        getVariant(variant),
        getSize(size),
        "arrow__hover--right-small",
        classNames
      )}
    >
      {text}
      <ButtonIcon buttonType={buttonType} />
    </a>
  );
};
