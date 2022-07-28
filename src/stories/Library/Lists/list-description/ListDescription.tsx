import { generateId } from "../../horizontal-term-line/HorizontalTermLine";

export type ListData = {
  [k: string]: { value: string; type: "standard" | "link" };
};

const ListDescription: React.FC<{ data: ListData; className?: string }> = ({
  data,
  className,
}) => {
  return (
    <dl className={`list-description ${className ?? ""}`}>
      {Object.keys(data).map((key, index) => {
        const { value, type } = data[key as keyof ListData];
        return (
          <div key={generateId(index)}>
            <dt>{key}:</dt>
            <dd>
              {type === "standard" && value}
              {type === "link" && <span className="link-tag">{value}</span>}
            </dd>
          </div>
        );
      })}
    </dl>
  );
};

export default ListDescription;
