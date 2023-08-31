window.addEventListener("DOMContentLoaded", () => {
  let scrollDirection = "up";
  let lastScrollY = window.scrollY;
  // Get the starting position of the header
  const initialHeaderYposition = document.querySelector("header").offsetTop;
  // Tweak the header position when it's down by this amount.
  const headerDownTopPositionOffset = 5;
  const waitPxBeforeScroll = 5;

  // If we're at the top of the page, make sure the header class is "up".
  if (window.scrollY === 0) {
    document.querySelector("header").classList.remove("down");
    document.querySelector("header").classList.add("up");
  }

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
      document.querySelector("header").classList.remove("up");
      document.querySelector("header").classList.add("down");
      const headerHeight = document.querySelector("header").offsetHeight;
      const headerDownTopPosition = headerHeight + headerDownTopPositionOffset;
      document.querySelector(
        "header"
      ).style.top = `-${headerDownTopPosition}px`;
    } else {
      document.querySelector("header").classList.remove("down");
      document.querySelector("header").classList.add("up");
      document.querySelector(
        "header"
      ).style.top = `${initialHeaderYposition}px`;
    }
  };

  window.addEventListener("scroll", updateScrollDirection);
});
