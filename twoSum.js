let arr = [3, 3];
let target = 6;

function twoSum(nums, target) {
  let pairs = null;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] + nums[i + 1] == target) {
      pairs = [i, i + 1];
    }
  }
  return pairs;
}

console.log("..", twoSum(arr, target));
