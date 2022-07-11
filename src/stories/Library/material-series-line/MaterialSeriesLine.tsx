export interface SeriesLineList {
  url: string;
  text: string;
}

export interface SeriesLineProps {
  title: string;
  subTitle?: string;
  linkList: SeriesLineList[];
}

const SeriesLine: React.FC<SeriesLineProps> = ({
  title,
  subTitle,
  linkList,
}) => {
  return (
    <div className="text-small-caption material-series-line">
      <p className="text-label-semibold">
        {`${title}`}{" "}
        {subTitle && <span className="text-small-caption">{subTitle} </span>}
      </p>
      <ul className="material-series-line__list">
        {linkList.map((link, index) => (
          <li>
            <a href="/" className="link-tag" key={index}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SeriesLine;
