function checkAge(age) {
  if (age < 18) {
    throw new Error("You must be 18 or older!");
  }
  console.log("Access granted!");
}

try {
  checkAge(15);
} catch (error) {
  console.error("Caught error:", error.message);
} finally {
  console.log("Check complete.");
}
