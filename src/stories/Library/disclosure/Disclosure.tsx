import { useState } from "react";

export type DisclosureProps = {
  headline: string;
  children: React.ReactNode | string;
  icon: "Various" | "Receipt" | "Create" | "Profile";
};

export const Disclosure: React.FC<DisclosureProps> = ({
  headline,
  children,
  icon,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <details className="disclosure text-body-large">
      <summary
        className="disclosure__headline text-body-large"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div className="disclosure__icon bg-identity-tint-120 m-24">
          <img
            className="disclosure__icon"
            src={`icons/collection/${icon}.svg`}
            alt="various-icon"
          />
        </div>
        {headline}
        <img
          className={`disclosure__expand mr-24 noselect ${
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
