/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function questions(reload) {

    // your code here
    let age = prompt("What is Thine Age?")
    let gender = prompt("What is Thine Gender")
    let location = prompt("Where Does Thou Liveth (Fret Not For I Shall Not Invade Thine Place of Residence)");
    if (confirm("Are you a " + age + " year old " + gender + " living in " + location + "?") === true) {
        document.write("You are the crispiest " + age + " year old " + gender + " living in " + location + " I have ever seen gawd damn")
    }
    else {
        questions(reload)
    }
})();
