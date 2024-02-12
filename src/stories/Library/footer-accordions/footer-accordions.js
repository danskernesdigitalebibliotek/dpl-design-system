document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelector("[data-footer-accordions]");

  accordions.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-footer-accordion-trigger]");

    if (!btn) return;

    const isOpen = btn.getAttribute("aria-expanded") === "true";
    const target = btn.parentNode.nextElementSibling;

    btn.setAttribute("aria-expanded", String(!isOpen));

    // Toggle the class based on the isOpen value
    if (isOpen) {
      target.classList.add("footer__content--hidden");
    } else {
      target.classList.remove("footer__content--hidden");
    }
  });
});
