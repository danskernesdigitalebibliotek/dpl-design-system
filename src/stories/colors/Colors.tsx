import React from "react";
import "../../styles/css/base.css";

export const Colors = () => {
  return (
    <div>
      {colorClasses.map((color) => (
        <div style={{ marginTop: "20px" }}>
          <h1 className="text-header-h3">{color.colorTitle}</h1>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gridGap: "30px",
              marginTop: "40px",
              marginBottom: "40px",
            }}
          >
            {color.colorItems.map((colorItem) => (
              <div>
                <div
                  style={{ width: "150px", height: "150px" }}
                  className={colorItem.classNameBg || colorItem.className}
                />
                <code
                  style={{ marginTop: "15px" }}
                  className="text-small-caption"
                >
                  .{colorItem.className}
                </code>
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
    title: string;
    classNameBg?: string;
  }[];
}[];
const colorClasses: ColorClasses = [
  {
    colorTitle: "Globale farver",
    colorItems: [
      {
        className: "bg-global-primary",
        title: "Primary Background Color",
      },
      {
        className: "bg-global-secondary",
        title: "Secondary Background Color",
      },
      {
        className: "bg-global-tertiary",
        title: "Tertiary Background Color",
      },
    ],
  },
  {
    colorTitle: "Identitetsfarver",
    colorItems: [
      {
        className: "bg-identity-primary",
        title: "Primary Background Color",
      },
    ],
  },
  {
    colorTitle: "Tekst farver",
    colorItems: [
      {
        className: "color-primary-white",
        title: "Primary Color White",
        classNameBg: "bg-color-primary-white",
      },
      {
        className: "color-primary-black",
        title: "Primary Color Black",
        classNameBg: "bg-color-primary-black",
      },
      {
        className: "color-secondary-gray",
        title: "Secondary Color Gray",
        classNameBg: "bg-color-secondary-gray",
      },
    ],
  },
  {
    colorTitle: "Signal farver",
    colorItems: [
      {
        className: "bg-signal-success",
        title: "Success Background Color",
      },
      {
        className: "bg-signal-aware",
        title: "Aware Background Color",
      },
      {
        className: "bg-signal-alert",
        title: "Alert Background Color",
      },
    ],
  },
];
