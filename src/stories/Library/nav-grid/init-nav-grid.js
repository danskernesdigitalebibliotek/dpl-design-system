window.addEventListener("load", () => {
  const grids = document.querySelectorAll(
    ".nav-grid--has-many:not(.is-initialized)"
  );

  grids.forEach((grid) => {
    grid.classList.add("is-initialized");
    const button = grid.querySelector(".nav-grid__controller");

    if (!button) {
      return;
    }

    button.addEventListener("click", () => {
      grid.classList.remove("nav-grid--folded");

      // The 7th item is the first one that is initially hidden.
      // For more details, refer to the ".nav-grid--folded" class in design-system src/stories/Library/nav-grid/nav-grid.scss
      const seventhNavGridItem = grid.querySelector(
        ".nav-grid__item:nth-child(7)"
      );
      if (seventhNavGridItem) {
        seventhNavGridItem.querySelector("a").focus();
      }
    });
  });
});
