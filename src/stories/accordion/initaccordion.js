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

window.eventAccordion = (e) => {
  accordion(e);
};
