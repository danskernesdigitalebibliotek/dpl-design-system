import { Material } from "../material/Material";

export const ReservationHeader = () => {
  return (
    <div className="dpl-reservation-header">
      <div className="dpl-reservation-header__material">
        <Material
          url="http://placehold.jp/150x150.png"
          size="medium"
          animate={false}
          tint="120"
        />
      </div>
      <div className="dpl-reservation-header__container">
        <div className="dpl-reservation-header__container__tag">BOG</div>
        <div className="dpl-reservation-header__container__header">
          Steven Hawking
        </div>
        <div className="dpl-reservation-header__container__text">
          Af Isabel Sánchez Vegara, Amaia Arrazola (2018)
        </div>
      </div>
    </div>
  );
};
