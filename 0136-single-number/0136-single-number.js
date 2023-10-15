/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(array) {
     let count = {}
  
  for(let i = 0 ; i < array.length;i++){
    if(count[array[i]]){
      
      count[array[i]] = count[array[i]] +1
      
    }
    else{
      count[array[i]] =1
    }
  }
 
    for(let key in count){
    
    if(count[key] ===1){
        return key
    }
    }
};