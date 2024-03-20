function reverseTheString(str) {
  const reverseArr = [];

  for (i = str.length - 1; i >= 0; i--) {
    reverseArr.push(str[i]);
  }

  return reverseArr.join("");
}

const str = "shubham";
const reverseStr = reverseTheString(str);
console.log(`reverse of ${str} is ${reverseStr}`);
