document.addEventListener("DOMContentLoaded", () => {
  const categories = document.querySelectorAll("[data-show-more-item]");
  const toggleButton = document.querySelector("[data-show-more-button]");
  const initialVisibleItems =
    document.querySelector("[data-show-more-initial-visible-items]") ?? 2; // default to 2 if not set

  // if there are no categories or only one category, hide the toggle button
  // or if there are less categories than the initial visible items, hide the toggle button
  if (categories.length <= 1 || categories.length <= initialVisibleItems) {
    toggleButton.classList.add("show-more__hidden");
    return;
  }

  // Get the show more and show less text from data attributes or use defaults
  const showMoreText = toggleButton.getAttribute("data-show-more-text") ?? "+";
  const hideMoreText =
    toggleButton.getAttribute("data-show-more-hide-text") ?? "-";

  const visibleItems = initialVisibleItems - 1; // -1 because of is array index based

  categories.forEach((item, index) => {
    if (index > visibleItems) item.classList.add("show-more__hidden");
  });

  toggleButton.addEventListener("click", () => {
    const isExpanded = toggleButton.getAttribute("aria-expanded") === "true";

    categories.forEach((item, index) => {
      if (index > visibleItems) item.classList.toggle("show-more__hidden");
    });

    toggleButton.innerText = isExpanded ? showMoreText : hideMoreText;
    toggleButton.setAttribute("aria-expanded", !isExpanded);
  });
});
