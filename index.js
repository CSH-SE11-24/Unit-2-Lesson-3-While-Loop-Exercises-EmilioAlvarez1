// Exercise 1: Counting to 10
// Use a while loop to print all numbers from 1 to 10
let x = 1
while(x <= 10){
  console.log(x)
  x++
}



// Exercise 2: Even numbers
// Use a while loop to print all the even numbers from 20 to 40
let even = 20
while(even <=40 ){
  console.log(even)
  even+=2
}


// Exercise 3: Countdown
// Ask the user to enter a positive integer (remember to cast!) Use a while loop to print from that number down to 1
let integer = prompt("Enter a positive integer")
while(integer >= 1 ){
  console.log(integer)
  integer--
}



// Exercise 4: Sum of N Numbers
// Prompt the user to enter a positive integer. Calculate the sum of all numbers from 1 to that number using a while loop and display the result.

let number = prompt("Enter an integer")
let add = 0
let count = 0
while(add <= number){
 add = count + add
  count++
}


// Exercise 5: Password Entry
// Create a simple password entry program. Ask the user to enter a password. Use a while loop to keep prompting the user until they enter the correct password (e.g., "secret").
let password = prompt("Enter your password")
let pass = "HJ"
while(password === pass){
  
}





// Extra Credit: Password Strength Checker
// Create a password strength checker with a while loop. Continuously prompt the user to enter a password until it meets the following criteria:
// - At least 8 characters long
// - Contains both uppercase and lowercase letters
// - Includes at least one special character (e.g., @, #, $, etc.)
// Display a message when a valid password is entered.
// Hint: start by doing the conditions one by one and then combine them after




