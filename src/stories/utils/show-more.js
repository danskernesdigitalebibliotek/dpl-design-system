document.addEventListener("DOMContentLoaded", () => {
  const lists = document.querySelectorAll("[data-show-more-list]");

  lists.forEach((list) => {
    const uid = Math.floor(Math.random() * 1000000);
    list.setAttribute("id", `category-list-${uid}`);

    const categories = list.querySelectorAll("[data-show-more-item]");
    const toggleButton = list.querySelector("[data-show-more-button]");
    toggleButton.setAttribute("id", `category-toggle-${uid}`);

    const initialVisibleItems =
      list.getAttribute("data-show-more-initial-visible-items") || 2; // default to 2 if not set

    // if there are no categories or only one category, hide the toggle button
    // or if there are less categories than the initial visible items, hide the toggle button
    if (!categories.length || categories.length <= initialVisibleItems) {
      toggleButton.classList.add("show-more__hidden");
      return;
    }

    const showMoreText =
      toggleButton.getAttribute("data-show-more-text") || "+";
    const hideMoreText =
      toggleButton.getAttribute("data-show-more-hide-text") || "-";
    const visibleItems = initialVisibleItems - 1;

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
});
