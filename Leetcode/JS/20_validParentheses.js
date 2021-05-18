/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  
    if(!s || s.length === 0){
        return s;
    }
    
    let stack = [];
    let mappings = {
        "[": "]",
        "{": "}",
        "(": ")"
    }
    
    for(let i=0; i<s.length; i++){
        let curr = s[i];
        let top;
        
        if(curr === "[" || curr === '{' || curr === '('){
            stack.push(curr);
        } else {
            top = stack[stack.length-1];
            if(curr === mappings[top]){
                stack.pop();
            } else {
                return false;
            }
        }
    }
    
    return stack.length === 0 ? true : false;
};