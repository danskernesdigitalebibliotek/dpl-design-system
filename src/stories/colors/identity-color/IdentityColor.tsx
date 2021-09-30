import React, { useEffect } from "react";
import "../../../styles/css/base.css";

export type IdentityColorProps = {
  identityColor: string;
};
export const IdentityColor = ({ identityColor }: IdentityColorProps) => {
  useEffect(() => {
    const { h, s, l } = hexToHSL(identityColor);
    document.documentElement.style.setProperty("--identity-color-h", `${h}`);
    document.documentElement.style.setProperty("--identity-color-s", `${s}%`);
    document.documentElement.style.setProperty("--identity-color-l", `${l}%`);
  }, [identityColor]);

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

      <div className="internal-colors-code">
        <p className="text-body-medium-regular">
          Til at generere identitetsfarven/tonerne, er der brugt
          <code>HSL</code> (Hue, Saturation, Lightness) farve værdier. <br />
          For at ændre identitetsfarven/tonerne er det nødvendigt at sætte 3
          variabler i <code>:root</code> elementet, som svarer til de 3 værdier
          i <code>HSL</code>. <br />
          Med javascript er det muligt at tilføje følgende linjer kode for at
          ændre værdierne (husk at udskift <code>[h]</code>, <code>[s]</code>,
          og <code>[l]</code>):
        </p>
        {/* <p className="mt-24">
          To be able to change the primary identity color + tones, you will have
          to set 3 variables in the <code>:root</code> element. With javascript,
          you can achieve this by running the following commands (remember to
          replace the <code>h</code>, <code>s</code> and <code>l</code> value):
        </p> */}
        <pre>
          <code>
            document.documentElement.style.setProperty("--identity-color-h",
            [h]);
          </code>
          <code>
            document.documentElement.style.setProperty("--identity-color-s",
            [s]);
          </code>
          <code>
            document.documentElement.style.setProperty("--identity-color-l",
            [l]);
          </code>
        </pre>
        <p className="text-body-medium-regular mt-24">
          I addon panelet kan du under "Controls" skifte farve med farvehjulet
          og se de forskellige toner blive genereret med det samme. Det er dog
          kun til visuelt brug og ændrer ikke noget i den bagvedliggende kode.
          <br />
        </p>
      </div>
    </div>
  );
};

function hexToHSL(H: string) {
  // Convert hex to RGB first
  let r: any = 0;
  let g: any = 0;
  let b: any = 0;
  if (H.length == 4) {
    r = "0x" + H[1] + H[1];
    g = "0x" + H[2] + H[2];
    b = "0x" + H[3] + H[3];
  } else if (H.length == 7) {
    r = "0x" + H[1] + H[2];
    g = "0x" + H[3] + H[4];
    b = "0x" + H[5] + H[6];
  }
  // Then to HSL
  r /= 255;
  g /= 255;
  b /= 255;

  const cmin: any = Math.min(r, g, b);
  const cmax = Math.max(r, g, b);
  const delta = cmax - cmin;
  let h = 0;
  let s = 0;
  let l = 0;

  if (delta == 0) h = 0;
  else if (cmax == r) h = ((g - b) / delta) % 6;
  else if (cmax == g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0) h += 360;

  l = (cmax + cmin) / 2;
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return {
    h,
    s,
    l,
  };
}

type ColorClasses = {
  colorTitle: string;
  colorItems: {
    className: string;
    classNameBg?: string;
  }[];
}[];
const colorClasses: ColorClasses = [
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
];
