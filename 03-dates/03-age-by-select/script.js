/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here
    const click = document.getElementById("run");
    console.log(click)
    click.addEventListener("click", showage)
    function showage() {
        const usery = document.getElementById("dob-year").value;
        const thisy = new Date().getFullYear()
        const agey = thisy - usery;
        document.write("You are " +agey+ " Years old.");
    }
})();
