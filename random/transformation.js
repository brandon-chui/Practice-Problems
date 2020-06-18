// Example: “1a2bc3def = abbcdddef”

// const tranformation = (str) => {
//     let newstr = '';
//     str = str.split('');
//     let num = ''
//     for (let i = 0; i < str.length; i++) {
//         if (!isNaN(str[i])) {
//             num += str[i];
//         } else {
//             if (num == '') {
//                 newstr += str[i];
//             } else {
//                 newstr += str[i].repeat(Number(num));
//             }
//             num = ''
//         }
//     }
//     return newstr;
// }

// console.log(tranformation('15a3bc'));

const transformation = str => {
    let newStr = '';
    let num = '';
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
            num += str[i];
        } else {
            if (num == '') {
                newStr += str[i]
            } else {
                newStr += str[i].repeat(parseInt(num))
            }
            num = ''
        }
    }

    return newStr;
}

console.log(transformation('15a3bc'));