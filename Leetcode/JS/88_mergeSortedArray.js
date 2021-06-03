var merge = function(nums1, m, nums2, n) {
    let ptr1 = m-1;
    let ptr2 = n-1;
      
    for(let i=m+n-1; i>= 0; i--){
        if(ptr2 < 0){
            break;
        }
        if(ptr1 > 0 && nums1[ptr1] > nums2[ptr2]){
            nums1[i] = nums1[ptr1--];
        }else{
            nums1[i] = nums2[ptr2--];
        }
    }
  };

//  TC: O(m+n)
//  SC: O(1) not using extra array. just 2 pointers

// var merge = function(nums1, m, nums2, n) {
  
//     let ptr1 = 0;
//     let ptr2 = 0;
//     let nums1Copy = nums1.slice();

//     for(let i=0; i<m+n; i++){
//         if(ptr2 >= n || ptr1 < m && nums1Copy[ptr1] < nums[pyt2]){
//             nums1[i] = nums1Copy[ptr1++];
//         } else {
//             nums1[i] = nums2[ptr2++];
//         }
//     }
//   };

//   TC: O(m+n)
//   SC: O(m) //We are allocating an additional array of length m.

