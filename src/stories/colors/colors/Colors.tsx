import "../../../styles/css/base.css";

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

      <div>
        <h1 className="text-header-h3">CSS-klasser</h1>
        <p className="text-body-medium-regular mt-24">
          Der er lavet en række css-klasser til henholdvis baggrundsfarver (bg),
          kanter (border), og tekst (color), som er til at finde i
          <code>scss/color-classes.scss</code> filen. Klasserne bruger
          henholdsvis <code>bg</code> / <code>border</code> / <code>color</code>
          som prefix. <br />
          Det er også muligt at bruge css-variabler fra
          <code>scss/color-variables.scss</code> direkte i css-filerne.
        </p>

        <p className="text-body-medium-regular mt-16">
          Eksempel: <br />
          <code>div</code> med <code>.bg-global-secondary</code>, og
          <code>p</code>-element med <code>.color-primary-black</code>:
        </p>
        <div className="bg-global-secondary p-32 mt-16">
          <p className="color-primary-black text-header-h2">Nyt på hylderne</p>
        </div>

        <div>
          <div className="internal-colors-wrapper">
            <div>
              <p className="text-body-large mb-8">Background classes</p>
              {bgClasses.map((bgClass) => (
                <div className="internal-spacing-css-inner">
                  <div className="internal-spacing-css-inner-prefix p-8">
                    <pre>
                      <code>{`.${bgClass.classPrefix}`}</code>
                    </pre>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p className="text-body-large mb-8">Border classes</p>
              {borderClasses.map((borderClass) => (
                <div className="internal-spacing-css-inner">
                  <div className="internal-spacing-css-inner-prefix p-8">
                    <pre>
                      <code>{`.${borderClass.classPrefix}`}</code>
                    </pre>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p className="text-body-large mb-8">Color (text) classes</p>
              {textColorClasses.map((textColorClass) => (
                <div className="internal-spacing-css-inner">
                  <div className="internal-spacing-css-inner-prefix p-8">
                    <pre>
                      <code>{`.${textColorClass.classPrefix}`}</code>
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
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

const bgClasses = [
  {
    classPrefix: "bg-global-primary",
  },
  {
    classPrefix: "bg-global-secondary",
  },
  {
    classPrefix: "bg-global-tertiary-1",
  },
  {
    classPrefix: "bg-global-tertiary-2",
  },
  {
    classPrefix: "bg-identity-primary",
  },
  {
    classPrefix: "bg-identity-tint-{tint}",
  },
  {
    classPrefix: "bg-signal-success",
  },
  {
    classPrefix: "bg-signal-aware",
  },
  {
    classPrefix: "bg-signal-alert",
  },
];

const borderClasses = [
  {
    classPrefix: "border-global-primary",
  },
  {
    classPrefix: "border-global-secondary",
  },
  {
    classPrefix: "border-global-tertiary-1",
  },
  {
    classPrefix: "border-global-tertiary-2",
  },
  {
    classPrefix: "border-identity-primary",
  },
  {
    classPrefix: "border-signal-success",
  },
  {
    classPrefix: "border-signal-aware",
  },
  {
    classPrefix: "border-signal-alert",
  },
];

const textColorClasses = [
  {
    classPrefix: "color-identity-primary",
  },
  {
    classPrefix: "color-primary-white",
  },
  {
    classPrefix: "color-primary-black",
  },
  {
    classPrefix: "color-primary-gray",
  },
  {
    classPrefix: "color-signal-success",
  },
  {
    classPrefix: "color-signal-aware",
  },
  {
    classPrefix: "color-signal-alert",
  },
];
