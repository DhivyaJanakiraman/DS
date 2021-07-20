/**
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function(num) {
    let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let symbols = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    let result = "";
    
    for(let i=0; i<values.length > 0; i++){
        
        while(values[i] <= num){
            num -= values[i];
            result += symbols[i];
        }
    }
    return result;
};

//TC: O(1)
//SC: O(1)