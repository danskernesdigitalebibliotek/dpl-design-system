import { Button } from "../Buttons/button/Button";
import ReservationFormItem from "./ReservationFormItem";

interface ReservationFormProps {
  submitInfo: string;
  submitButton: string;
}

const ReservationForm = ({
  submitInfo,
  submitButton,
}: ReservationFormProps) => {
  return (
    <div>
      <div className="reservation-modal-submit">
        <p className="text-small-caption">{submitInfo}</p>
        <Button
          label={submitButton}
          buttonType="none"
          disabled={false}
          collapsible={false}
          size="small"
          variant="filled"
        />
      </div>
      <div className="reservation-modal-list">
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
