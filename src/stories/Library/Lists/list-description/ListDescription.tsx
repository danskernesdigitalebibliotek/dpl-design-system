import clsx from "clsx";
import { Fragment } from "react";
import { generateId } from "../../horizontal-term-line/HorizontalTermLine";

export type ListData = {
  [k: string]: {
    value: string[];
    type: "standard" | "link";
    layout?: "default" | "column";
  };
};

const ListDescription: React.FC<{ data: ListData; className?: string }> = ({
  data,
  className,
}) => {
  return (
    <dl className={`list-description ${className ?? ""}`}>
      {Object.keys(data).map((key, index) => {
        const { value, type, layout = "default" } = data[key as keyof ListData];
        return (
          <div className="list-description__item" key={generateId(index)}>
            <dt className="list-description__key">{key}:</dt>
            <dd
              className={clsx(
                "list-description__value",
                layout === "column" && "list-description__value--column"
              )}
            >
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
