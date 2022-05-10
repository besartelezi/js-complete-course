# js-complete-course
Some of the Javascript assignments I have been doing on BeCode

## Base 
## Colors 
## Dates 
### 04-locale-date 
This was an assignment I spent a **LOT** of time on, but I finally managed to finish it. The links that helped me out a lot were: https://www.w3schools.com/jsref/jsref_getday.asp <br />
and: https://codehandbook.org/javascript-date-format/ <br />
I did not know that javascript could automatically assign the right days and months to the date, so I spent a lot of time on figuring out if I could solve it through the power of math and google.
## Maths 
### 01-Calculator 
I struggled a bit with this exercise. The main issue I had was when I wanted javascript to do 5+5=10, it actually did 5+5=55 instead.
I added the .value at the end of my variable, but it still did not work. I then did some research and discovered that I had to add a parseInt().
Eventually, my code looked like this:<br />
**const one = parseInt(document.getElementById("op-one").value);**
### 02-Calculator Two 
This assignment made us work with switch. Not the Nintendo Switch unfortunately. Something that helped me out quite a lot were these 2 links: <br />
http://jsfiddle.net/pufamuf/FV4jW/1/ <br />
http://jsfiddle.net/FV4jW/9/ <br />
Here you can see the way to use the switch with buttons. <br />
I added the variables that would contain the input from the user **above** of the switch and not inside of it, because I did not want to repeat the variables constantly, and also because all buttons will use the same two fields for their input.
###### p.s., I have yet to figure out how to show the result of the calculator on the screen in a way that is neither document.write nor window.alert, I will keep you updated if I find something way more practical 
### 03-FizzBuzz 
I unfortunately found the answer to this code almost immediately. I glossed over it, and I started to understand the logic behind it. <BR />
But I think the name of this assignment should be changed to something else, just so that people won't find the answer immediately on the internet.<br />
After doing the fizzbuzz assignment, I did learn a lot about loops and how handy the **% sign** is.

## Arrays 
### 01-get-element 
I thought the task was to show every fourth element from the array in the console log, so I wasted a lot of time trying to figure that out, while we only had to show the fourth element from the array.
### 02-manipulate array 
By using the **pop, shift, push, and unshift** methods, I was able to do everything that was asked of me in this task.
I learned there are different methods you can use to manipulate the array, but more importantly, if you want to actually have your array show up in your console, you need to add the variable name of your array to the console.log. <br />
So it should look something like this. < br/>
console.log(fruits);, the 'fruits' here being the name of your array.
### 03-walk-one 
Used the for loop method in this assignment, this link helped me a lot: https://stackoverflow.com/questions/54507913/how-to-use-a-for-loop-to-console-log-each-item-of-an-array <br />
This link helped me understand loops a bit better: https://www.dofactory.com/javascript/loops#:~:text=JavaScript%20Loops%20are%20used%20to,is%20the%20same%20as%20looping. <br />
##### A general tip for anyone reading this, when the assignment mentions that something has to happen, I always start the assignment by writing this piece of code: document.getElementById("id-name-of-button").onclick = function NameFunction
Replace the name of "id-name-of-button" with the id of the button that you can find in the HTML, and NameFunction with the name you'd ike to give that function. Just choose something that describes what you want that function to do.
### 04-walk-two 
Using the ForEach method was a bit complicated, but this link explained it pretty good: https://www.programiz.com/javascript/forEach <br />
I was adding the "fruits" variable name in between the brackets in both the console log and the second function I used. This resulted in the elements of the array not properly showing up in my console log. <br />
I fixed this by using a separate variable name in the variable log and the second function. 
### 05-walk-three 
Finishing this assignment using the ForEach method is what makes this so difficult, I had already figured out that I can use the filter method to just filter out the output to the console log so only the first and last names show up. <br />
This however, is not the desired result. After some research (googling stuff with tears in my eyes), I was able to figure out the correct terminology and pinpoint my exact problems a bit better. <br />
The goal of this exercise is to teach us what an array oj objects is, you can find a good explanation on this here: https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/ <br />
Thanks to that, I was able to more specifically find the answer I was looking for, how to show only the first and last names of the people in the array on the console log. <br />
A link that helped me out how the write the code was this one: https://stackoverflow.com/questions/19529403/how-can-i-loop-through-a-javascript-object-array <br />
### 06-find-in-array 
I think this was my favourite assignment (for now) in this javascript course. It was quite difficult but when I took a short break and started working on it again, the answer came to me immediately. <br />
I learned that you can specify which parts of the objects in the array you'd like to use (in this example, by using 'MyVarName.email', I was able to specify to the console log that I wanted only the email to show up) <br />
Next I used the findIndex method to show in the console log what the index was. This linked helped me realize what the findindex was and how it can be used: https://stackoverflow.com/questions/15997879/get-the-index-of-the-object-inside-an-array-matching-a-condition <br />
### 07-filter-array
I looked up some information on filtering and this helped me out a lot: https://www.javascripttutorial.net/javascript-array-filter/#:~:text=JavaScript%20Array%20filter()%20method%20in%20detail&text=The%20filter()%20method%20creates,element%20to%20the%20callback%20function. <br />
Thanks to what I learned from the previous assignment, this one went pretty smoothly. I only forgot to add a new variable that was just a filtered version of the people array, I just filtered the array itself in the console.log <br />
I fixed this afterwards though. If you want to see how I did it first, I left the code there as a comment.
### 08-array-includes
Using the includes() method together with the if-else method, I quickly got the result I wanted. This link helped me out a lot: https://www.w3schools.com/jsref/jsref_includes_array.asp <br />
### 09-reduce-array
What helped me the most with this assignment, was taking a step back, analyzing the problem, and looking up the correct terminology for everything so I could look way better for an answer. <br />
I looked up at the W3schools website for more information on arrays, that way I was able to create a new array of objects called **let peopleage**, by extracting the properties in the previous array, *var people*, into my new array. <br />
Once I did that, I created a new array containing only the age of the people in the previous array in a **new array**. </br>
Then I created another variable *let sum* containing the reduce() function, and then I console.log-ged that variable.
### 10-dedupe array
Used the *Set* function to create a new array without any of the duplicates in the previous array.
## Dom 
