/**
 * 
 * On an infinite plane, a robot initially stands at (0, 0) and faces north. The robot can receive one of three instructions:

"G": go straight 1 unit;
"L": turn 90 degrees to the left;
"R": turn 90 degrees to the right.
The robot performs the instructions given in order, and repeats them forever.

Return true if and only if there exists a circle in the plane such that the robot never leaves the circle.

 

Example 1:

Input: instructions = "GGLLGG"
Output: true
Explanation: The robot moves from (0,0) to (0,2), turns 180 degrees, and then returns to (0,0).
When repeating these instructions, the robot remains in the circle of radius 2 centered at the origin.
 */


/**
 * @param {string} instructions
 * @return {boolean}
 */
 var isRobotBounded = function(instructions) {
    let x = 0;
    let y = 0;
    let dir = 0;
    
    // N = 0, E = 1, S = 2, W = 3
    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    
    for(let i of instructions){
        if(i === "G"){
            x = x + directions[dir][0];
            y = y + directions[dir][1];
        } else if(i === "L"){
            dir = (dir + 3) % 4;
        } else if(i === "R"){
            dir = (dir + 1) % 4;
        }
    }
    
    return (x === 0 && y === 0) || dir != 0;
};

// TC: O(N)
// SC: O(1) directions array contans only 4 elements