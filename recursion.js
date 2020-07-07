// // Recursion exercises

// const jumpDistance = [1, 2]
// const N = 4

// function numWays(N) {
//     if (N === 1) {
//         return 1
//     }
//     if (N === 2) {
//         return 2
//     }
//     if (N >= 3) {
//         return numWays(N-1) + numWays(N-2)
//     }
// }
// const result = console.log(numWays(N))


// // 1. Counting Sheep
// // Write a recursive function that counts how many sheep jump over the fence. 
// // Your program should take a number as input. That number should be the number
// //  of sheep you have. The function should display the number along with the
// //   message "Another sheep jumps over the fence" until no more sheep are left.

// // Input: 3
// // Output:
// // 3: Another sheep jumps over the fence
// // 2: Another sheep jumps over the fence
// // 1: Another sheep jumps over the fence
// // All sheep jumped over the fence

// function numSheep(N) {

//     if (N === 0) {
//         return `All sheep jumped over the fence`
//     }
//         return `${N}: Another sheep jumps over the fence \n` + numSheep(N-1)

// }

// console.log(numSheep(10))

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// // 2. Power Calculator 
// //    Write a function called powerCalculator() that takes two
// //    parameters, an integer as a base, and another integer as an exponent. The
// //    function returns the value of the base raised to the power of the
// //    exponent. Use only exponents greater than or equal to 0 (positive numbers)

// // powerCalculator(10,2) should return 100
// // powerCalculator(10,-2) should return exponent should be >= 0

// const powerCalculator = (base, exp) => {
//     if (exp < 0) return `exponent should be >= 0`

//     if (exp === 0) return 1

//     if (exp === 1) return base

//     if (exp > 1) {
//         return base * powerCalculator(base,exp-1)
//     }
// }

// console.log(powerCalculator(10,4))

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 3. Reverse String
// Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.


const reversString = (string) => {
    const len = string.length
    if (len === 1) {
        return string
    }
    if (len === 2) {
        return string.slice(1, len) + string[len - 2]
    }
    if (len > 2) {
        return string.slice(len - 1, len) + reversString(string.slice(0, len - 1))
    }
}

console.log('Reverse String 123456789 ===> answer:', reversString('123456789'))

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 4. nth Triangular Number
//    Calculate the nth triangular number. A triangular number counts the
//    objects that can form an equilateral triangle. The nth triangular number
//    is the number of dots composing a triangle with n dots on a side, and is
//    equal to the sum of the n natural numbers from 1 to n. This is the
//    Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.

//                           *
//             *           *    *
// *     |   *   *  |   *    *    *  |

//  1st       2nd           3rd             nth?  


const numDots = (sideDots) => {

    if (sideDots === 1) {
        return 1
    }

    if (sideDots === 2) {
        return 3
    }

    if (sideDots === 3) {
        return 6
    }

    if (sideDots >= 4) {
        return sideDots + numDots(sideDots - 1)
    }

}

console.log('Number of dots in triangle with 9 dot sides ===> answer:', numDots(9))


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 5. String Splitter
//    Write a recursive function that splits a string based on a separator
//    (similar to String.prototype.split). Don't use JS array's split function
//    to solve this problem.


// Input: 02/20/2020
// Output: ["02", "20", "2020"]

// Split a string based upon a separator (similar to String.prototype.split).

function stringSplitter(string, array) {
    //Determine if we need to split string
    let stringContainsSpace = string.includes(" ");
    //Find where word ends and grab that index
    let findWhereWordEnds = string.indexOf(" ");
    let firstWordOfString = string.substring(0, findWhereWordEnds);
    let remainingPartOfString = string.substring(findWhereWordEnds + 1);
    //base case
    if (stringContainsSpace === false) {
        array.push(string);
        return array;
    } else {
        array.push(firstWordOfString);
        //call the function
        return stringSplitter(remainingPartOfString, array);
    }
}


console.log('StringSplitter ===> answer:', stringSplitter("Lets get out of this recurcion", []))


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~




// 6. Fibonacci 
//    Write a recursive function that prints the Fibonacci sequence of
//    a given number. The Fibonacci sequence is a series of numbers in which
//    each number is the sum of the 2 preceding numbers. For example, the 7th
//    Fibonacci number in a Fibonacci sequence is 13. The sequence looks as
//    follows: 1, 1, 2, 3, 5, 8, 13.


function fib(n) {

    if (n <= 1) {
        return 1
    }
    if (n === 2) {
        return 1
    }
    if (n >= 3) {
        return fib(n - 1) + fib(n - 2)
    }
}


console.log('Fibonachi n=7 ===> answer:', fib(7))




//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// 7. Factorial 
// Write a recursive function that finds the factorial of a given
//    number. The factorial of a number can be found by multiplying that number
//    by each number between itself and 1. For example, the factorial of 5 is 5
//    * 4 * 3 * 2 * 1 = 120.


function fac(n) {

    if (n === 0) return 1
    if (n === 1) return 1
    if (n === 2) return 2

    if (n >= 3) {
        return n * fac(n - 1)
    }
}


console.log('factorial 10! ===> answer:', fac(10))



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~




// 8. Find a way out of the maze

// You have entered a Maze and need to find your way out of it. There are more
// than one possible paths through the Maze to the single exit point. Write a
// recursive function that will help you find a possible path through the maze.

// You can use the following mazes to test your program.

// let mySmallMaze = [
//     [' ', ' ', ' '],
//     [' ', '*', ' '],
//     [' ', ' ', 'e']
// ];

// let maze = [
//     [' ', ' ', ' ', '*', ' ', ' ', ' '],
//     ['*', '*', ' ', '*', ' ', '*', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', ' '],
//     [' ', '*', '*', '*', '*', '*', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', 'e']
// ];
// The Maze is represented as a N*M matrix (in the above case, a 3X3 or a 5X7
// array). The starting point is the top left corner and the exit is indicated
// by e. For simplicity purpose, use the bottom right corner of the maze as the
// exit. You can't go outside the boundaries of the maze. The maze has passages
// that are blocked and you can't go through them. These blocked passages are
// indicated by *. Passing through a blocked cell as well as passing though a
// cell that you have already passed before are forbidden.

// For the above maze, a possible exit path can be RRDDLLDDRRRRRR

function mazeSolver(maze, m, n, path) {
    let mazeRows = maze.length
    let mazeCols = maze[0].length
    // starting location
    let loc = maze[m][n]
    if (loc === 'e') {
        return path
    }


    if (n+1 < mazeCols && maze[m][n + 1] === 'e') {
        n++
        path = path + 'R'
        return path
    } else if (n+1 < mazeCols && maze[m][n + 1] === ' ') {
        loc = maze[m][n + 1]
        maze[m][n] = 'untraversible'
        n++
        path = path + 'R'
        return mazeSolver(maze, m, n, path) 
    }


    if (m+1 < mazeRows && maze[m + 1][n] === 'e') {
        m++
        path = path + 'D'
        return path
    } else if (m+1 < mazeRows && maze[m + 1][n] === ' ') {
        loc = maze[m + 1][n]
        maze[m][n] = 'untraversible'
        m++
        path = path + 'D'
        return mazeSolver(maze, m, n, path) 
    }

    if (n-1 >=0 && maze[m][n-1] === 'e') {
        n--
        path = path + 'L'
        return path
    } else if (n-1 >=0 && maze[m][n-1] === ' ') {
        loc = maze[m][n-1]
        maze[m][n] = 'untraversible'
        n--
        path = path + 'L'
        return mazeSolver(maze, m, n, path) 
    }


    if (m-1 >=0 && maze[m-1][n] === 'e') {
        m--
        path = path + 'U'
        return path
    } else if (m-1 >=0 && maze[m-1][n] === ' ') {
        loc = maze[m-1][n]
        maze[m][n] = 'untraversible'
        m--
        path = path + 'U'
        return mazeSolver(maze, m, n, path) 
    }


}






// let maze = [
//     [' ', ' ', ' ', '*', ' ', ' ', ' '],
//     ['*', '*', ' ', '*', ' ', '*', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', ' '],
//     [' ', '*', '*', '*', '*', '*', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', 'e']
// ];
// console.log('mazeSolver', mazeSolver(maze, 0, 0, ''))







// const labyrinth = [
//         [' ', ' ', ' ', '*', ' ', ' ', ' '],
//         ['*', '*', ' ', '*', ' ', '*', ' '],
//         [' ', ' ', ' ', ' ', ' ', ' ', ' '],
//         [' ', '*', '*', '*', '*', '*', ' '],
//         [' ', ' ', ' ', ' ', ' ', ' ', 'e']
//     ];
// const maze = function(labyrinth, position=0, row, col, direction='S',path){
//     if(col<0 || row < 0){
//         return;
//     }
//     if(col>=labyrinth[0].length || row>=labyrinth.length){
//         return;
//     }
   
//     path[position] = direction;
//     console.log('position', position)
//     console.log('path[position]', path[position])
//     position++;

//     if (labyrinth[row][col] === 'e'){
//         PrintPath(path, 1, position - 1);
//         console.log('position - 1', position - 1)
//         return;
//     }
//     if (labyrinth[row][col] === ' ') {
//         // The current cell is free. Mark it as visited
//         labyrinth[row][col] = 's';
//         // Invoke recursion to explore all possible directions
//         maze(labyrinth,position,row, col - 1, 'L',path); // left
//         maze(labyrinth,position,row - 1, col, 'U',path); // up
//         maze(labyrinth,position,row, col + 1, 'R',path); // right
//         maze(labyrinth,position,row + 1, col, 'D',path); // down
//         // Mark back the current cell as free
//         //lab[row][col] = ' ';
//     }
//     // Remove the last direction from the path
//     position--;

// }
// const PrintPath = function (path, startPos, endPos){
//     console.log('Found path to the exit: ');
//     console.log(path);
// }


// maze(labyrinth,0,0,0,'s',[])









let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

const PrintPath = function (path, startPos, endPos){
    console.log('Found path to the exit: ');
    console.log(path);
}
const mazeAll = function(labyrinth, position=0, row, col, direction='S',path){
    if(col<0 || row < 0){
        return;
    }
    if(col>=labyrinth[0].length || row>=labyrinth.length){
        return;
    }
   
    path[position] = direction;
    // console.log('path[position]', path[position])
    position++;

    if (labyrinth[row][col] === 'e'){
        PrintPath(path, 1, position - 1);
        return;
    }
    if (labyrinth[row][col] === ' ') {
        // The current cell is free. Mark it as visited
        // console.log('labyrinth[row][col]', labyrinth[row][col])
        labyrinth[row][col] = 's';
        // Invoke recursion to explore all possible directions
        mazeAll(labyrinth,position,row, col - 1, 'L',path); // left
        mazeAll(labyrinth,position,row - 1, col, 'U',path); // up
        mazeAll(labyrinth,position,row, col + 1, 'R',path); // right
        mazeAll(labyrinth,position,row + 1, col, 'D',path); // down
        // Mark back the current cell as free
        labyrinth[row][col] = ' ';
    }
    // Remove the last direction from the path
    position--;
}


// console.log(mazeAll(maze,0,0,0,'S',[]))

















//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~





// 9. Find ALL the ways out of the maze
// Use the above maze and modify your solution so it finds All the possible exit paths through the Maze. To find all possible exit paths through the maze, think about how many places you can move at each turn. Possibly up, down, left or right?

// Notice that this maze has 3 exits paths. Your recursive function should print all three of the paths with the proper directions. For example, given the maze above, the program should output the following:

// Path to the exit: RRDDLLDDRRRRRR
// Path to the exit: RRDDRRUURRDDDD
// Path to the exit: RRDDRRRRDD


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~




// 10. Anagrams
// An anagram is any word or phrase that uses the letters of a given ("subject") word or phrase in another, rearranged order. Write a function that creates an anagram list, listing all the rearrangements of a given word. For example, if the user types "east", the program should list all 24 permutations, including "eats", "etas", "teas", and non-words like "tsae".

// Hint: For your algorithm, you might want to think about a prefix and use that to create the new words. For example, given "east", use "e" as a prefix and place it in front of all 6 permutations of "ast" — "ast", "ats", "sat", "sta", "tas", and "tsa". This will give you the words "east", "eats", "esat", "esta", "etas", and "etsa". Continue this way until you find all the anagrams for "east". Then you can use "a" as a prefix and permute the remaining words "est". For "east", there should be 24 words.



// function anagrams(prefix, str){
//     if(str.length <= 1){
//         console.log(`The anagram is ${prefix}${str}`);
//     } else {
//         for(let i=0; i<str.length; i++){
//             let currentLetter = str.substring(i, i+1); 
//             console.log('currentLetter', currentLetter)
//             let previousLetters = str.substring(0,i);
//             console.log('previousLetters', previousLetters)
//             let afterLetters = str.substring(i+1);
//             console.log('afterLetters', afterLetters)
//             anagrams(prefix+currentLetter, previousLetters+afterLetters);
//         }
//     }
// }
// function printAnagram(word){
//     //console.log(`The word for which we will find an anagram is ${word}`);
//     anagrams(' ', word);

// }


// console.log(anagrams('e', 'ast'))









function anagrams(prefix, str){
    if(str.length <= 1){
        console.log(`The anagram is ${prefix}${str}`);
    } else {
        for(let i=0; i<str.length; i++){
            let currentLetter = str.substring(i, i+1); 
            // console.log('currentLetter', currentLetter)
            let previousLetters = str.substring(0,i);
            // console.log('previousLetters', previousLetters)
            let afterLetters = str.substring(i+1);
            // console.log('afterLetters', afterLetters)
            // console.log('prefix+currentLetter', prefix+currentLetter)
            // console.log('previousLetters+afterLetters', previousLetters+afterLetters)
            anagrams(prefix+currentLetter, previousLetters+afterLetters);
        }
    }
}
function printAnagram(word){
    console.log(`The word for which we will find an anagram is ${word}`);
    anagrams(' ', word);

}

console.log(printAnagram('east'))

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~





// 11. Organization Chart
// Write a recursive function that prints the following organization chart. Your output should be as shown below with proper indentation to show the hierarchy. You may store the org chart in an object and send that as an input to your program.

// Zuckerberg
//     Schroepfer
//         Bosworth
//             Steve
//             Kyle
//             Andra
//         Zhao
//             Richie
//             Sofia
//             Jen
//     Schrage
//         VanDyck
//             Sabrina
//             Michelle
//             Josh
//         Swain
//             Blanch
//             Tom
//             Joe
//     Sandberg
//         Goler
//             Eddie
//             Julie
//             Annie
//        Hernandez
//             Rowi
//             Inga
//             Morgan
//        Moissinac
//             Amy
//             Chuck
//             Vinni
//        Kelley
//             Eric
//             Ana
//             Wes


function traverseA(data, depth = 0) {
	let indent = " ".repeat(depth * 4);
	Object.keys(data).forEach(key => {
		console.log(indent + key);
		traverseA(data[key], depth + 1)
	});
}
//another version of the solution
function traverseB(node, indent=0) {
	for (var key in node) {
		console.log(" ".repeat(indent), key);
		traverseB(node[key], indent + 4);
	}
}   

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~





// 12. Binary Representation 
//     Write a recursive function that prints out the
//     binary representation of a given number. For example, the program should
//     take 3 as an input and print 11 as output, or 25 as an input and print
//     11001 as an output. Note that the binary representation of 0 should be 0.






function binaryRep(input){
    if(input<=0){
        return '';
    } 
    let binary = Math.floor(input%2);
    return binaryRep(Math.floor(input/2)) + binary

}











