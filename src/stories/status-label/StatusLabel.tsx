export type StatusLabelProps = {
  label: string;
  status: "danger" | "warning" | "info" | "neutral" | "outline";
  classNames?: string;
};

export const StatusLabel = (props: StatusLabelProps) => {
  const { label, status, classNames } = props;

  function getStatus() {
    if (status === "danger") return "sl-danger";
    if (status === "warning") return "sl-warning";
    if (status === "info") return "sl-info";
    if (status === "neutral") return "sl-neutral";
    if (status === "outline") return "sl-outline";

    return "";
  }

  return (
    <div className={`status-label  ${getStatus()} ${classNames || ""}`}>
      <span>{label}</span>
    </div>
  );
};

declare global {
  interface Window {
    eventHeader: () => void;
  }
}
