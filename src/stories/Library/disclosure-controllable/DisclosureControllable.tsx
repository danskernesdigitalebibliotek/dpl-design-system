import React, { ReactNode, useCallback, useState } from "react";

export interface DisclosureControllableProps {
  id: string;
  children: ReactNode;
  detailsClassName: string;
  summary: ReactNode;
  summaryClassName: string;
  showContent?: boolean;
}

const DisclosureControllable: React.FunctionComponent<
  DisclosureControllableProps
> = ({
  id,
  children,
  detailsClassName,
  summary,
  summaryClassName,
  showContent = false,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(showContent);

  const toggleOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const onKeyDown = useCallback(
    (e: { key: string }) => {
      if (e.key === "Enter" || e.key === " ") {
        toggleOpen();
      }
    },
    [toggleOpen],
  );

  const disclosureId = `disclosure-${id}`;
  return (
    <div className={detailsClassName}>
      <div
        className={summaryClassName}
        onClick={toggleOpen}
        onKeyDown={onKeyDown}
        role="button"
        tabIndex={0}
        aria-controls={disclosureId}
        aria-expanded={isOpen}
      >
        {summary}
      </div>
      {isOpen && <div id={disclosureId}>{children}</div>}
    </div>
  );
};

export default DisclosureControllable;
