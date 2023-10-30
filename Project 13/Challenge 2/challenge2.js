//Sort Strings by Length
function sortStringsByLength(arr) {
    arr.sort(function (a, b) {
      return a.length - b.length;
    });
    return arr;
  }
  
  const inputArray = [];
  
  for (let i = 0; i < 3; i++) {
    const inputString = prompt("Enter a string:");
    inputArray.push(inputString);
  }
  
  const sortedArray = sortStringsByLength(inputArray);
  console.log("Sorted strings by length:", sortedArray);
  