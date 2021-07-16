/**
 * 
 * Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.

 

Example 1:

Input: s = "leetcodeisacommunityforcoders"
Output: "ltcdscmmntyfrcdrs"
 */

var removeVowels = function(s) {
    return s.replace(/a|e|i|o|u/gi, "");
};