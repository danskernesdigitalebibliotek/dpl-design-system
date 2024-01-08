# How to Implement Show More/Less Functionality
To integrate a "Show More/Less" feature, follow these steps.
This feature is particularly useful for lists where you want to initially display a limited number of items and give users the option to view more.

## HTML Structure
First, organize your HTML elements as follows:

- **ARIA Expanded**: Include the `aria-expanded="false"` attribute on the button to indicate whether the additional content is currently expanded or collapsed.
- **List Items**: Apply the `data-show-more-item` attribute to each item you want to toggle.
- **Toggle Button**: Include a button with the `data-show-more-button` attribute. This is what users will interact with.
- **Show More Text (Optional)**: Include the `data-show-more-text` attribute on the button to specify the text that should be displayed when there is more content to be shown.
- **Show Less Text (Optional)**: Include the `data-show-more-hide-text` attribute on the button to specify the text that should be displayed when there is less content to be shown.
- **Initial Visible Items (Optional)**: Optionally include an element with `data-show-more-initial-visible-items` attribute to dynamically set the number of items visible initially. If not set, it defaults to 2.

```html
<div data-show-more-item>Item 1</div>
<div data-show-more-item>Item 2</div>
<!-- all items after this are hidden by default  -->
<div data-show-more-item>Item 3</div>

<button
  class="cursor-pointer"
  aria-expanded="false"
  data-show-more-button
  data-show-more-text="Custom Show more"
  data-show-more-hide-text="Custom Show less"
  data-show-more-initial-visible-items="3"
>
  Show more
</button>
