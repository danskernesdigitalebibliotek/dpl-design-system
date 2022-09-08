interface ReservationFormItemProps {
  icon: string;
  title: string;
  text: string;
}
const ReservationFormItem = ({
  icon,
  title,
  text,
}: ReservationFormItemProps) => (
  <div className="reservation-modal-list-item">
    <img src={`icons/collection/${icon}.svg`} alt="" />
    <div className="reservation-modal-list-item-text">
      <h3 className="text-header-h5">{title}</h3>
      <p className="text-small-caption">{text}</p>
    </div>
    <button className="link-tag text-small-caption cursor-pointer">
      Skift
    </button>
  </div>
);

export default ReservationFormItem;
