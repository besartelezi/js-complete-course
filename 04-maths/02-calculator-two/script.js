/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value

    var performOperation = function(operation) {
        // perform the operation
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
            const x = parseInt(document.getElementById("op-one").value);
            const y = parseInt(document.getElementById("op-two").value);
            switch ($btn.id) {
                case "addition": const add = x + y;
                window.alert(add); break;
                case "substraction": const subs = x - y;
                window.alert(subs); break;
                case "multiplication": const multi = x * y;
                window.alert(multi); break;
                case "division": const div = x / y;
                window.alert(div); break;
            }
        });
    });
})();
