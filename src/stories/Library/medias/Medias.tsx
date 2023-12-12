import { FC, ReactNode } from "react";
import clsx from "clsx";

type MediasProps = {
  items: ReactNode[];
};

const Medias: FC<MediasProps> = ({ items }) => {
  const classes = clsx("medias", {
    "medias--multiple": items.length > 1,
    "medias--single": items.length <= 1,
  });

  return (
    <div className={classes}>
      {items.map((item, index) => {
        const itemClasses = clsx("medias__item", {
          "medias__item--last": index === items.length - 1,
        });

        return (
          <div key={index} className={itemClasses}>
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default Medias;
