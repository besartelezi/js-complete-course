/* becode/javascript
 *
 * /03-colors/02-change-bcg-two/script.js - 3.2: couleur de fond (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    //document.get.onclick = function() document.body.style.backgroundColor = (colorform)

    const click = document.getElementById("run");
    console.log(click)
    click.addEventListener("click", changebackgroundcolor)
    function changebackgroundcolor() {
        const colorform = document.getElementById('color');
        console.log(colorform);
        const colorformcontent =colorform.value;
        console.log(colorformcontent);
        document.body.style.backgroundColor = colorformcontent;
    }

})();
