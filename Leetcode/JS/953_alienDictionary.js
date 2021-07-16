/**
 * In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographicaly in this alien language.

 

Example 1:

Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
Output: true
Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
 */

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
 var isAlienSorted = function(words, order) {
  
    for(let i=0; i<words.length-1; i++){
        let currWord = words[i];
        let nextWord = words[i+1];
        
        for(let j=0; j<currWord.length; i++){
            console.log("nextword ", nextWord)
            if(j >= nextWord.length){
                return false;
            }
            let currVal = order.indexOf(currWord[j]);
            let nextVal = order.indexOf(nextWord[j]);
                
            if(currVal < nextVal) break;
            if(currVal > nextVal) return false;
        }
    }
    return true;
};

//TC: O(N^2)
//SC: O(1)