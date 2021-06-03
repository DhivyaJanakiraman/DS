/**
 * 
 *  You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 */


/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let minPrice = Number.MAX_VALUE;
    let maxPrice = 0;
    
    for(let i=0; i<prices.length; i++){
        if(prices[i] < minPrice) {
            minPrice = prices[i];
        } else{
            if(prices[i] - minPrice > maxPrice){
                maxPrice = prices[i] - minPrice;
            }
        }
    }
    return maxPrice;
};

// TC: O(n) // 1 pass.
// SC: O(1) // Only two variables are used.