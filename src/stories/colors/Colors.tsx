import React from "react";
import "../../styles/css/base.css";

export const Colors = () => {
  return (
    <div>
      {colorClasses.map((color) => (
        <div className="internal-colors-container">
          <h1 className="text-header-h3">{color.colorTitle}</h1>
          <div className="internal-colors-wrapper">
            {color.colorItems.map((colorItem) => (
              <div>
                <div
                  className={
                    "internal-colors-box " +
                    (colorItem.classNameBg || colorItem.className)
                  }
                />
                <pre>
                  <code>.{colorItem.className}</code>
                </pre>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

type ColorClasses = {
  colorTitle: string;
  colorItems: {
    className: string;
    classNameBg?: string;
  }[];
}[];
const colorClasses: ColorClasses = [
  {
    colorTitle: "Globale farver",
    colorItems: [
      {
        className: "bg-global-primary",
      },
      {
        className: "bg-global-secondary",
      },
      {
        className: "bg-global-tertiary-1",
      },
      {
        className: "bg-global-tertiary-2",
      },
    ],
  },
  {
    colorTitle: "Identitetsfarver",
    colorItems: [
      {
        className: "bg-identity-primary",
      },
    ],
  },
  {
    colorTitle: "Toner",
    colorItems: [
      {
        className: "bg-identity-tint-120",
      },
      {
        className: "bg-identity-tint-80",
      },
      {
        className: "bg-identity-tint-60",
      },
      {
        className: "bg-identity-tint-40",
      },
      {
        className: "bg-identity-tint-20",
      },
    ],
  },
  {
    colorTitle: "Tekst farver",
    colorItems: [
      {
        className: "color-primary-white",
        classNameBg: "bg-color-primary-white",
      },
      {
        className: "color-primary-black",
        classNameBg: "bg-color-primary-black",
      },
      {
        className: "color-secondary-gray",
        classNameBg: "bg-color-secondary-gray",
      },
    ],
  },
  {
    colorTitle: "Signal farver",
    colorItems: [
      {
        className: "bg-signal-success",
      },
      {
        className: "bg-signal-aware",
      },
      {
        className: "bg-signal-alert",
      },
    ],
  },
];
