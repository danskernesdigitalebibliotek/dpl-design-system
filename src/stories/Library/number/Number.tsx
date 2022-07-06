import React from "react";

export type NumberProps = {
  label: number;
  status: "danger" | "warning" | "info" | "neutral";
};

export const Number = (props: NumberProps) => {
  const { label, status } = props;

  function getStatus() {
    if (status === "danger") return "number--danger";
    if (status === "warning") return "number--warning";
    if (status === "info") return "number--info";
    if (status === "neutral") return "number--neutral";
    return "";
  }

  return <div className={`number  ${getStatus()}`}>{label}</div>;
};
