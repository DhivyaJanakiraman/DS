/**
 * 
 * Given a sentence that consists of some words separated by a single space, and a searchWord.

    You have to check if searchWord is a prefix of any word in sentence.

    Return the index of the word in sentence where searchWord is a prefix of this word (1-indexed).

    If searchWord is a prefix of more than one word, return the index of the first word (minimum index). If there is no such word return -1.

    A prefix of a string S is any leading contiguous substring of S.

 

Example 1:

Input: sentence = "i love eating burger", searchWord = "burg"
Output: 4
Explanation: "burg" is prefix of "burger" which is the 4th word in the sentence.
 */

var isPrefixOfWord = function(sentence, searchWord) {
    let wordsArr = sentence.split(" ");
    
    for(let i=0; i<wordsArr.length; i++){
        if(wordsArr[i][0] === searchWord[0] && wordsArr[i].includes(searchWord)) {
            return i+1;
        }
    }
    
    return -1;
};


// TC: O(N)
// SC: O(N)