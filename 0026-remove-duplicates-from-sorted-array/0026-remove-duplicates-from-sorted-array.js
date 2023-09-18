/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const uniqueSet = new Set(); 
    
    for (let num of nums) {
        uniqueSet.add(num); 
    }
    
    const uniqueArray = Array.from(uniqueSet); 
   
    for (let i = 0; i < uniqueArray.length; i++) {
        nums[i] = uniqueArray[i];
    }
    
    return uniqueArray.length; 

};