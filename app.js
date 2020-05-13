let friends = ["Krista", "George", "Rob", "Jasmine", "Maurice"];

for (let a = 0; a < friends.length; a++) {
  console.log(friends[a].toUpperCase() + ":");
  for (let b = 99; b > 0; b--) {
    if (b === 2) {
      console.log(
        b +
          " lines of code in the file, " +
          b +
          " lines of code; " +
          friends[a] +
          " strikes one out, clears it all out, " +
          (b - 1) +
          " line of code in the file"
      );
    } else if (b === 1) {
      console.log(
        b +
          " line of code in the file, " +
          b +
          " line of code; " +
          friends[a] +
          " strikes one out, clears it all out, " +
          (b - 1) +
          " lines of code in the file"
      );
    } else {
      console.log(
        b +
          " lines of code in the file, " +
          b +
          " lines of code; " +
          friends[a] +
          " strikes one out, clears it all out, " +
          (b - 1) +
          " lines of code in the file"
      );
    }
  }
}
