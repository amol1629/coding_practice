/**
 * * preventDefault() Method In JavaScript :
 *
 *  - The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
 *  - The preventDefault() stops the browser's default behavior.
 *  - Default actions are predefined browser behaviors, such as ::
 *          1) Clicking on a "Submit" button, prevent it from submitting a form.
 *          2) Clicking on a link, prevent the link from following the URL.
 *          3) Scrolling a page when using the "wheel" event.
 *
 *  - The preventDefault() method does not prevent further propagation of an event through the DOM. Use the stopPropagation() method to handle this.
 *
 *  - Common Use Cases :
 *          1) Preventing form submission.
 *          2) Preventing link navigation.
 *          3) Custom scroll behavior.
 *
 *  - The "passive" option can be used to indicate that the event listener will never call preventDefault(). This can improve performance for events like scroll.
 */

/**
 * * stopPropagation() Method In JavaScript :
 *
 *  - Purpose : Stops event propagation to parent/ancestor elements.
 *  - The stopPropagation() method is used in event handling to stop the event from propagation further through the DOM.
 *  - It prevents the event from reaching other event listeners registered on parent or ancestors elements during either "capture" or "bubble" phase event propagation.
 *  - The stopPropagation() method does not prevent the default behavior of the event from occurring.
 *  - The stopPropagation() method should be used when you do not want an event to trigger parent or ancestor elements.
 *  - The stopPropagation() method is used in conjunction with the preventDefault() method.
 *
 *  - Common Use Cases :
 *          1) Preventing event bubbling and capturing.
 *          2) Stopping event propagation to parent/ ancestor elements.
 *          3) Handling events on nested elements.
 *          4) Prevent the dropdown menu from closing when selecting a menu item by stopping propagation on the click event. 
 *
 */
