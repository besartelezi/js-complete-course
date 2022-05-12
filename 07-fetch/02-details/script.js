/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    async function getheroes () {
        const response = await fetch("../../_shared/api.json");
        const data = await response.json();
        // How to write the code console.log(data.heroes[0].id)
        document.getElementById("run").onclick = function (){

            const textbox = +document.getElementById("hero-id").value;

            if (textbox === 1) {
                console.log(data.heroes[0].name)
            }
            else {
                window.alert ("yeet")
            }
        }
    }

    getheroes()

})();
