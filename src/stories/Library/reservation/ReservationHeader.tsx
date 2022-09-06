import { Cover } from "../cover/Cover";

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
    <header className="reservation__header">
      <Cover
        url="images/book_cover_3.jpg"
        size="medium"
        animate={false}
        tint="120"
      />
      <div className="reservation__header__container">
        <div className="reservation__header__tag">{label}</div>
        <h2 className="reservation__header__title">{title}</h2>
        <p className="reservation__header__author">{author}</p>
      </div>
    </header>
  );
};

export default ReservationHeader;
