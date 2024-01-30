export interface ReservationListEmptyStateProps {
  text: string;
  classsNames?: string;
}

const ReservationListEmptyState: React.FC<ReservationListEmptyStateProps> = ({
  text,
  classsNames,
}) => {
  return <div className={`dpl-list-empty mt-24 ${classsNames}`}>{text}</div>;
};

export default ReservationListEmptyState;
