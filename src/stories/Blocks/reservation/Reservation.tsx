import ReservationHeader from "../../Library/reservation/ReservationHeader";
import ReservationForm from "../../Library/reservation/ReservationForm";

interface ReservationProps {
  title: string;
  label: string;
  author: string;
  submitInfo: string;
  submitButton: string;
}

const Reservation = ({
  label,
  title,
  author,
  submitInfo,
  submitButton,
}: ReservationProps) => {
  return (
    <section className="reservation-modal">
      <ReservationHeader author={author} label={label} title={title} />
      <ReservationForm submitInfo={submitInfo} submitButton={submitButton} />
    </section>
  );
};

export default Reservation;
