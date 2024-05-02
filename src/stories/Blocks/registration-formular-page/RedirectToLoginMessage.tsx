import { FC } from "react";
import { Button } from "../../Library/Buttons/button/Button";

export interface RedirectToLoginMessageProps {
  infoTopText: string;
  infoBottomText: string;
  buttonText: string;
}

const RedirectToLoginMessage: FC<RedirectToLoginMessageProps> = ({
  infoTopText,
  infoBottomText,
  buttonText,
}) => {
  return (
    <section className="redirect-to-login-message">
      <p className="redirect-to-login-message__top">{infoTopText}</p>
      <p className="redirect-to-login-message__bottom">{infoBottomText}</p>
      <Button
        buttonType="default"
        size="small"
        collapsible={false}
        disabled={false}
        variant="outline"
        onClick={() => {}}
        classNames="mt-32"
        label={buttonText}
      />
    </section>
  );
};

export default RedirectToLoginMessage;
