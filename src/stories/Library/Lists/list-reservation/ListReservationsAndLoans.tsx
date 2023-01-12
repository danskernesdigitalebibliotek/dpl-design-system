import clsx from "clsx";
import { Counter, CounterProps } from "../../counter/Counter";
import { StatusLabel, StatusLabelProps } from "../../status-label/StatusLabel";
import { Cover } from "../../cover/Cover";

export type ListReservationsAndLoansProps = {
  cover: {
    type: string;
    title: string;
    description: string;
    image: string;
    url: string;
    noteLabel: string;
    noteUrl: string;
    noteAsWarning: boolean;
  };
  isStacked: boolean;
  counter: CounterProps;
  statusLabel: StatusLabelProps;
  statusNotes: string;
  fee: number;
};

export const ListReservationsAndLoans = (
  props: ListReservationsAndLoansProps
) => {
  const { cover, isStacked, counter, statusLabel, statusNotes, fee } = props;

  return (
    <div className="list-reservation-container animate__animated animate__slide-in-down">
      <div
        className={`list-reservation ${
          isStacked && "list-reservation--stacked"
        }`}
      >
        <div className="list-reservation__material">
          <div>
            <Cover size="small" animate url={cover.image} />
          </div>
          <div className="list-reservation__information">
            <div>
              <StatusLabel label="bog" status="outline" />
            </div>
            <div className="list-reservation__about">
              <h3 className="text-header-h4">{cover.title}</h3>
              <p className="text-small-caption color-secondary-gray">
                {cover.description}
              </p>
            </div>
            <button
              type="button"
              aria-label="note about material"
              className={clsx(
                "list-reservation__note list-reservation__note--desktop color-secondary-gray",
                cover.noteAsWarning && "color-signal-alert"
              )}
            >
              {cover.noteLabel}
            </button>
          </div>
        </div>

        <div className="list-reservation__status">
          <div className="list-reservation__counter">
            {counter && (
              <Counter
                label={counter.label}
                percentage={counter.percentage}
                value={counter.value}
                status={counter.status}
                isReady={counter.isReady}
              />
            )}
          </div>
          <div>
            <div className="list-reservation__deadline">
              {statusLabel && (
                <StatusLabel
                  label={statusLabel.label}
                  status={statusLabel.status}
                />
              )}
              <p className="text-small-caption">{statusNotes}</p>
              <a
                href={cover.noteUrl}
                className={clsx(
                  "list-reservation__note list-reservation__note--mobile color-secondary-gray",
                  cover.noteAsWarning && "color-signal-alert"
                )}
              >
                {cover.noteLabel}
              </a>
            </div>
          </div>

          {fee > 0 ? (
            <div className="list-reservation__fee">
              <p className="text-body-medium-medium">Gebyr {fee},-</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
