import { useState, useEffect } from "react";
import { Button } from "../Buttons/button/Button";

type CookiePlaceholderProps = {
  info: string;
  buttonText: string;
  src: string;
  acceptCookies: boolean;
};

export const CookiePlaceholder = ({
  info,
  buttonText,
  src,
  acceptCookies: acceptCookiesProp,
}: CookiePlaceholderProps) => {
  const [acceptCookies, setAcceptCookies] = useState(acceptCookiesProp);

  useEffect(() => {
    setAcceptCookies(acceptCookiesProp);
  }, [acceptCookiesProp]);

  const handleButtonClick = () => {
    setAcceptCookies(!acceptCookies);
  };

  return (
    <section className="video-embed">
      <div className="video-embed__wrapper">
        <iframe
          className={`${acceptCookies ? "" : "cookie-placeholder__hide"}`}
          src={src}
          title="VideoEmbed"
          width="auto"
          height="auto"
          allowFullScreen
        />
        <div
          className={`consent-placeholder cookie-placeholder ${
            acceptCookies ? "cookie-placeholder__hide" : ""
          }`}
          data-category="cookie_cat_marketing"
        >
          <div className="pagefold-triangle--medium pagefold-inherit-parent" />
          <div className="cookie-placeholder__wrapper">
            <div className="cookie-placeholder__description">
              <div id="dpl-react-apps-cookie-placeholder">{info}</div>
            </div>
            <Button
              classNames="cookie-placeholder__manage-consent-button"
              size="xlarge"
              label={buttonText}
              buttonType="none"
              variant="outline"
              collapsible={false}
              disabled={false}
              onClick={handleButtonClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CookiePlaceholder;
