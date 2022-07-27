export interface HorizontalTermLineList {
  url: string;
  text: string;
}

export interface HorizontalTermLineProps {
  title: string;
  subTitle?: string;
  linkList: HorizontalTermLineList[];
}

export function generateId(index: number) {
  const randomId = Math.random().toString(36);
  return randomId.concat(index.toString());
}

const HorizontalTermLine: React.FC<HorizontalTermLineProps> = ({
  title,
  subTitle,
  linkList,
}) => {
  return (
    <div className="text-small-caption horizontal-term-line">
      <p className="text-label-semibold">
        {`${title}`}{" "}
        {subTitle && <span className="text-small-caption">{subTitle} </span>}
      </p>
      <ul className="horizontal-term-line__list">
        {linkList.map((link, index) => (
          <li key={generateId(index)}>
            <a href="/" className="link-tag" key={index}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HorizontalTermLine;
