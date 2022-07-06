<<<<<<< HEAD:src/stories/Library/Lists/list-reservation/ListReservationsAndLoans.tsx
import { Counter, CounterProps } from "../../../Library/counter/Counter";
import {
  StatusLabel,
  StatusLabelProps,
} from "../../../Library/status-label/StatusLabel";
import { Material } from "../../../Library/material/Material";
=======
import React from "react";
import { Counter, CounterProps } from "../counter/Counter";
import { StatusLabel, StatusLabelProps } from "../status-label/StatusLabel";
import { Material } from "../material/Material";
>>>>>>> 6edef39 (Address eslint errors and adjust the eslintrc file to fit the repository):src/stories/list-reservation/ListReservationsAndLoans.tsx

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
    <div className="list-reservation-container">
      <div
        className={`list-reservation ${
          isStacked && "list-reservation--stacked"
        }`}
      >
        <div className="list-reservation__material">
          <div>
            <Material size="small" animate url={material.image} />
          </div>
          <div className="list-reservation__information">
            <div>
              <StatusLabel label="bog" status="outline" />
            </div>
            <div className="list-reservation__about">
              <h3 className="text-header-h4">{material.title}</h3>
              <p className="text-small-caption color-secondary-gray">
                {material.description}
              </p>
            </div>
            <a
              href={material.noteUrl}
              aria-label="note about material"
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
              <a
                href={material.noteUrl}
                className={`list-reservation__note-mobile text-small-caption ${
                  material.noteAsWarning
                    ? "color-signal-alert"
                    : "color-secondary-gray"
                }`}
              >
                {material.noteLabel}
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
