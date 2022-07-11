import { ProgressBar, ProgressBarProps } from "../progress-bar/progressBar";

export type StatusProps = {
  statusBars: ProgressBarProps[];
  title: string;
};

export const Status = (props: StatusProps) => {
  const { statusBars, title } = props;
  return (
    <div className="dpl-status m-8">
      <h2 className="text-header-h2">{title}</h2>
      {statusBars.map(({ title, amount, fullAmount, outOf }) => (
        <ProgressBar
          title={title}
          amount={amount}
          fullAmount={fullAmount}
          outOf={outOf}
        />
      ))}
    </div>
  );
};
