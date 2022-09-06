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
  <div className="reservation__form__list__item">
    <img
      className="reservation__form__list__item__icon"
      src={`icons/collection/${icon}.svg`}
      alt={`icon for ${icon}`}
    />
    <div className="reservation__form__list__item__container">
      <h3 className="reservation__form__list__item__title">{title}</h3>
      <p className="reservation__form__list__item__text">{text}</p>
    </div>
    <div>
      <p className="reservation__form__list__item__change">Skift</p>
    </div>
  </div>
);

export default ReservationFormItem;
