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
    });
  });
});
