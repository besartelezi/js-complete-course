/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("run").onclick = function () {
        const randomArray = [];
        for (let i = 0, j = 10; i < j; i++) {
            randomArray.push(Math.round(Math.random() * 100))
        }
        document.getElementById("n-1").innerHTML = randomArray[0];
        document.getElementById("n-2").innerHTML = randomArray[1];
        document.getElementById("n-3").innerHTML = randomArray[2];
        document.getElementById("n-4").innerHTML = randomArray[3];
        document.getElementById("n-5").innerHTML = randomArray[4];
        document.getElementById("n-6").innerHTML = randomArray[5];
        document.getElementById("n-7").innerHTML = randomArray[6];
        document.getElementById("n-8").innerHTML = randomArray[7];
        document.getElementById("n-9").innerHTML = randomArray[8];
        document.getElementById("n-10").innerHTML = randomArray[9];
        const min = Math.min(...randomArray);
        document.getElementById("min").innerHTML = min;
        const max = Math.max(...randomArray);
        document.getElementById("max").innerHTML = max;
        const sum = randomArray.reduce((a, b) => a + b, 0);
        document.getElementById("sum").innerHTML = sum;
        const average =  randomArray.reduce((a, b) => a + b) / randomArray.length;
        document.getElementById("average").innerHTML = average;

    }
})();
