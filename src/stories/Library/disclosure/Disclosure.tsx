import { useState } from "react";
import { clsx } from "clsx";
import AvailabilityLabel from "../availability-label/AvailabilityLabel";
import Heading, { HeadingLevelType } from "../heading/Heading";

export type DisclosureProps = {
  headline: string;
  children: React.ReactNode | string;
  icon?: "Various" | "Receipt" | "Create" | "Profile";
  withAvailability?: boolean;
  fullWidth?: boolean;
  removeHeadlinePadding?: boolean;
  headingLevel: HeadingLevelType;
  contentPadding?: boolean;
};

const Disclosure: React.FC<DisclosureProps> = ({
  headline,
  children,
  icon,
  withAvailability,
  fullWidth = false,
  removeHeadlinePadding,
  headingLevel,
  contentPadding = false,
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
        <Heading
          level={headingLevel}
          className={`text-body-large disclosure__text ${
            withAvailability ? "disclosure__text--shorter" : ""
          }`}
        >
          {headline}
        </Heading>
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
      {contentPadding ? (
        <div className="disclosure__content-padding">{children}</div>
      ) : (
        children
      )}
    </details>
  );
};

export default Disclosure;
