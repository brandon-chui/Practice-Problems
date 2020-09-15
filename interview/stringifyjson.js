const _ = require('lodash');

function jsonStringify(obj) {
    let newString = '{';
    let newObj = {}

    let objArr = Object.keys(obj);


    for (let i = 0; i < objArr.length; i++) {
        let value = obj[objArr[i]]
        let key = objArr[i].toString();
        if (Array.isArray(value)) {
            let nestedArr = stringify(value);
            value = `${nestedArr}`
        } else if (typeof value === 'object') {
            let nested = stringify(value);
            value = nested;
        }
        newString += `"${key}":${value}`
        if (i !== objArr.length - 1) {
            newString += ','
        } else {
            newString += '}'
        }
    }

    console.log(newString)
}

function stringify(value) {
    if (typeof value === 'number' || typeof value === 'string') {
        return value
    }

    if (Array.isArray(value)) {
        let newArr = '['
        for (let i = 0; i < value.length; i++) {
            let arrItem = stringify(value[i])
            newArr += arrItem;
            if (i !== value.length - 1) {
                newArr += ','
            } else {
                newArr += ']'
            }
        }
        return newArr;
    }


    let newString = '{'
    let objArr = Object.keys(value);

    for (let i = 0; i < objArr.length; i++) {
        let newValue = value[objArr[i]]
        let key = objArr[i].toString();
        if (Array.isArray(value)) {
            for (let j = 0; j < newValue.length; j++) {
                let arrayNested = stringify(newValue[j])
                newValue = `[${arrayNested}]`
            }
        } else if (typeof newValue === 'object') {
            let nested = stringify(newValue);
            newValue = nested;
        }
        newString += `"${key}":${newValue}`
        if (i !== objArr.length - 1) {
            newString += ','
        } else {
            newString += '}'
        }
    }

    return newString;
}


let obj = { key: [1, 2, 3], key2: { key3: 3, key4: { key5: 5 } } }
obj.dog = obj;
console.log(JSON.stringify(obj))
// '{"key":"value"}'
console.log(jsonStringify(obj))
