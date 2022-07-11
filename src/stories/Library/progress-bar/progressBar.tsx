export type ProgressBarProps = {
  amount: number;
  fullAmount: number;
  title: string;
  outOf: string;
};

export const ProgressBar = (props: ProgressBarProps) => {
  const { amount, fullAmount, title, outOf } = props;
  const width = (amount / fullAmount) * 100;

  return (
    <div className="dpl-progress-bar text-small-caption color-secondary-gray">
      <div className="dpl-progress-bar__header">
        <div className="text-label">{title}</div>
        <div className="text-label">
          {amount} {outOf} {fullAmount}
        </div>
      </div>
      <div className="dpl-progress-bar__progress-bar bg-global-secondary">
        <div className="bg-identity-primary" style={{ width: `${width}%` }} />
      </div>
    </div>
  );
};
