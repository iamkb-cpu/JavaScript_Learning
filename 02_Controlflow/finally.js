try {
  console.log("Opening file...");
  throw new Error("File not found!"); // manually throw an error
} catch (error) {
  console.log("Error:", error.message);
} finally {
  console.log("Closing file... (this always runs)");
}
