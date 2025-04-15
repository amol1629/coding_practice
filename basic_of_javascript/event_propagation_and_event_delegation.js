/**
 * * Event Propagation :
 * - The event propagation mode determines the order in which elements receive events.
 * - When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.
 *
 * - There are three phases of event propagation:
 *                  1) Capture phase : The event goes from root document to the target element. (value : true)
 *                  2) Target phase : The event reached the target element.
 *                  3) Bubble phase (   Default phase ) : The event bubbles up from the target element back to the root. (value : false and it is default phase)
 *
 *
 */

/**
 * * Event Delegation In JavaScript :
 *
 *  - Event delegation is a technique involving adding event listeners to a parent element instead of adding them to the descendant elements.
 *  - Instead of adding event listeners to multiple child elements individually, the parent element handles the event by utilizing event bubbling.
 *  - Event delegation allows you to avoid adding event listeners to specific nodes; instead, the event listener is added to one parent.
 */

// Event delegation example :

const eventDelegationListParentDiv = document.getElementById("todo-list");
eventDelegationListParentDiv.addEventListener("click", (e) => {
	if (e.target.tagName === "LI") {
		return console.log("Clicked : ", e.target.textContent);
	}

	return console.log("This is not list item");
});
