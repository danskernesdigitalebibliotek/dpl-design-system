function initHeader() {
  // Checking if the listener is initialized
  if (window.dpl?.header) {
    return;
  }
  const elementOverlay = document.getElementById("header-overlay");
  const elementClose = document.getElementById("header-menu--close");
  const elementOpen = document.getElementById("header-menu--open");

  console.log({
    elementOverlay,
    elementClose,
    elementOpen,
  });

  if (!elementOverlay || !elementClose || !elementOpen) {
    console.info("Header - Couldn't find elements");
    return;
  }

  function onClick() {
    elementOverlay.classList.toggle("visible");
  }

  elementClose.addEventListener("click", onClick);
  elementOpen.addEventListener("click", onClick);

  window.dpl = {
    ...window.dpl,
    header: true,
  };
}

initHeader();
