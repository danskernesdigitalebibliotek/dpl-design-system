import clsx from "clsx";
import { ButtonIcon } from "../Buttons/button/ButtonIcon";
import {
  ButtonSize,
  ButtonType,
  ButtonVariant,
  getSize,
  getVariant,
} from "../Buttons/button/helper";

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
        "hide-linkstyle",
        classNames
      )}
    >
      {text}
      <ButtonIcon buttonType={buttonType} variant={variant} />
    </a>
  );
};
