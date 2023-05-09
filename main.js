document.addEventListener('DOMContentLoaded', function () {
    const h1Elm = document.querySelector('h1');

    if (h1Elm) {
        h1Elm.addEventListener('click', function () {
            if (h1Elm.style.color === 'blue') {
                h1Elm.style.color = 'red';
            } else {
                h1Elm.style.color = 'blue';
            }
        })
    }
});