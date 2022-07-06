<<<<<<< HEAD:src/stories/Library/breadcrumb/Breadcrumb.tsx
import { IconArrow } from "../Arrows/icon-arrow-ui/ArrowUI";
=======
import React from "react";
import { IconArrow } from "../arrows/icon-arrow-ui/ArrowUI";
>>>>>>> 6edef39 (Address eslint errors and adjust the eslintrc file to fit the repository):src/stories/breadcrumb/Breadcrumb.tsx

export type BreadcrumbProps = {
  text: string;
};
export const Breadcrumb = ({ text }: BreadcrumbProps) => {
  return (
    <div className="breadcrumb">
      <IconArrow size="small" direction="left" hover>
        <a href="/" className="arrow__link" aria-label="Arrow link">
          <p className="text-links">{text}</p>
        </a>
      </IconArrow>
    </div>
  );
};
