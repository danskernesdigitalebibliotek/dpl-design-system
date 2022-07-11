export type CounterProps = {
  value: number;
  percentage: number;
  label: string;
  status: "danger" | "warning" | "info" | "neutral";
  isReady: boolean;
};

export const Counter = (props: CounterProps) => {
  const { value, label, percentage, status, isReady } = props;

  function getColor() {
    if (status === "danger") return "#d5364a";
    if (status === "warning") return "#f7bf42";
    if (status === "info") return "#068802";
    if (status === "neutral") return "#484848";
    return "#484848";
  }

  const borderProgress = `radial-gradient(
    closest-side,
    var(--parent-bg-color) calc(100% - 3px),
    transparent calc(100% - 2px),
    transparent 0 100%
  ),
  conic-gradient(${getColor()} ${percentage}%, #DBDBDB 0)`;

  return (
    <div
      role="progressbar"
      style={{ background: borderProgress }}
      className="counter"
      aria-label="counter showing time remaining "
    >
      {isReady ? (
        <img
          className="counter__icon"
          src="icons/basic/icon-check.svg"
          alt="check icon"
        />
      ) : (
        <span className="counter__value">{value}</span>
      )}
      <span className="counter__label">{label}</span>
    </div>
  );
};
