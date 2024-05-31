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
    <div className="cookie-placeholder">
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
  );
};

export default CookiePlaceholder;
