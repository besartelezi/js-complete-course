/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    //your code here
    const img = document.querySelector("img");
    const start = img.src;
    const hover = img.getAttribute("data-hover");
    img.addEventListener ("mouseover", () => {
    img.src = hover
    })

    img.addEventListener("mouseout", () => {
    img.src = start
    })

})();
