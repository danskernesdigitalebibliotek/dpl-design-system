export type CounterProps = {
  value: number;
  percentage: number;
  label: string;
  status: "danger" | "warning" | "info" | "neutral";
  isReady: boolean;
  animate: boolean;
};

export const Counter = (props: CounterProps) => {
  const { value, label, percentage, status, isReady, animate } = props;

  function getColor() {
    if (status === "danger") return "#d5364a";
    if (status === "warning") return "#f7bf42";
    if (status === "info") return "#068802";
    if (status === "neutral") return "#484848";
    return "#484848";
  }

  return (
    <div
      role="progressbar"
      className="counter"
      aria-label="counter showing time remaining "
    >
      <svg
        className={
          animate
            ? "counter__circle counter__circle--animate "
            : "counter__circle "
        }
        viewBox="0 0 100 100"
        style={{ "--border-progress": `${percentage}%` }}
      >
        <path
          className="counter__circle--path-bg"
          d="M 50 96 a 46 46 0 0 1 0 -92 46 46 0 0 1 0 92"
        />
        <path
          className="counter__circle--path-stroke"
          style={{ stroke: getColor() }}
          d="M 50 96 a 46 46 0 0 1 0 -92 46 46 0 0 1 0 92"
        />
      </svg>
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
