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