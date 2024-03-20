function printCenterStarPattern(rows) {
  for (var i = 1; i <= rows; i++) {
    var space = "";
    for (var s = 1; s <= rows - i; s++) {
      space += " ";
    }
    var star = "";
    for (var j = 1; j <= 2 * i - 1; j++) {
      star += "*";
    }
    console.log(space + star);
  }
}

printCenterStarPattern(5);
