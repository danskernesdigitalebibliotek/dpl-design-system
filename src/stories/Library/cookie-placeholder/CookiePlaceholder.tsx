import { Button } from "../Buttons/button/Button";

type CookiePlaceholderProps = {
  info: string;
  buttonText: string;
};

export const CookiePlaceholder = ({
  info,
  buttonText,
}: CookiePlaceholderProps) => {
  return (
    <div
      className="consent-placeholder cookie-placeholder"
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
        />
      </div>
    </div>
  );
};

export default CookiePlaceholder;
