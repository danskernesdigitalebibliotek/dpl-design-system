import { Avatar } from "../../avatar/Avatar";
import { Links } from "../../links/Links";

export type ModalHeaderProps = {
  headerName: string;
  headerLinkHref: string;
  headerLinkText: string;
};

export const ModalHeader = (props: ModalHeaderProps) => {
  const { headerName, headerLinkHref, headerLinkText } = props;

  return (
    <div className="modal-header">
      <div className="modal-header__avatar">
        <Avatar />
      </div>
      <div className="modal-header__name text-header-h4">{headerName}</div>
      <Links
        href={headerLinkHref}
        linkText={headerLinkText}
        classNames="modal-header__link color-secondary-gray"
      />
    </div>
  );
};
