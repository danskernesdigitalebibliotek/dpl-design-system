export interface HorizontalTermLineList {
  url: string;
  text: string;
}

export interface HorizontalTermLineProps {
  title: string;
  subTitle?: string;
  linkList: HorizontalTermLineList[];
}

export function generateId(index: number | string) {
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
      <p className="text-label-bold">
        {`${title}`}{" "}
        {subTitle && <span className="text-small-caption">{subTitle} </span>}
      </p>
      {linkList.map((link, index) => (
        <span key={generateId(index)}>
          <a href="/" className="link-tag" key={index}>
            {link.text}
          </a>
        </span>
      ))}
    </div>
  );
};

export default HorizontalTermLine;
