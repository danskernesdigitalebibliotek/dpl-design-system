import React from "react";

export type StatusLabelProps = {
  label: string;
  status: "danger" | "warning" | "info" | "neutral" | "outline";
  classNames?: string;
};

export const StatusLabel = (props: StatusLabelProps) => {
  const { label, status, classNames } = props;

  function getStatus() {
    if (status === "danger") return "status-label--danger";
    if (status === "warning") return "status-label--warning";
    if (status === "info") return "status-label--info";
    if (status === "neutral") return "status-label--neutral";
    if (status === "outline") return "status-label--outline";

    return "";
  }

  return (
    <div className={`status-label ${getStatus()} ${classNames || ""}`}>
      {label}
    </div>
  );
};
