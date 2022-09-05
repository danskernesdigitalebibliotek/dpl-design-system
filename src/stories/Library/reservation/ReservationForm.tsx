import { Button } from "../Buttons/button/Button";

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

interface ReservationFormProps {
  submitInfo: string;
  submitButton: string;
}

const ReservationForm = ({
  submitInfo,
  submitButton,
}: ReservationFormProps) => {
  return (
    <div className="reservation__form">
      <div className="reservation__form__submit">
        <p className="reservation__form__submit__info">{submitInfo}</p>
        <Button
          label={submitButton}
          buttonType="none"
          disabled={false}
          collapsible={false}
          size="small"
          variant="filled"
        />
      </div>
      <div className="reservation__form__list">
        <ReservationFormItem
          icon="Various"
          title="Udgave"
          text="Nyeste udgave"
        />
        <ReservationFormItem
          icon="Location"
          title="Afhentes på"
          text="Hovedbiblioteket i Birkerød"
        />
        <ReservationFormItem
          icon="Subtitles"
          title="Du får en sms, når materialet er klar"
          text="+ 45 88 88 88 88"
        />
        <ReservationFormItem
          icon="Message"
          title="Du får besked, når materialet er klar"
          text="navn.navnsen@gmail.com"
        />
        <ReservationFormItem
          icon="LoanHistory"
          title="Har ingen interesse efter"
          text="6 måneder"
        />
      </div>
    </div>
  );
};

export default ReservationForm;
