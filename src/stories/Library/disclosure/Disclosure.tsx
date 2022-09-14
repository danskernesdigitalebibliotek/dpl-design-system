import { useState } from "react";
import { AvailabilityLabel } from "../availability-label/AvailabilityLabel";

export type DisclosureProps = {
  headline: string;
  children: React.ReactNode | string;
  icon: "Various" | "Receipt" | "Create" | "Profile";
  withAvailability?: boolean;
  fullWidth?: boolean;
};

export const Disclosure: React.FC<DisclosureProps> = ({
  headline,
  children,
  icon,
  withAvailability,
  fullWidth = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <details
      className={`disclosure text-body-large ${
        fullWidth ? "disclosure--full-width" : ""
      }`}
    >
      <summary
        className="disclosure__headline text-body-large"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {!withAvailability && (
          <div className="disclosure__icon bg-identity-tint-120">
            <img
              className="invert"
              src={`icons/collection/${icon}.svg`}
              alt="various-icon"
            />
          </div>
        )}
        {!withAvailability && (
          <span className="disclosure__text">{headline}</span>
        )}
        {withAvailability && (
          <span className="disclosure__text--shorter">{headline}</span>
        )}
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
