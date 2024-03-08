import { ReactComponent as WarningIcon } from "../../../public/icons/basic/icon-warning.svg";

export type ErrorMessageProps = {
  message: string;
};

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div className="error-message">
      <WarningIcon className="error-message__icon" />
      <div className="error-message__description">
        <div id="dpl-react-apps-error-messages">{message}</div>
      </div>

      <button
        type="button"
        aria-describedby="describemodal"
        className="error-message__btn-close"
        aria-label="close modal"
      >
        <img
          src="icons/collection/CloseLarge.svg"
          alt="close error message button"
        />
      </button>
    </div>
  );
};
