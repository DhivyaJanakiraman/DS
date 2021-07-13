/**
 * Given a string s, find the length of the longest substring without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
 */

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let i = 0;
    let j = 0;
    let uniqueCharacters = new Map();
       
    while(j < s.length){
        if(!uniqueCharacters.has(s[j])){
            uniqueCharacters.set(s[j], 1);
            max = Math.max(max, uniqueCharacters.size);
            j++;
        } else {
            uniqueCharacters.delete(s[i]);
            i++;
        }
    }
       
   return max;
       
   };

   // TC: O(N)
   // SC: O(1) worst case O(N)