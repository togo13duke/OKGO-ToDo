/**
 * Initializes the event listener for the DOMContentLoaded event
 */
function init() {
    // Get the <h1> element
    const h1Elm = document.querySelector("h1");

    // If the element exists, add an event listener for the click event
    if (h1Elm) {
        h1Elm.addEventListener("click", toggleColor);
    }
}

/**
 * Toggles the color of the <h1> element between blue and red
 */
function toggleColor() {
    const h1Elm = document.querySelector("h1");
    h1Elm.style.color === "blue" ? (h1Elm.style.color = "red") : (h1Elm.style.color = "blue");
}

// Add an event listener for the DOMContentLoaded event, to call the `init` function
document.addEventListener("DOMContentLoaded", init);
