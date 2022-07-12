import { Material } from "../material/Material";

export type ReservationHeaderProps = {
  author: string;
  label: string;
  title: string;
};

const ReservationHeader = ({
  author,
  label,
  title,
}: ReservationHeaderProps) => {
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
        <div className="dpl-reservation-header__container__tag">{label}</div>
        <div className="dpl-reservation-header__container__header">{title}</div>
        <div className="dpl-reservation-header__container__text">{author}</div>
      </div>
    </div>
  );
};

export default ReservationHeader;
