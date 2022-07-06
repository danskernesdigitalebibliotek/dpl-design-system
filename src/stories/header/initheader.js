window.eventHeader = () => {
  const elementOverlay = document.getElementById("header__overlay");
  const elementClose = document.getElementById("header__menu--close");
  const elementOpen = document.getElementById("header__menu--open");

  if (!elementOverlay || !elementClose || !elementOpen) {
    // eslint-disable-next-line
    console.info("Header - Couldn't find elements");
    return;
  }

  elementOverlay.classList.toggle("visible");
};
