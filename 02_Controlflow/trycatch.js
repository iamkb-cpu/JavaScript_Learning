try {
  console.log("Before error");
  let result = 10 / userNumber; // userNumber is not defined
  console.log("This line will not run");
} catch (error) {
  console.log("An error occurred!");
  console.log("Error details:", error.message);
}
