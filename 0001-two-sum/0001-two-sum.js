/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let indices = []
    for(let i = 0; i < nums.length;i++){

        for(j = i+1; j <nums.length;j++){
            if(nums[i] + nums[j]=== target){
                 indices.push(i, j)
            }
        }
    }

    return indices
};