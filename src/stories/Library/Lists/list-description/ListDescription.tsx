import clsx from "clsx";
import { Fragment } from "react";
import { generateId } from "../../horizontal-term-line/HorizontalTermLine";

export type ListData = {
  [k: string]: {
    value: string[];
    type: "standard" | "link" | "list";
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
                layout === "column" && "list-description__value--column",
              )}
            >
              {type === "standard" &&
                value.map((val) => (
                  <Fragment key={val}>
                    <span>{val}</span>
                  </Fragment>
                ))}

              {type === "link" &&
                value.map((val) => (
                  <Fragment key={val}>
                    <span className="link-tag">{val}</span>
                  </Fragment>
                ))}

              {type === "list" && (
                <ul className="list-description__value--list">
                  {value.map((val) => (
                    <li key={val}>{val}</li>
                  ))}
                </ul>
              )}
            </dd>
          </div>
        );
      })}
    </dl>
  );
};

export default ListDescription;
