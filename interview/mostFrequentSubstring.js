function mostFrequentSubstring(words, k) {
    let newWords = [];
    words.forEach(word => {
        newWords.push(substring(word, k))
    })
    let obj = {};
    newWords.forEach(wordArr => {
        wordArr.forEach(sub => {
            if (obj[sub]) {
                obj[sub] += 1;
            } else {
                obj[sub] = 1;
            }
        })
    })

    let arr = Object.values(obj);
    let max = Math.max(...arr);

    let resultArr = []
    for (let key in obj) {
        if (obj[key] === max) {
            resultArr.push(key)
        }
    }

    resultArr = resultArr.sort()
    return resultArr[0];

}

function substring(word, k) {
    let arr = []
    for (let i = 0; i <= word.length - k; i++) {
        let sub = word.slice(i, i + k);
        arr.push(sub);
    }
    return arr;
}
