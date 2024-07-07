// Q1
var multiArray = [[]];

// Q2
var matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
  ];  
console.log(matrix);

// Q3
document.write("<h2>" + "Numeric Counting"  + "</h2>");
for (var i = 1; i <= 10; i++) {
    document.write(i + "<br>");
  }  

// Q4
var number = prompt("Enter the number for multiplication table");
var length = prompt("Enter the length of the multiplication table");
document.write("<h2>Multiplication Table of " + number + "</h2>");
for(var i = 1; i <= length; i++){
    document.write(number + " X " + i + " = " + number*i + "<br>");
}

// Q5
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
document.write("<h2>" + "Fruits"  + "</h2>");
for(var i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>");
}

// Q6
document.write("<h2>" + "Series"  + "</h2>");
// a
document.write("a. Counting: ");
for(var i = 1; i <= 15; i++) {
    document.write(i + ", ");
}
document.write("<br>");

// b
document.write("b. Reverse counting: ");
for(var i = 10; i >= 1; i--) {
    document.write(i + ", ");
}
document.write("<br>");

// c
document.write("c. Even: ");
for(var i = 0; i <= 20; i += 2) {
    document.write(i + ", ");
}
document.write("<br>");

// d
document.write("d. Odd: ");
for(var i = 1; i <= 19; i += 2) {
    document.write(i + ", ");
}
document.write("<br>");

// e
document.write("e. Series: ");
for(var i = 2; i <= 20; i += 2) {
    document.write(i + "k, ");
}
document.write("<br>");

// Q7
var a = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Welcome to our bakery. What would you like to search for?");
userInput = userInput.toLowerCase();
var found = false;
for(var i = 0; i < a.length; i++) {
    if(a[i].toLowerCase() === userInput) {
        found = true;
        break;
    }
}
if(found) {
    alert(userInput + " is available at our bakery!");
} else {
    alert(userInput + " is not available at our bakery.");
}

// Q8
var A = [24, 53, 78, 91, 12];
var largest = A[0];
document.write("<h2>" + "Largest Number"  + "</h2>");
for(var i = 1; i < A.length; i++) {
    if(A[i] > largest) {
        largest = A[i];
    }
}
document.write("The largest number in the array is: " + largest);

// Q9
var A = [24, 53, 78, 91, 12];
var smallest = A[0];
document.write("<h2>" + "Smallest Number"  + "</h2>");
for(var i = 1; i < A.length; i++) {
    if(A[i] < smallest) {
        smallest = A[i];
    }
}
document.write("The smallest number in the array is: " + smallest);

// Q10
document.write("<h2>" + "Multiples of 5 from 1 to 100:"  + "</h2>");
for(var i = 1; i <= 100; i++) {
    if(i % 5 === 0) {
        document.write(i + ", ");
    }
}