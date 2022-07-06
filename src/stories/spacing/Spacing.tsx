import React from "react";

const scaleValues = [8, 16, 24, 32, 48, 64, 80, 96, 112];

const spaceClasses = [
  {
    classPrefix: "m",
    classProperty: "margin",
  },
  {
    classPrefix: "mx",
    classProperty: "margin-left, margin-right",
  },
  {
    classPrefix: "my",
    classProperty: "margin-top, margin-bottom",
  },
  {
    classPrefix: "ml",
    classProperty: "margin-left",
  },
  {
    classPrefix: "mr",
    classProperty: "margin-right",
  },
  {
    classPrefix: "mb",
    classProperty: "margin-bottom",
  },
  {
    classPrefix: "mt",
    classProperty: "margin-top",
  },
  {
    classPrefix: "p",
    classProperty: "padding",
  },
  {
    classPrefix: "px",
    classProperty: "padding-left, padding-right",
  },
  {
    classPrefix: "py",
    classProperty: "padding-top, padding-bottom",
  },
  {
    classPrefix: "pl",
    classProperty: "padding-left",
  },
  {
    classPrefix: "pr",
    classProperty: "padding-right",
  },
  {
    classPrefix: "pb",
    classProperty: "padding-bottom",
  },
  {
    classPrefix: "pt",
    classProperty: "padding-top",
  },
];

export const Spacing = () => {
  return (
    <div className="internal-spacing-container">
      <div>
        <p className="text-body-large">Scale Values</p>
        <div className="mt-32 mb-32">
          {scaleValues.map((scaleValue) => (
            <div className="internal-spacing-scale-inner mb-24">
              <div className="mr-24 text-tags">{scaleValue}px</div>
              <div className={`pt-${scaleValue} internal-spacing-scale-box`} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="text-body-large">CSS Classes / CSS properties</p>
        <div className="internal-spacing-css-wrapper mt-24">
          {spaceClasses.map((spaceClass) => (
            <div className="internal-spacing-css-inner">
              <div className="internal-spacing-css-inner-prefix p-8">
                <pre>
                  <code>{`.${spaceClass.classPrefix}-[SCALE_VALUE]`}</code>
                </pre>
              </div>
              <div className="internal-spacing-css-inner-property p-8">
                {spaceClass.classProperty}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Spacing;
