window.addEventListener("DOMContentLoaded", () => {
  let scrollDirection = "up";
  let lastScrollY = window.scrollY;
  // Get the starting position of the header
  const initialHeaderYposition = document.querySelector("header").offsetTop;
  // Tweak the header position when it's down by this amount.
  const headerDownTopPositionOffset = 5;
  const waitPxBeforeScroll = 5;

  const updateScrollDirection = () => {
    const { scrollY } = window;
    // Detect if we are going up or down.
    const direction = scrollY > lastScrollY ? "down" : "up";
    if (
      direction !== scrollDirection &&
      Math.abs(scrollY - lastScrollY) > waitPxBeforeScroll
    ) {
      scrollDirection = direction;
    }
    lastScrollY = scrollY > 0 ? scrollY : 0;

    // Control header direction class.
    if (scrollDirection === "down") {
      const headerHeight = document.querySelector("header").offsetHeight;
      const headerDownTopPosition = headerHeight + headerDownTopPositionOffset;
      document.querySelector(
        "header"
      ).style.top = `-${headerDownTopPosition}px`;
    } else {
      document.querySelector(
        "header"
      ).style.top = `${initialHeaderYposition}px`;
    }
  };

  window.addEventListener("scroll", updateScrollDirection);
});
