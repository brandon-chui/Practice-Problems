'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}
function inventoryList() {
    let list = [];

    const add = (name) => {
        if (!list.includes(name)) {
            list.push(name)
        }
    }

    const remove = (name) => {
        if (list.includes(name)) {
            let idx = list.indexOf(name);
            list = list.slice(0, idx).concat(list.slice(idx + 1))
        }
    }

    const getList = () => {
        return list
    }

    return { add, remove, getList }
}
function main() {}