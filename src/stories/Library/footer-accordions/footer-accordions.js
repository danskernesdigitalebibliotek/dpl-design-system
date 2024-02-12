document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelector("[data-footer-accordions]");

  accordions.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-footer-accordion-trigger]");

    if (!btn) return;

    const isOpen = btn.getAttribute("aria-expanded") === "true";
    const target = btn.parentNode.nextElementSibling;

    btn.setAttribute("aria-expanded", String(!isOpen));
    target.hidden = isOpen;
  });
});
