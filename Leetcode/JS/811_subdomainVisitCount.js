/**
 * 
 * We are given a list cpdomains of count-paired domains. We would like a list of count-paired domains, (in the same format as the input, and in any order), that explicitly counts the number of visits to each subdomain.
 * Example 1:
    Input: 
    ["9001 discuss.leetcode.com"]
    Output: 
    ["9001 discuss.leetcode.com", "9001 leetcode.com", "9001 com"]
    Explanation: 
    We only have one website domain: "discuss.leetcode.com". As discussed above, the subdomain "leetcode.com" and "com" will also be visited. So they will all be visited 9001 times.
 */

/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
 var subdomainVisits = function(cpdomains) {
    let domainsCount = {};
    let result = [];
    
    for(let i = 0; i< cpdomains.length; i++){
        let currValSplit = cpdomains[i].split(" ");
        let currDomain = currValSplit[1];
        let visitsCount = currValSplit[0];
        let domainSplit = currDomain.split(".");
        let curr = "";

        for(let j = domainSplit.length-1; j>=0; j--){
            curr = domainSplit[j] + (j < domainSplit.length -1 ? "." : "") + curr;
            domainsCount[curr] = domainsCount[curr] ? parseInt(domainsCount[curr]) + parseInt(visitsCount) : parseInt(visitsCount);
        }
    }
   
    for(let val in domainsCount){
           let curr = domainsCount[val] + " " + val;
           result.push(curr);
    }
    
    return result;
};

// TC: O(N^2)
// SC: O(N)