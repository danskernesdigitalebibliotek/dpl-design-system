window.addEventListener("DOMContentLoaded", () => {
  let scrollDirection = "up";
  let lastScrollY = window.scrollY;
  const headerOffsetTop = document.querySelector("header").offsetTop;

  const updateStickyHeader = ({
    // If you want to set a custom starting position for the header.
    initialHeaderYposition = null,
    // Tweak the header position when it's down by this amount.
    headerDownTopPositionOffset = 5,
    // Wait this many pixels before showing/hiding the header.
    waitPx = 5,
  }) => {
    // Get the starting position of the header
    const headerYStartPosition = initialHeaderYposition ?? headerOffsetTop;

    const { scrollY } = window;
    // Detect if we are going up or down.
    const direction = scrollY > lastScrollY ? "down" : "up";
    if (
      direction !== scrollDirection &&
      Math.abs(scrollY - lastScrollY) > waitPx
    ) {
      scrollDirection = direction;
    }
    lastScrollY = scrollY > 0 ? scrollY : 0;

    // Control header direction class.
    const headerContainerSelector = ".header";

    if (scrollDirection === "down") {
      const headerHeight = document.querySelector(
        headerContainerSelector
      ).offsetHeight;
      const headerDownTopPosition = headerHeight + headerDownTopPositionOffset;
      document.querySelector(
        headerContainerSelector
      ).style.top = `-${headerDownTopPosition}px`;
    } else {
      document.querySelector(
        headerContainerSelector
      ).style.top = `${headerYStartPosition}px`;
    }
  };

  window.addEventListener("scroll", updateStickyHeader);
});
