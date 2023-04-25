import { ReactComponent as ArrowSmallRight } from "../../Arrows/icon-arrow-ui/icon-arrow-ui-small-right.svg";
import { IconExternalLink } from "../../Icons/icon-external-link/IconExternalLink";
import { ButtonType } from "./helper";

export interface ButtonIconProps {
  buttonType?: ButtonType;
  collapsible?: boolean;
}

export const ButtonIcon: React.FC<ButtonIconProps> = ({
  buttonType,
  collapsible,
}) => {
  const iconClassName = `ml-16 btn-icon ${
    collapsible ? "btn-collapsible" : ""
  }`;

  if (buttonType === "default") {
    return (
      <div className="ml-16">
        <ArrowSmallRight />
      </div>
    );
  }
  if (buttonType === "external-link") {
    return (
      <div className={iconClassName}>
        <IconExternalLink />
      </div>
    );
  }

  return null;
};
