import { useEffect, useState } from "react";

export type AvatarProps = {
  icon: string;
};

export const Avatar = (props: AvatarProps) => {
  const { icon } = props;

  return (
    <div className="avatar bg-global-secondary">
      <img src={`icons/collection/Profile.svg`} alt="Profile avatar" />
    </div>
  );
};
