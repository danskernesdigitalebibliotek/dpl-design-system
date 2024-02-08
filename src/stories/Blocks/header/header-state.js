// Function for checking the size of the desktop links container.
function desktopLinksContainerCheckSize() {
  const container = document.querySelector(".header__menu-navigation");

  // By default, assume we are using the burger menu.
  document.documentElement.classList.add("has-burger-menu");
  document.documentElement.classList.remove("has-desktop-menu");

  // The reserved width is for the logo and service buttons.
  const reservedWidth = 250 + 70 + 70 + 105;
  // Calculate available space subtracting the reserved width from the total inner window width.
  const availableSpace = window.innerWidth - reservedWidth;

  // If the width of the menu container is greater than the available space,
  // we keep the burger menu. Otherwise, we swap to the desktop menu format.
  if (container.scrollWidth > availableSpace) {
    document.documentElement.classList.add("has-burger-menu");
    document.documentElement.classList.remove("has-desktop-menu");
  } else {
    document.documentElement.classList.remove("has-burger-menu");
    document.documentElement.classList.add("has-desktop-menu");
  }
}

// Function for initializing the header state based on window size and container width.
function initHeaderState() {
  // Finds the node with class 'header__menu-navigation' which is not initialized.
  const desktopLinks = document.querySelector(
    ".header__menu-navigation:not(.is-header-initialized)"
  );

  // If the desktop links exist, check their size
  // and add a resize event listener to check the size whenever the window is resized.
  if (desktopLinks) {
    desktopLinksContainerCheckSize(desktopLinks);

    window.addEventListener("resize", desktopLinksContainerCheckSize, true);
    document.addEventListener("load", desktopLinksContainerCheckSize, true);

    // Mark the links as initialized
    desktopLinks.classList.add("is-header-initialized");
  }
}

// Call the initHeaderState function to execute all the above operations.
initHeaderState();
