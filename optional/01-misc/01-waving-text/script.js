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


    //Figuring Out how to do this, I will find my way one day someday if I may heresay olay nor nay eat some hay
    const TargetText = document.getElementById("run");
    const NewText = "Just Some random text I will edit later probably maybe"
    const SplitText = NewText.textContent.split("")
    console.log(NewText)
    for (let i =0; i < SplitText.length; i++){
        TargetText.innerHTML += "<span>" + SplitText[i] + "</span>";
    }
    console.log()

    // your code here


  //If I do it like this, I won't add a new original text, so I will ignore this for now
    // This selects the target text, and then splits every letter from the text into a seperate object in an array
    //    const Target = document.getElementById("target");
    //    const StringTarget = Target.textContent;
    //    const SplitText = StringTarget.split ("");
    //    Target.textContent = ""

    // This puts a <span> element between every character from the string
    //    for (let i=0; i < SplitText.length; i++){
    //  Target.innerHTML += "<span>" + SplitText[i] + "</span>";
    //    }

    //    const spandam = document.getElementsByTagName("span");
    //    spandam.style.fontSize = "15px"


})();
