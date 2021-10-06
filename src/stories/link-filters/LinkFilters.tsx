import React from "react";

export const LinkFilters = () => {
  return (
    <div className="link-filters-container">
      {list.map((item) => (
        <div className="link-filters-tag-wrapper">
          <a
            href={item.href}
            className={
              item.active
                ? "link-filters-tag"
                : "link-filters-tag link-filters-tag--active"
            }
          >
            {item.title}
          </a>
          <span className="link-filters-counter">{item.counter}</span>
        </div>
      ))}
    </div>
  );
};

const list = [
  {
    title: "Foredrag",
    href: "",
    counter: "24",
    active: false,
  },
  {
    title: "Børn",
    href: "",
    counter: "16",
    active: true,
  },
  {
    title: "Kunst og kreativitet",
    href: "",
    counter: "7",
    active: true,
  },
  {
    title: "Bøger til din ferie",
    href: "",
    counter: "48",
    active: true,
  },
  {
    title: "Læs dig gennem danmark",
    href: "",
    counter: "14",
    active: true,
  },
];
