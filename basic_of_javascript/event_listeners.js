/**
 * * Event Listeners In JavaScript :
 * -----------------------------------------------------------------------------------------------
 *  - Event listeners are used to listen to events in JavaScript.
 *  - Events are actions or occurrences that happen in the system you are programming, which the system tells you about so you can respond to them in some way if desired.
 *  - For example, if the user clicks a button on a webpage, you might want to respond to that action by displaying an information box.
 *  - Event listeners are used to trigger a function when a specific event occurs.
 *
 *  - Syntax :
 *         element.addEventListener(event, function, useCapture);
 *                       - event : Specifies the name of the event.
 *                       - function : Specifies the function to run when the event occurs.
 *                       - useCapture : Optional. A Boolean value that specifies whether the event should be executed in the capturing or in the bubbling phase. Default is false.
 *
 *  - The addEventListener() method attaches an event handler to an element without overwriting existing event handlers.
 *  - You can add many event handlers to one element.
 *  - You can also add many event handlers of the same type to one element, i.e., two "click" events.
 *
 *  - As of now, useCapture, once, and passive are the primary standard options available when using addEventListener in JavaScript. They control how and when the event listener is triggered.
 *          1) useCapture :
 *                  - Purpose : Determines whether  the event listener is executed in the capturing or bubbling phase of the event propagation.
 *                  - Default value : false (bubble phase)
 *
 *          2) once :
 *                  - Purpose : Ensures the event listener is triggered "only once" after which it is automatically removed.
 *                  - Default value : false
 *
 *          3) passive :
 *                  - Purpose : Indicates that the event listener will never call preventDefault(), optimizing performance for scroll and touch events..
 *                  - Default value : false
 * 
 *          4) signal : 
 *                  - Purpose : The listener will removed when the abort() method fo the AbortController which owns the AbortSignal is called.
 *                  - If not specified, no AbortSignal is associated with the listener.
 * 
 
 */
