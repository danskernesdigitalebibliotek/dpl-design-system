type TintClassesType = {
  [key: string]: string;
};

export const tintClasses: TintClassesType = {
  default: "bg-identity-tint-120",
  "120": "bg-identity-tint-120",
  "100": "bg-identity-tint-100",
  "80": "bg-identity-tint-80",
  "40": "bg-identity-tint-40",
  "20": "bg-identity-tint-20",
};

type CoverTintsType = ("20" | "40" | "80" | "100" | "120")[];

export const getCoverTint = (
  index: number,
): "20" | "40" | "80" | "100" | "120" => {
  const coverTints: CoverTintsType = ["20", "40", "80", "100", "120"];
  const tintKey = index % coverTints.length;
  return coverTints[tintKey];
};

export default {};
