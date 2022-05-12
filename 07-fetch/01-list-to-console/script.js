/* becode/javascript
 *
 * /09-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    async function getheroesdata(){
        let heroes = await fetch("../../_shared/api.json");
        let main = await heroes.json();
        document.getElementById("run").onclick = function () {
            console.log(main)
        }
    }

    getheroesdata()

    //{
    //    let heroes = fetch(".../s-complete-course/_shared/api.json").then((response) => {
    //        if (!response.ok){
     //           throw new Error("Oopsie Woopsie, something went wrongsies uwu")
     //       }
     //       return response;
     //   })
     //       .then ((response => {
     //       console.log(heroes)
     //       }))
    //}

})();
