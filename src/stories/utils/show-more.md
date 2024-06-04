# How to Implement Show More/Less Functionality

The "Show More/Less" feature allows you to display a limited number of list
items initially, with an option for users to expand the list to view more items.
Follow these steps to implement this feature effectively:

## HTML Structure

Structure your HTML elements as follows for implementing the
"Show More/Less" feature:

- **List wrapper**:
Assign this value to the element that will wrap both the list and the button  
associated with the list. Use a wrapper element with the  
`data-show-more-list-wrapper` attribute.
- **List**:
Assign this to the list you want to control. Include the following data  
attributes for the element:
  - `data-show-more-list`: Indicates that this list is controlled by the show  
  more/less functionality.
  - `[data-show-more-list-id`: Indicates a an ID for the list. The ID is used  
  to set aria-controls on the button to the list, and sets a list-id-X  
  attribute on the list.
  - `data-initial-visible-items`: Specifies the initial number of items visible.
   This is optional and defaults to the total number of items if not set.
  - `data-hide-list-button-after-expand="true"`: Specifies whether to hide the  
  button  after expanding the list. Add this with value of `true` if you do  
  not want the button to be displayed after the list is  
expanded, otherwise do not add it.
- **List Items**:
Assign the `data-show-more-item` attribute to each list item that you want
to show or hide.
- **Toggle Button**:
Place a button within the list element with the data-show-more-button  
attribute. This button is used by users to toggle the visibility of list items.
  - `data-show-more-text`: Specifies the text displayed on the button when  
  there are more items to show.
  - `data-show-less-text`: Specifies the text displayed on the button when  
  the list is fully expanded.
- **AARIA Attributes**:
  - `aria-expanded`: Add the aria-expanded="false" attribute to the button to  
   indicate the initial state (expanded or collapsed) of the additional content.
  - `aria-controls`: This will be added to the button with a reference to  
  the list it controls.

### Example HTML Markup

```html
<div data-show-more-list-wrapper>
  <ul data-show-more-list="true" data-initial-visible-items="2" data-hide-list-button-after-expand>
    <li data-show-more-item>Item 1</li>
    <li data-show-more-item>Item 2</li>
    <!-- additional items are hidden by default -->
    <li data-show-more-item>Item 3</li>
  </ul>
  <button
    class="cursor-pointer"
    aria-expanded="false"
    data-show-more-button="true"
    data-show-more-text="Show more"
    data-show-less-text="Show less"
  >
    Show more
  </button>
</div>

``````
