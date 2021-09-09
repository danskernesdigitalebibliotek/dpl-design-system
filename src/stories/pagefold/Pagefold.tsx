import React from "react";

type PagefoldProps = {
  inherit: boolean;
};

export const Pagefold = (props: PagefoldProps) => {
  const { inherit } = props;

  return (
    <div className="pagefold-parent internal-pagefold-parent">
      <div
        className={`pagefold-triangle ${
          inherit ? "pagefold-inherit-parent" : ""
        }`}
      ></div>
    </div>
  );
};
