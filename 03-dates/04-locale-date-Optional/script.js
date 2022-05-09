/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

    const months = ["January", "February", "March","April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const weekday = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday", "Sunday"];
    let current_datetime = new Date()
    let formatted_date = weekday[current_datetime.getDay()] + " " + current_datetime.getDate() + " " + months[current_datetime.getMonth()] + " " + current_datetime.getFullYear() + ", " + current_datetime.getHours() + "h" + current_datetime.getMinutes()
    document.getElementById("target").innerHTML = formatted_date;

})();
