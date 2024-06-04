import { Button } from "../Buttons/button/Button";

const ReservationSucces = () => {
  return (
    <section className="reservation-modal reservation-modal--confirm">
      <h2 className="text-header-h3 pb-48">
        Materialet er hjemme og er nu reserveret til dig!
      </h2>
      <p className="text-body-medium-regular pb-24">
        “Audrey Hepburn” er reserveret til dig
      </p>
      <p className="text-body-medium-regular pb-48">
        Materialet er hjemme, og du får beksed så snart der ligger klar til dig
        - afhentning på Københavns Hivedbibliotek.
      </p>
      <Button
        classNames="reservation-modal__confirm-button"
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

export default ReservationSucces;
