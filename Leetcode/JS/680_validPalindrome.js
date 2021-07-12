var validPalindrome = function(s) {
    return isValidPalindrome(s, 0, s.length-1, false);
};
   
function isValidPalindrome(str, startIdx, endIdx, removedChar) {

    while(startIdx < endIdx){
        if(str[startIdx] !== str[endIdx]){
            if(removedChar){
            return false;
            }
            // cut a character
            return isValidPalindrome(str, startIdx+1, endIdx, true) || isValidPalindrome(str, startIdx, endIdx-1, true);
        }
        startIdx++;
        endIdx--;
    }

    return true;
}