export type MaterialProps = {
  url: string;
  animate?: boolean;
  size: "small" | "large";
};

const placeholderBg = [
  "bg-identity-tint-120",
  "bg-identity-tint-80",
  "bg-identity-tint-60",
  "bg-identity-tint-40",
  "bg-identity-tint-20",
];

export const Material = (props: MaterialProps) => {
  console.log(props);
  const bg = placeholderBg[(Math.random() * placeholderBg.length) | 0];
  return (
    <a
      className={`material material-${props.size} ${bg} ${
        props.animate ? "material-animate" : ""
      }`}
    >
      <img src={props.url} alt="" />
    </a>
  );
};

declare global {
  interface Window {
    eventHeader: () => void;
  }
}
