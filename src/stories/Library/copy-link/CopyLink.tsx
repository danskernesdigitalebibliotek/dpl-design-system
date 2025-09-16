import clsx from "clsx";
import { useState } from "react";
import { ReactComponent as LinkIcon } from "../../../public/icons/collection/link.svg";
import { ReactComponent as CheckIcon } from "../../../public/icons/basic/icon-check_small.svg";

export type CopyLinkProps = {
  label?: string;
  successLabel?: string;
  url?: string;
  className?: string;
  successDuration?: number;
};

export const CopyLink = ({
  label = "Kopiér link",
  successLabel = "Link kopieret",
  url,
  className,
  successDuration = 2000,
}: CopyLinkProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyLink = () => {
    const linkToCopy = url || window.location.href;
    navigator.clipboard.writeText(linkToCopy);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, successDuration);
  };

  return (
    <button
      className={clsx("copy-link", className)}
      onClick={handleCopyLink}
      type="button"
    >
      <span
        className={clsx("link-tag text-small-caption", {
          "copy-link--success": isCopied,
        })}
      >
        {isCopied ? successLabel : label}
      </span>
      {isCopied ? <CheckIcon /> : <LinkIcon />}
    </button>
  );
};
