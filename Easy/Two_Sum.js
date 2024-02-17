var twoSum = function(nums, target) {
    let leng = nums.length;
    for (let i = 0; i < leng; i++) {
        for (let j = i+1; j < leng; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};