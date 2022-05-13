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

    //Adding a new div element copying the contents of the template, and appending it as the child of the id:target
    const Output = document.createElement("div");
    Output.setAttribute("id", "NewTemplate");
    const Target = document.getElementById("target");
    Target.appendChild(Output);

    //Getting the API.json
    async function getheroes () {
        const response = await fetch("../../_shared/api.json");
        const data = await response.json();

        document.getElementById("run").onclick = function (){
            const textbox = +document.getElementById("hero-id").value;
            const Templ = document.getElementById("tpl-hero").content;
            const CopyTempl = document.importNode(Templ, true);

            //I could probably use a loop for this, but I currently not aware of how to get started with that

            if (textbox === 1) {
                CopyTempl.querySelector(".name").textContent = data.heroes[0].name
                CopyTempl.querySelector(".alter-ego").textContent = data.heroes[0].alterEgo
                CopyTempl.querySelector(".powers").textContent = data.heroes[0].abilities
                document.getElementById("NewTemplate").appendChild(CopyTempl)
            }
            if (textbox === 2) {
                CopyTempl.querySelector(".name").textContent = data.heroes[1].name
                CopyTempl.querySelector(".alter-ego").textContent = data.heroes[1].alterEgo
                CopyTempl.querySelector(".powers").textContent = data.heroes[1].abilities
                document.getElementById("NewTemplate").appendChild(CopyTempl)
            }
            if (textbox === 3) {
                CopyTempl.querySelector(".name").textContent = data.heroes[2].name
                CopyTempl.querySelector(".alter-ego").textContent = data.heroes[2].alterEgo
                CopyTempl.querySelector(".powers").textContent = data.heroes[2].abilities
                document.getElementById("NewTemplate").appendChild(CopyTempl)
            }
            if (textbox === 4) {
                CopyTempl.querySelector(".name").textContent = data.heroes[3].name
                CopyTempl.querySelector(".alter-ego").textContent = data.heroes[3].alterEgo
                CopyTempl.querySelector(".powers").textContent = data.heroes[3].abilities
                document.getElementById("NewTemplate").appendChild(CopyTempl)
            }
            if (textbox === 5) {
                CopyTempl.querySelector(".name").textContent = data.heroes[4].name
                CopyTempl.querySelector(".alter-ego").textContent = data.heroes[4].alterEgo
                CopyTempl.querySelector(".powers").textContent = data.heroes[4].abilities
                document.getElementById("NewTemplate").appendChild(CopyTempl)
            }
        }
    }


    getheroes()

})();
