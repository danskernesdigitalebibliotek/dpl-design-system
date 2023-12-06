import { Fragment } from "react";
import { generateId } from "../../horizontal-term-line/HorizontalTermLine";

export type ListData = {
  [k: string]: { value: string[]; type: "standard" | "link" };
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
          <div className="list-description__item" key={generateId(index)}>
            <dt>{key}:</dt>
            <dd>
              {value.map((val) => (
                <Fragment key={val}>
                  {type === "standard" && <span>{val}</span>}
                  {type === "link" && <span className="link-tag">{val}</span>}
                </Fragment>
              ))}
            </dd>
          </div>
        );
      })}
    </dl>
  );
};

export default ListDescription;
