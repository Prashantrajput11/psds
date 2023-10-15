/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(arr) {
       let count = 0
    let maxCount = 0 
    
    for(let i = 0 ; i < arr.length;i++){
      if(arr[i] === 1){
        count = count +1 
        
        if(count > maxCount){
          maxCount = count
        }
      }
      
      if(arr[i] === 0 ){
        count = 0 
        
      }
    }
    
    return maxCount
    
 
};