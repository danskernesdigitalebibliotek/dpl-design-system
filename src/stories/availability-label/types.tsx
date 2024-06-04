export type AvailabilityLabelPropsType = {
  manifestationType?: "Bog" | "Ebog" | "Lydbog (net)" | "Lydbog (cd-mp3)";
  availability: "Hjemme" | "Online" | "Udlånt";
  status: AvailabilityStatusType;
  quantity?: number;
  button?: boolean;
};

export type AvailabilityStatusType = "available" | "unavailable" | "selected";
