// There is something fundamentally wrong with the types in this file.
// TODO: It needs to fixed!
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";

function hexToHSL(H: string) {
  // Convert hex to RGB first
  let r: any = 0;
  let g: any = 0;
  let b: any = 0;
  if (H.length === 4) {
    r = `0x${H[1]}${H[1]}`;
    g = `0x${H[2]}${H[2]}`;
    b = `0x${H[3]}${H[3]}`;
  } else if (H.length === 7) {
    r = `0x${H[1]}${H[2]}`;
    g = `0x${H[3]}${H[4]}`;
    b = `0x${H[5]}${H[6]}`;
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

  if (delta === 0) h = 0;
  else if (cmax === r) h = ((g - b) / delta) % 6;
  else if (cmax === g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0) h += 360;

  l = (cmax + cmin) / 2;
  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
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
    colorTitle: "Identity color",
    colorItems: [
      {
        className: "bg-identity-primary",
      },
    ],
  },
  {
    colorTitle: "Identity color tones",
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
                  className={`internal-colors-box ${
                    colorItem.classNameBg || colorItem.className
                  }`}
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
          For generating the identity color tones we have used <code>HSL</code>
          (Hue, Saturation, Lightness) values. <br />
          To change the identity color it is necessary to set 3 variables in the
          <code>:root</code> element corresponding to each value in
          <code>HSL</code>. With Javascript you can achieve this by running the
          following commands (remember to replace the <code>h</code>,
          <code>s</code> and <code>l</code> values).
        </p>
        <pre>
          <code>
            document.documentElement.style.setProperty(&quot;--identity-color-h&quot;,
            [h]);
          </code>
          <code>
            document.documentElement.style.setProperty(&quot;--identity-color-s&quot;,
            [s]);
          </code>
          <code>
            document.documentElement.style.setProperty(&quot;--identity-color-l&quot;,
            [l]);
          </code>
        </pre>
        <p className="text-body-medium-regular">
          By changing the HSL values it will automatically calculate the color
          tones.
        </p>
        <p className="text-body-medium-regular mt-24">
          In &quot;Controls&quot; within the addon panel it is possible to
          change the color with the color-picker and directly see the color
          tones being generated. This feature is only to visualize the color
          tones in storybook and does not change any underlying code.
          <br />
        </p>
      </div>
    </div>
  );
};
