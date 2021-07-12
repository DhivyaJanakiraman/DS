var addStrings = function(num1, num2) {
    let ptr1 = num1.length-1;
    let ptr2 = num2.length-1;
    let result = [];
    let carry = 0;
    
    while(ptr1 >= 0 || ptr2 >= 0) {
      let x1 = ptr1 >= 0 ? num1[ptr1] : 0;
      let x2 = ptr2 >= 0 ? num2[ptr2] : 0;
      let sum = (parseInt(x1) + parseInt(x2) + carry);
     carry = sum > 9 ? Math.floor(sum / 10) : 0;
      result.unshift(Math.round(sum%10));

      ptr1--;
      ptr2--;
    }
  
    if(carry > 0){
      result.unshift(carry);
    }
    return result.join("");
};

//TC: O(max(N1, N2)) // N1, N2 - length of num1 and num2
//SC: O(max(N1, N2)) // result array max length of N1 or N2