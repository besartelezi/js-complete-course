/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    const link = document.querySelector("#source");
    if (link) {
        const target = link.getAttribute("data-image");
        const newimg = new Image()
        newimg.src = target;
        document.getElementById("target").appendChild(newimg);
        const delimg = document.getElementById("source");
        delimg.remove()
    }
})();
