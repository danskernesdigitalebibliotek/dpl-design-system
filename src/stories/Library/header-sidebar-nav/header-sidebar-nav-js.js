window.addEventListener("load", () => {
  const sidebarNavToggle = document.getElementById(
    "header-sidebar-nav__toggle"
  );
  const backgroundWrapper = document.querySelector(
    ".header-sidebar-nav__background-wrapper"
  );
  const menu = document.querySelector(".header-sidebar-nav");

  const closeButton = document.getElementById(
    "js-header-sidebar-nav__close-menu-button"
  );

  const lastMenuItem = document.querySelector(
    ".header-sidebar-nav  .header__menu-navigation li:last-child a"
  );
  const menuWrapper = document.querySelector(
    ".header-sidebar-nav__menu-wrapper"
  );

  function toggleSidebarNav() {
    const isOpen = menu.getAttribute("data-open") === "open";

    if (menu) {
      menu.setAttribute("data-open", isOpen ? "closed" : "open");
    }

    if (sidebarNavToggle) {
      sidebarNavToggle.setAttribute("aria-expanded", isOpen ? "false" : "true");
    }

    if (!isOpen && closeButton) {
      // When menu opens - move focus to the close button
      closeButton.focus();
    } else if (isOpen && sidebarNavToggle) {
      // When menu closes - move focus to the menu toggle button
      sidebarNavToggle.focus();
    }
  }

  if (sidebarNavToggle) {
    sidebarNavToggle.addEventListener("click", toggleSidebarNav);

    // Allow menu to be opened with Enter or Space key
    sidebarNavToggle.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        toggleSidebarNav();
        event.preventDefault();
      }
    });
  }

  if (lastMenuItem) {
    // When tabbing out of the last menu item, move focus to the close button
    lastMenuItem.addEventListener("keydown", (event) => {
      if (event.key === "Tab" && !event.shiftKey) {
        event.preventDefault(); // Prevent tabbing to an element outside the menu
        closeButton.focus();
      }
    });
  }
  if (closeButton) {
    closeButton.addEventListener("click", toggleSidebarNav);
    // When tabbing backwards out of the close button, move focus to the last menu item
    closeButton.addEventListener("keydown", (event) => {
      if (event.key === "Tab" && event.shiftKey) {
        event.preventDefault(); // Prevent tabbing to an element outside the menu
        lastMenuItem.focus();
      }
      // Allow close button to be activated with Enter or Space key
      if (event.key === "Enter" || event.key === " ") {
        toggleSidebarNav();
        event.preventDefault();
      }
    });
  }

  // Close the menu if open when the escape key is pressed
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.getAttribute("data-open") === "open") {
      toggleSidebarNav();
    }
  });

  // Close the menu if a link is clicked
  if (menuWrapper) {
    menuWrapper.addEventListener("click", (event) => {
      // Check if the click is inside a link within a navigation item
      if (event.target.closest(".header__menu-navigation-item a")) {
        toggleSidebarNav();
      }
    });
  }

  if (backgroundWrapper) {
    backgroundWrapper.addEventListener("click", (event) => {
      // Close the menu if the background wrapper is clicked
      if (event.target === backgroundWrapper) {
        toggleSidebarNav();
      }
    });
  }
});
