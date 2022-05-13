/* becode/javascript
 *
 * /07-misc/01
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    // This selects the target text, and then splits every letter from the text into a seperate object in an array
    const Target = document.getElementById("target");
    const StringTarget = Target.textContent;
    const SplitText = StringTarget.split ("");
    Target.textContent = ""

    // This puts a <span> element between every character from the string
    for (let i=0; i < SplitText.length; i++){
        Target.innerHTML += "<span>" + SplitText[i] + "</span>";
    }
    
})();
