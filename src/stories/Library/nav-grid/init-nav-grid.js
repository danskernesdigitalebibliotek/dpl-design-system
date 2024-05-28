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

    const firstHiddenLink = Array.from(grid.querySelectorAll(".nav-grid__item"))
      .find((item) => window.getComputedStyle(item).display === "none")
      ?.querySelector("a");

    button.addEventListener("click", () => {
      grid.classList.remove("nav-grid--folded");

      if (firstHiddenLink) {
        firstHiddenLink.focus();
      }
    });
  });
});
