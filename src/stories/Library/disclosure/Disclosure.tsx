import { useState } from "react";
import { clsx } from "clsx";
import AvailabilityLabel from "../availability-label/AvailabilityLabel";

export type DisclosureProps = {
  headline: string;
  children: React.ReactNode | string;
  icon?: "Various" | "Receipt" | "Create" | "Profile";
  withAvailability?: boolean;
  fullWidth?: boolean;
  removeHeadlinePadding?: boolean;
};

export const Disclosure: React.FC<DisclosureProps> = ({
  headline,
  children,
  icon,
  withAvailability,
  fullWidth = false,
  removeHeadlinePadding,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <details
      className={clsx(
        "disclosure text-body-large",
        fullWidth && "disclosure--full-width"
      )}
    >
      <summary
        className={clsx(
          "disclosure__headline text-body-large",
          removeHeadlinePadding && "disclosure__headline--no-padding"
        )}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {!withAvailability && icon && (
          <div className="disclosure__icon bg-identity-tint-120">
            <img
              className="invert"
              src={`icons/collection/${icon}.svg`}
              alt="various-icon"
            />
          </div>
        )}
        <span
          className={`disclosure__text ${
            withAvailability ? "disclosure__text--shorter" : ""
          }`}
        >
          {headline}
        </span>
        {withAvailability && (
          <AvailabilityLabel availability="Hjemme" status="available" />
        )}
        <img
          className={`disclosure__expand noselect ${
            isOpen ? "disclosure__expand-open" : ""
          }`}
          src="icons/collection/ExpandMore.svg"
          alt="various-icon"
        />
      </summary>
      {children}
    </details>
  );
};

export default Disclosure;
