
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Missing Number Finder</title>
  <script>
function findMissingNumber(nums) {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;

  const actualSum = nums.reduce((sum, num) => sum + num, 0);

  const missingNumber = expectedSum - actualSum;

  return missingNumber;
}

const nums1 = [3, 0, 1];
console.log(findMissingNumber(nums1));

const nums2 = [9, 6, 4, 2, 3, 5, 7, 0, 1];
console.log(findMissingNumber(nums2)); 

const nums3 = [0, 1];
console.log(findMissingNumber(nums3)); 
 </script>
</head>
<body>
  <h1>Missing Number Finder</h1>
  <label for="inputArray">Enter numbers (comma-separated):</label>
  <input type="text" id="inputArray" placeholder="e.g., 3,0,1">
  <button onclick="handleFindMissingNumber()">Find Missing Number</button>
  <p id="result"></p>
</body>
</html>
