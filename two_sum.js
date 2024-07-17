var sum = function (nums, target) {
  const hash = {};

  for (let i = 0; i < nums.length; i++) {
    let val = nums[i];
    hash[val] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    let potentialkey = target - nums[i];
    if (hash[potentialkey] && hash[potentialkey] !== i) {
      return [i, hash[potentialkey]];
    }
  }
};

console.log(sum([7, 11, 15, 2], 9));
console.log(sum([3, 2, 4], 6));
console.log(sum([3, 3], 6));