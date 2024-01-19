# How to Implement Show More/Less Functionality

The "Show More/Less" feature allows you to display a limited number of list
items initially, with an option for users to expand the list to view more items.
Follow these steps to implement this feature effectively:

## HTML Structure

Structure your HTML elements as follows for implementing the
"Show More/Less" feature:

- **List Element**:
Use an `<ul>` or `<ol>` element with the `data-show-more-list` attribute
This element will contain both the list items and the toggle button.
- **List Items**:
Assign the `data-show-more-item` attribute to each list item that you want
to show or hide.
- **Toggle Button**:
Place a button within the list element with the `data-show-more-button`
attribute. This button is used by users to toggle the visibility of list items.
- **ARIA Expanded**:
Add the `aria-expanded="false"` attribute to the button to indicate the current
state (expanded or collapsed) of the additional content.
- **Show More Text (Optional)**:
Use the `data-show-more-text` attribute on the button to specify the text
displayed when there's more content to show.
- **Show Less Text (Optional)**:
Use the `data-show-more-hide-text` attribute on the button to specify the text
displayed when the list is in its collapsed state.
- **Initial Visible Items (Optional)**:
Set the initial number of visible items with the
`data-show-more-initial-visible-items` attribute. It defaults to 2 if not set.

### Example HTML Markup

```html
<ul data-show-more-list>
  <li data-show-more-item>Item 1</li>
  <li data-show-more-item>Item 2</li>
  <!-- additional items are hidden by default -->
  <li data-show-more-item>Item 3</li>
  <button
    class="cursor-pointer"
    aria-expanded="false"
    data-show-more-button
    data-show-more-text="Show more"
    data-show-more-hide-text="Show less"
    data-show-more-initial-visible-items="2"
  >
    Show more
  </button>
</ul>
``````
