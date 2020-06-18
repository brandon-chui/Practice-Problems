// You are playing the following Bulls and Cows game with your friend: You write down a number and ask your friend to guess what the number is. Each time your friend makes a guess, you provide a hint that indicates how many digits in said guess match your secret number exactly in both digit and position (called "bulls") and how many digits match the secret number but locate in the wrong position (called "cows"). Your friend will use successive guesses and hints to eventually derive the secret number.

// Write a function to return a hint according to the secret number and friend's guess, use A to indicate the bulls and B to indicate the cows. 

// Please note that both secret number and friend's guess may contain duplicate digits.

var getHint = function (secret, guess) {
    let s = secret.split('')
    let g = guess.split('')
    let bull = 0;
    let cow = 0

    for (let i = 0; i < s.length; i++) {
        if (s[i] == g[i]) {
            bull++;
            s[i] = 'X'
            g[i] = 'Y'
        }
    }

    for (let j = 0; j < s.length; j++) {
        if (s.includes(g[j])) {
            cow++;
            s[s.indexOf(g[j])] = 'X'
        }
    }

    return `${bull}A${cow}B`
};

// Given a m * n matrix grid which is sorted in non - increasing order both row - wise and column - wise.

// Return the number of negative numbers in grid.

var countNegatives = function (grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] < 0) {
                count++
            }
        }
    }
    return count;
};