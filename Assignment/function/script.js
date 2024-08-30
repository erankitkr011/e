// Task 1: Sum of Arguments
function add(...args) {
    return args.reduce((sum, current) => sum + current, 0);
  }
  
  // Task 2: Find Index of Nested Array
  function getIndex(nestedArray, targetArray) {
    for (let i = 0; i < nestedArray.length; i++) {
      if (JSON.stringify(nestedArray[i]) === JSON.stringify(targetArray)) {
        return i;
      }
    }
    return -1;
  }

  console.log(add(1, 2, 3, 4)); // Output: 10
  console.log(add(32, 64, -9, 56.5, 77)); // Output: 220.5
  
  console.log(getIndex([[1, 2], [3, 4], [5, [6, 7]]], [5, [6, 7]])); // Output: 2
  console.log(getIndex([[1, 2], [3, 4], [5, [6, 7]]], [9, 8])); // Output: -1