import { ReactComponent as CheckIcon } from "../../../public/icons/basic/icon-check.svg";

export type StatusMessageProps = {
  message: string;
};

export const StatusMessage = ({ message }: StatusMessageProps) => {
  return (
    <div className="status-message">
      <CheckIcon className="status-message__icon" />
      <div className="status-message__description">
        <div id="dpl-react-apps-status-messages">{message}</div>
      </div>

      <button
        type="button"
        aria-describedby="describemodal"
        className="status-message__btn-close"
        aria-label="close modal"
      >
        <img
          src="icons/collection/CloseLarge.svg"
          alt="close status message button"
        />
      </button>
    </div>
  );
};
