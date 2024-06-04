document.addEventListener("DOMContentLoaded", () => {
  const listWrappers = document.querySelectorAll(
    "[data-show-more-list-wrapper]"
  );

  listWrappers.forEach((listWrapper) => {
    const list = listWrapper.querySelector("[data-show-more-list]");
    const listId = list.getAttribute("data-show-more-list-id");
    const listElements = list.querySelectorAll("[data-show-more-item]");
    const amountOfListElements = parseInt(listElements.length, 10);
    const listShowMoreButton = listWrapper.querySelector(
      "[data-show-more-button]"
    );

    if (!list || !listShowMoreButton || !listElements || !listId) {
      const missingElements = [];
      if (!list) missingElements.push("list");
      if (!listShowMoreButton) missingElements.push("listShowMoreButton");
      if (!listElements.length) missingElements.push("listElements");
      if (!listId) missingElements.push("listId");

      // eslint-disable-next-line no-console
      console.debug(
        `show-more.js: Missing required elements: ${missingElements.join(", ")}`
      );
      return;
    }

    // Add listId  & aria attributes to list and buttons
    list.setAttribute("id", `list-id-${listId}`);
    listShowMoreButton.setAttribute("aria-controls", `list-id-${listId}`);

    const initialVisibleItems =
      list.getAttribute("data-initial-visible-items") || amountOfListElements;

    // Hide button if there are less items than the initial visible items
    if (initialVisibleItems >= amountOfListElements) {
      listShowMoreButton.classList.add("show-more__hidden");
      return;
    }

    // Hide items beyond the initial visible items
    listElements.forEach((listItem, index) => {
      if (index > initialVisibleItems - 1)
        listItem.classList.add("show-more__hidden");
    });

    const showMoreText = listShowMoreButton.getAttribute("data-show-more-text");
    const showLessText = listShowMoreButton.getAttribute("data-show-less-text");
    const hideListButtonAfterExpand = list.getAttribute(
      "data-hide-list-button-after-expand"
    );

    listShowMoreButton.addEventListener("click", () => {
      listElements.forEach((listItem, index) => {
        if (index > initialVisibleItems - 1)
          listItem.classList.toggle("show-more__hidden");
      });

      const isAriaExpanded =
        listShowMoreButton.getAttribute("aria-expanded") === "true";
      listShowMoreButton.setAttribute("aria-expanded", !isAriaExpanded);

      listShowMoreButton.innerText = isAriaExpanded
        ? showMoreText
        : showLessText;

      if (hideListButtonAfterExpand === "true" && !isAriaExpanded) {
        listShowMoreButton.classList.add("show-more__hidden");
      }
    });
  });
});
