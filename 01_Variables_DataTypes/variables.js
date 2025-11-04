//Declaring variables using let and const
const schoolName = "Greenwood High";
let studentName = "Alice Johnson";
let age = 16;
let isPresent = true;
let grade = null;

//Using an object to store marks

let marks = {
    math: 95,
    science: 88,
    english: 92
};

//Function to calculate total and percentage

function calculateResult(marks) {
  const total = marks.english + marks.math + marks.science;
  const percentage = total / 3;
  return { total, percentage };
}

//Call the function
let result = calculateResult(marks);

//Use conditions to assign grade
if (result.percentage >= 90) grade = "A+";
else if (result.percentage >= 75) grade = "A";
else if (result.percentage >= 60) grade = "B";
else grade = "C";

//Print all details
console.log("School:", schoolName);
console.log("Name:", studentName);
console.log("Age:", age);
console.log("Marks:", marks);
console.log("Total:", result.total);
console.log("Percentage:", result.percentage.toFixed(2) + "%");
console.log("Grade:", grade);
console.log("Present Today:", isPresent);