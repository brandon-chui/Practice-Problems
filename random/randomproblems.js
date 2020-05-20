// find common multiples in array a
// find common denominators in set b
// count how many are the same

function getTotalX(a, b) {
    let count = 0;
    for (let i = 1; i <= 100; i++) {
        if (a.every(el => i % el == 0)) {
            if (b.every(el => el % i == 0)) {
                count++
            }
        }
    }
    return count;
}

// find min max record breaking scores
function breakingRecords(scores) {
    let minMax = [scores[0], scores[0]]
    let minCount = 0;
    let maxCount = 0;
    for (let i = 1; i< scores.length; i++) {
        if (scores[i] < minMax[0]) {
            minCount++;
            minMax[0] = scores[i]
        } else if ( scores[i] > minMax[1]) {
            maxCount++;
            minMax[1] = scores[i]
        }
    }

    return [maxCount, minCount]

}

// s = array of numbers
// d = birth date
// m = birth month
// find sequential sum of numbers that equal birthdate in m length in array

function birthday(s, d, m) {
    let count = 0;
    for (let i = 0; i< s.length; i++) {
        if(s.slice(i, i+m).reduce((x,y) => x + y) == d) {
            count++
        }
    }
    return count;
}

// find number of sum pairs that is divisibile by integer k
// n = number of elements in array
// k = integer
// ar = array of nums

function divisibleSumPairs(n, k, ar) {
    let count = 0;
    for (let i = 0; i< ar.length; i++) {
        for (let j = i + 1; j< ar.length; j++) {
            if ((ar[i] + ar[j]) % k == 0) {
                count++
            }
        }
    }
    return count;
}