/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    //Start from the task at hand, what the code has to do, not from the user input
    //read on this link to get a clearer understanding on how to fix this issue: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay
    //[0] = Sunday, so I have to check on every month where [5] = 13
    //then figure a way to implement the user input to this
    document.getElementById("run").onclick = function (){
        const givenyear = document.getElementById("year").value;
        console.log(givenyear)
    }
})();
