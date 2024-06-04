import { ReactComponent as EnglishIcon } from "../../../public/icons/flags/england.svg";
import { ReactComponent as DanishIcon } from "../../../public/icons/flags/denmark.svg";
import { Links } from "../links/Links";

export interface IconTextLinkProps {
  link: string;
  text: string;
  icon: "england" | "denmark";
  classNames?: string;
}

const IconTextLink: React.FC<IconTextLinkProps> = ({
  link,
  text,
  icon,
  classNames,
}) => {
  return (
    <div className="icon-text-link">
      {icon === "england" && <EnglishIcon />}
      {icon === "denmark" && <DanishIcon />}
      <Links
        href={link}
        linkText={text}
        classNames={`icon-text-link__text ${classNames || ""}`}
      />
    </div>
  );
};

export default IconTextLink;
