// Student Performance Analyzer

let students = [
  { name: "Alice", marks: 85 },
  { name: "Bob", marks: 72 },
  { name: "Charlie", marks: 95 },
  { name: "David", marks: 60 }
];

for (let student of students) {
  console.log(`\nEvaluating ${student.name}:`);
  
  // if...else
  if (student.marks >= 90) student.grade = "A+";
  else if (student.marks >= 75) student.grade = "A";
  else if (student.marks >= 60) student.grade = "B";
  else student.grade = "C";

  // switch
  switch (student.grade) {
    case "A+":
      console.log("Excellent performance!");
      break;
    case "A":
      console.log("Very good work!");
      break;
    case "B":
      console.log("Good effort!");
      break;
    default:
      console.log("Needs improvement!");
  }

  console.log(`Grade assigned: ${student.grade}`);
}

// while & do...while
let i = 0;
while (i < students.length) {
  console.log(`${students[i].name} has marks ${students[i].marks}`);
  i++;
}

let count = 0;
do {
  console.log("This executes at least once!");
  count++;
} while (count < 1);

// for...in (loop through properties)
let exampleStudent = { name: "Eva", marks: 88, grade: "A" };
console.log("\nUsing for...in loop:");
for (let key in exampleStudent) {
  console.log(`${key}: ${exampleStudent[key]}`);
}

// labelled, break & continue
console.log("\nUsing labelled loops:");
outerLoop:
for (let x = 1; x <= 3; x++) {
  for (let y = 1; y <= 3; y++) {
    if (x === 2 && y === 2) {
      console.log("Breaking out of outer loop");
      break outerLoop;
    }
    if (y === 1) continue;
    console.log(`x=${x}, y=${y}`);
  }
}
