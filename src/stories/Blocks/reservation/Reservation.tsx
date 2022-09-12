import ReservationHeader from "../../Library/reservation/ReservationHeader";
import ReservationForm from "../../Library/reservation/ReservationForm";
import ReservationSucces from "../../Library/reservation/ReservationSucces";
import ReservationError from "../../Library/reservation/ReservationError";

interface ReservationProps {
  title: string;
  label: string;
  author: string;
  submitInfo: string;
  submitButton: string;
  succes: boolean;
  error: boolean;
}

const Reservation = ({
  label,
  title,
  author,
  submitInfo,
  submitButton,
  succes,
  error,
}: ReservationProps) => {
  if (succes) return <ReservationSucces />;
  if (error) return <ReservationError />;
  return (
    <section className="reservation-modal">
      <ReservationHeader author={author} label={label} title={title} />
      <ReservationForm submitInfo={submitInfo} submitButton={submitButton} />
    </section>
  );
};

export default Reservation;
