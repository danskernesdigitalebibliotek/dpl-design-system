window.eventHeader = () => {
  const elementOverlay = document.getElementById("header-overlay");
  const elementClose = document.getElementById("header-menu--close");
  const elementOpen = document.getElementById("header-menu--open");

  if (!elementOverlay || !elementClose || !elementOpen) {
    console.info("Header - Couldn't find elements");
    return;
  }

  elementOverlay.classList.toggle("visible");
};
