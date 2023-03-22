export type AvailabilityLabelPropsType = {
  manifestationType?: "Bog" | "Ebog" | "Lydbog (net)" | "Lydbog (cd-mp3)";
  availability: "Hjemme" | "Online" | "Udlånt";
  status: "available" | "unavailable" | "selected";
  quantity?: number;
  button?: boolean;
};
