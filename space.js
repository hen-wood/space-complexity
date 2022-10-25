const sizeof = require('object-sizeof')

function ofOfEnn(n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push('+');
    }
    return arr;
}

function ohOfEnnSquared(n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            arr.push('+');
        }
    }
    return arr;
}
console.log('O(n)')
for (let i = 0; i < 10; i++) {
    console.log(sizeof(ofOfEnn(i)))
}
console.log('**********************************************************')
console.log('O(n^2)')
for (let i = 0; i < 10; i++) {
    console.log(sizeof(ohOfEnnSquared(i)))
}
