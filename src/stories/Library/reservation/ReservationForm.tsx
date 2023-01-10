import { Button } from "../Buttons/button/Button";
import PromoBar from "../promo-bar/PromoBar";
import ReservationFormItem from "./ReservationFormItem";
import InstantLoan from "../instant-loan/InstantLoan";
import instantLoanDefaultArgs from "../instant-loan/instantLoanDefaultArgs";

interface ReservationFormProps {
  submitInfo: string;
  submitButton: string;
  showPromoBar?: boolean;
  showInstantLoan?: boolean;
}

const ReservationForm = ({
  submitInfo,
  submitButton,
  showPromoBar,
  showInstantLoan,
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
        {showPromoBar && (
          <PromoBar
            type="info"
            text="Spring køen over - Materialet findes i en anden udgave"
            sticky
          />
        )}
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
        {showInstantLoan && <InstantLoan {...instantLoanDefaultArgs} />}
      </div>
    </div>
  );
};

export default ReservationForm;
