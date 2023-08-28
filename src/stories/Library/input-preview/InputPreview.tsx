import clsx from "clsx";
import { Links } from "../links/Links";
import Pagefold from "../pagefold/Pagefold";

export interface InputPreviewProps {
  cqlPreviewText: string;
  isMobile?: boolean;
}

const InputPreview: React.FC<InputPreviewProps> = ({
  cqlPreviewText = "placeholder text",
  isMobile = false,
}) => {
  return (
    <Pagefold
      size="large"
      isInheriting
      isAContainer={false}
      className={clsx("input-and-preview__preview", {
        "input-and-preview__preview--mobile": isMobile,
      })}
    >
      <h3 className="text-body-medium-medium mb-24">CQL søgestreng</h3>
      <p className="text-body-medium-regular mb-32">{cqlPreviewText}</p>
      <footer>
        <button className="link-tag mr-16">Nulstil</button>
        <button className="link-tag mr-16">Kopier streng</button>
        <Links href="/" linkText="Rediger CQL" classNames="link-tag" />
      </footer>
    </Pagefold>
  );
};

export default InputPreview;
