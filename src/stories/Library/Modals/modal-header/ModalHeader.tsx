import { useEffect, useState } from "react";
import { Links } from "../../links/Links";
import { Avatar } from "../../avatar/Avatar";

export type ModalHeaderProps = {
  name: string;
  headerLinkHref: string;
  headerLinkText: string;
};

export const ModalHeader = (props: ModalHeaderProps) => {
  const { name, avatar, headerLinkHref, headerLinkText } = props;

  return (
    <div class="modal-header">
      <div className="modal-header__avatar">
        <Avatar />
      </div>
      <div className="modal-header__name text-header-h4">{name}</div>
      <Links
        href={headerLinkHref}
        linkText={headerLinkText}
        classNames="modal-header__link color-secondary-gray"
      />
    </div>
  );
};
