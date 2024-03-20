// X = "hello" remove the duplicate character from given string

function removeDuplicates(str) {
  return str
    .split("")
    .filter(function (item, index, arr) {
      return arr.indexOf(item) === index;
    })
    .join("");
}

var stringWithDuplicates = "hello";
var stringWithoutDuplicates = removeDuplicates(stringWithDuplicates);
console.log(stringWithoutDuplicates);
