function initAccordion() {
  // Checking if the listener is initialized
  if (window.dpl?.accordion) {
    return;
  }

  const accordionComponent = document.querySelectorAll(".accordion");
  if (accordionComponent.length === 0) {
    console.info("Accordion - Couldn't find class");
    return;
  }

  function accordion(event) {
    if (!event?.target?.closest) {
      console.info("Accordion - No event target");
      return;
    }

    const btn = event.target.closest("[data-accordion-trigger]");

    if (!btn?.getAttribute) {
      console.info("Accordion - Can't find accordion row");
      return;
    }

    if (!btn.parentNode?.nextElementSibling) {
      console.info("Accordion - Can't find next sibling to parentNode");
      return;
    }

    const isOpen = btn.getAttribute("aria-expanded") === "true";
    const target = btn.parentNode.nextElementSibling;

    btn.setAttribute("aria-expanded", !isOpen);
    target.hidden = isOpen;
  }

  accordionComponent.forEach((i) => i.addEventListener("click", accordion));
  window.dpl = {
    ...window.dpl,
    accordion: true,
  };
}

initAccordion();
