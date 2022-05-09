# js-complete-course
Some of the Javascript assignments I have been doing on BeCode

## Base ##
## Colors ##
## Dates ##
## Maths ##
### 01-Calculator ###
I struggled a bit with this exercise. The main issue I had was when I wanted javascript to do 5+5=10, it actually did 5+5=55 instead.
I added the .value at the end of my variable, but it still did not work. I then did some research and discovered that I had to add a parseInt().
Eventually, my code looked like this:<br />
**const one = parseInt(document.getElementById("op-one").value);**
### 02-Calculator Two ###
This assignment made us work with switch. Not the Nintendo Switch unfortunately. Something that helped me out quite a lot were these 2 links: <br />
http://jsfiddle.net/pufamuf/FV4jW/1/ <br />
http://jsfiddle.net/FV4jW/9/ <br />
Here you can see the way to use the switch with buttons. <br />
I added the variables that would contain the input from the user **above** of the switch and not inside of it, because I did not want to repeat the variables constantly, and also because all buttons will use the same two fields for their input.
###### p.s., I have yet to figure out how to show the result of the calculator on the screen in a way that is neither document.write nor window.alert, I will keep you updated if I find something way more practical ######
### 03-FizzBuzz ###
I unfortunately found the answer to this code almost immediately. I glossed over it, and I started to understand the logic behind it. <BR />
But I think the name of this assignment should be changed to something else, just so that people won't find the answer immediately on the internet.<br />
After doing the fizzbuzz assignment, I did learn a lot about loops and how handy the **% sign** is.

## Arrays ##
### 01-get-element ###
I thought the task was to show every fourth element from the array in the console log, so I wasted a lot of time trying to figure that out, while we only had to show the fourth element from the array.
### 02-manipulate array ###
By using the **pop, shift, push, and unshift** methods, I was able to do everything that was asked of me in this task.
I learned there are different methods you can use to manipulate the array, but more importantly, if you want to actually have your array show up in your console, you need to add the variable name of your array to the console.log. <br />
So it should look something like this. < br/>
console.log(fruits);, the 'fruits' here being the name of your array.
### ###
## Dom ##

