import { Counter, CounterProps } from "../counter/Counter";
import { StatusLabel, StatusLabelProps } from "../status-label/StatusLabel";
import { ArrowUI } from "../arrows/icon-arrow-ui/ArrowUI.stories";
import { Material } from "../material/Material";

export type ListReservationsAndLoansProps = {
  material: {
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
  const { material, isStacked, counter, statusLabel, statusNotes, fee } = props;

  return (
    <div className="list-container">
      <div className="list-reservation">
        <div className="list-reservation__material">
          <div>
            <Material animate={true} url={material.image} />
            <a
              href={material.noteUrl}
              style={{ height: "14px", fontSize: "12px" }}
              className={`list-reservation__note-mobile text-small-caption ${
                material.noteAsWarning
                  ? "color-signal-alert"
                  : "color-secondary-gray"
              }`}
            >
              {material.noteLabel}
            </a>
          </div>
          <div className="list-reservation__information">
            <div>
              <span className="list-reservation__type">{material.type}</span>
            </div>
            <div className="list-reservation__about">
              <p className="text-header-h4">{material.title}</p>
              <p
                className="text-small-caption color-secondary-gray"
                style={{ marginTop: "2px" }}
              >
                {material.description}
              </p>
            </div>
            <a
              href={material.noteUrl}
              style={{ height: "14px", fontSize: "12px" }}
              className={`list-reservation__note-desktop text-small-caption ${
                material.noteAsWarning
                  ? "color-signal-alert"
                  : "color-secondary-gray"
              }`}
            >
              {material.noteLabel}
            </a>
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
            </div>
          </div>
          <div className="list-reservation__fee">
            {fee ? (
              <p className="text-body-medium-medium">Gebyr {fee},-</p>
            ) : (
              <ArrowUI direction="right" hover={false} size="small" />
            )}
          </div>
        </div>
      </div>
      {isStacked && <div className="list-reservation__stacked_1" />}
      {isStacked && <div className="list-reservation__stacked_2" />}
    </div>
  );
};

declare global {
  interface Window {
    eventHeader: () => void;
  }
}
