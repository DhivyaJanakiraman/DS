/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let result = nums[0];
    let currMax = nums[0];
    let length = nums.length;
    
    if(length === 1){
        return nums[0];
    }
    
    for(let i=1; i<length; i++){
        currMax = Math.max(nums[i], nums[i]+currMax);
        result = Math.max(result, currMax);
    }
    return result;
};

// TC: O(n) one pass 
// SC: O(1) 3 variables used.

// /** Alternate solution */

// function maxSubArray(nums){
//     let result = nums[0];

//     for(let i=0; i<nums.length; i++){
//         let sum = 0;
//         for(let j=i; j<nums.lengt; j++){
//             sum = sum + nums[j];
//             result = Math.max(result, sum);
//         }
//     }
//     return result;
// }

// TC: O(n)^2 two pass 
// SC: O(1) 2 variables used.