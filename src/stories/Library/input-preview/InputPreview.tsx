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
      <div className="text-body-medium-medium mb-24 capitalize-first">
        CQL søgestreng
      </div>
      <p className="text-body-medium-regular mb-32">{cqlPreviewText}</p>
      <section>
        <button className="link-tag mr-16 capitalize-first">Nulstil</button>
        <button className="link-tag mr-16 capitalize-first">
          Kopier streng
          <img
            className="inline-icon"
            src="icons/collection/Check.svg"
            alt=""
          />
        </button>
        <Links href="/" linkText="Rediger CQL" classNames="link-tag" />
      </section>
    </Pagefold>
  );
};

export default InputPreview;
