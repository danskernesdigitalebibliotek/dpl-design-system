export type ListData = {[k: string]: {value: string, type: "standard" | "link"}};

const DetailsList: React.FC<{data: ListData, className?: string}> = ({ data, className }) => {
  return (
    <dl className={`details-list ${className ?? ""}`}>
      {Object.keys(data).map((key, i) => {
        const {value, type} =  data[key as keyof ListData];
        return (
          <>
            <dt>{key}:</dt>
            <dd>
              {type === "standard" && value}
              {type === "link" && <span className="link-tag">{value}</span>}
            </dd>
          </>
        );
      })}
    </dl>
  )
};

export default DetailsList;
