/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    const typebar = document.getElementById("pass-one").value;
    const typebar2 = typebar.count(typebar);
    document.getElementById("counter").innerHTML = typebar2.length + "/10";




})();
