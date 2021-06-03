var moveZeroes = function(nums) {
    let idx = 0;
    let length = nums.length;
    
    for(let i=0; i<length; i++){
        if(nums[i] !== 0){
            nums[idx++] = nums[i];
        }
    }
    
   for(let i=idx; i<length; i++){
       nums[i] = 0;
   }
    return nums;
};

// TC: O(n) 1 pass
// SC: O(1) 2 variables