import { FC, ReactNode } from "react";
import clsx from "clsx";

type NavSpotsProps = {
  items: ReactNode[];
};

const NavSpots: FC<NavSpotsProps> = ({ items }) => {
  return (
    <div className={clsx("nav-spots", `nav-spots--count-${items.length}`)}>
      <div className="nav-spots__items">
        {items.map((item) => {
          return <div className="nav-spots__item">{item}</div>;
        })}
      </div>
    </div>
  );
};

export default NavSpots;
