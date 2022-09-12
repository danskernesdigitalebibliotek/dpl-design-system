import { Button } from "../Buttons/button/Button";

const ReservationError = () => {
  return (
    <section className="reservation-modal reservation-modal--confirm">
      <h2 className="text-header-h3 pb-48">Reservationsfejl</h2>
      <p className="text-body-medium-regular pb-48">
        Der er desværre sket en fejl. Vi beklager ulejligheden. Prøv igen
      </p>
      <Button
        label="OK"
        disabled={false}
        collapsible={false}
        size="small"
        buttonType="none"
        variant="filled"
      />
    </section>
  );
};

export default ReservationError;
