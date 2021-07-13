/**
 * Given a string s of zeros and ones, return the maximum score after splitting the string into two non-empty substrings (i.e. left substring and right substring).

The score after splitting a string is the number of zeros in the left substring plus the number of ones in the right substring.

 

Example 1:

Input: s = "011101"
Output: 5 
Explanation: 
All possible ways of splitting s into two non-empty substrings are:
left = "0" and right = "11101", score = 1 + 4 = 5 
left = "01" and right = "1101", score = 1 + 3 = 4 
left = "011" and right = "101", score = 1 + 2 = 3 
left = "0111" and right = "01", score = 1 + 1 = 2 
left = "01110" and right = "1", score = 2 + 1 = 3
 */

/**
 * @param {string} s
 * @return {number}
 */

 var findScore = function(a, b) {
    let num1  = a.replace(/1/g, "");
    let num2  = b.replace(/0/g, "");
    return num1.length + num2.length;
  }
  
  var maxScore = function(s) {
      let allScores = [];
      for(let i=1; i<s.length; i++){
          let res = findScore(s.substr(0,i), s.slice(i));
          allScores.push(res);
      }
      return Math.max(...allScores);
  };

//TC: O(N)
//SC: O(N)