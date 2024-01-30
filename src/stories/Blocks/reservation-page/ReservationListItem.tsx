import { Counter } from "../../Library/counter/Counter";
import { ReactComponent as ArrowSmallRight } from "../../Library/Arrows/icon-arrow-ui/icon-arrow-ui-small-right.svg";

export interface ReservationListItemProps {
  amount: number;
}

const ReservationListItem: React.FC<ReservationListItemProps> = ({
  amount,
}) => {
  const listItems = Array(amount).fill(0);
  return (
    <>
      {listItems.map(() => (
        <div className="list-reservation my-32 cursor-pointer arrow__hover--right-small">
          <div className="list-reservation__material">
            <div>
              <div className="cover cover--size-small cover--aspect-small bg-identity-tint-120" />
            </div>
            <div className="list-reservation__information">
              <div>
                <div className="status-label status-label--outline">bog</div>
              </div>
              <div className="list-reservation__about">
                <button
                  type="button"
                  className="list-reservation__header color-secondary-gray"
                >
                  <span
                    id="48991963-title"
                    className="list-reservation__header__text"
                  >
                    Operation Spøgelse
                  </span>
                </button>
                <p
                  data-cy="reservation-about-author"
                  className="text-small-caption color-secondary-gray"
                >
                  Jørn Lier Horst (2020)
                </p>
                <p
                  data-cy="reservation-about-series"
                  className="text-small-caption color-secondary-gray"
                >
                  Detektivbureau Nr. 2
                </p>
              </div>
              <div />
            </div>
          </div>
          <div className="list-reservation__status">
            <div className="list-reservation__counter color-secondary-gray">
              <Counter
                isReady
                label="Ready"
                percentage={100}
                status="info"
                value={20}
              />
            </div>
            <div>
              <div className="list-reservation__deadline">
                <div
                  data-cy="info-label"
                  className="status-label status-label--info"
                >
                  Pick up before 02-02-2024
                </div>
                <p className="text-small-caption">Hovedbiblioteket</p>
                <p className="text-small-caption">Reserveringshylde 74</p>
              </div>
            </div>
            <ArrowSmallRight />
          </div>
        </div>
      ))}
    </>
  );
};

export default ReservationListItem;
