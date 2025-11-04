outerLoop:
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (i === 2 && j === 2) break outerLoop;
    console.log(i, j);
  }
}
