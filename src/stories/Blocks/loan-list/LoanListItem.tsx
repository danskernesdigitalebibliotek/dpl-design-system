import { StatusLabel } from "../../Library/status-label/StatusLabel";
import StatusExpired from "./StatusExpired";
import StatusWarning from "./StatusWarning";

const LoanListItem = ({ status }: { status: "danger" | "warning" }) => (
  <div className="list-reservation my-32 cursor-pointer arrow__hover--right-small">
    <div className="list-reservation__material">
      <div>
        <div className="cover cover--size-small cover--aspect-small bg-identity-tint-120">
          &nbsp;
        </div>
      </div>
      <div className="list-reservation__information">
        <div>
          <div className="status-label status-label--outline">bog</div>
        </div>
        <div className="list-reservation__about">
          <button
            type="button"
            lang="da"
            className="list-reservation__header color-secondary-gray"
          >
            <span
              id="956250902-title"
              className="list-reservation__header__text"
            >
              Man kan ikke føre solen bag lyset
            </span>
          </button>
          <p
            data-cy="reservation-about-author"
            className="text-small-caption color-secondary-gray"
          >
            Johannes Møllehave (2007)
          </p>
        </div>
        <div>
          <div>&nbsp;</div>
          {status === "danger" && (
            <a
              href="https://unsplash.com/photos/wd6YQy0PJt8"
              rel="noreferrer"
              className="list-reservation__note list-reservation__note--desktop color-signal-alert"
            >
              You will be charged a fee, when the item is returned
            </a>
          )}
        </div>
      </div>
    </div>
    <div className="list-reservation__status">
      <div className="list-reservation__counter">
        {status === "danger" && <StatusExpired />}
        {status === "warning" && <StatusWarning />}
      </div>
      <div>
        <div className="list-reservation__deadline">
          <StatusLabel
            label={status === "warning" ? "Expiring soon" : "Expired"}
            status={status}
          />
          <p className="text-small-caption color-secondary-gray">
            Due date 26-01-2024
          </p>
          <div>&nbsp;</div>
          {status === "danger" && (
            <a
              href="https://unsplash.com/photos/wd6YQy0PJt8"
              rel="noreferrer"
              className="list-reservation__note list-reservation__note--mobile color-signal-alert"
            >
              You will be charged a fee, when the item is returned
            </a>
          )}
        </div>
      </div>
      <button
        aria-labelledby="956250902-title"
        className="arrow-button"
        type="button"
        style={{ cursor: "pointer" }}
        tabIndex={-1}
      >
        <svg
          width="61"
          height="9"
          viewBox="0 0 61 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path className="arrow__body" d="M60 4.5H0" stroke="black" />
          <path
            className="arrow__head"
            d="M60.3537 4.85355C60.5489 4.65829 60.5489 4.34171 60.3537 4.14645L57.1717 0.96447C56.9764 0.769208 56.6598 0.769208 56.4646 0.96447C56.2693 1.15973 56.2693 1.47631 56.4646 1.67157L59.293 4.5L56.4646 7.32843C56.2693 7.52369 56.2693 7.84027 56.4646 8.03553C56.6598 8.2308 56.9764 8.2308 57.1717 8.03553L60.3537 4.85355ZM60.0001 4H57.0001V5H60.0001V4Z"
            fill="black"
          />
        </svg>
      </button>
    </div>
  </div>
);

export default LoanListItem;
