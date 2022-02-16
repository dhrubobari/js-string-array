const songLine = 'I am in love with the Shape of you';
const words = songLine.split(' ');
const withoutA = songLine.split('o');
// console.log(withoutA);

// slice
const smallSlice = songLine.slice(6, 12);
// console.log(smallSlice)

// substr
const anotherPart = songLine.substr(11, 7);
// console.log(anotherPart)

// substring
const secondPart = songLine.substring(11, 15);
// console.log(secondPart);

// first 3ta string vag koire dekhar upay

// concat , add kora like 'desi' + 'kalakar'
const first = 'Desi';
const second = 'Kalakar';
const fullString = first.concat(second).concat(' Honey Singh');
// console.log(fullString)

// join , shob gulo letters k all together kora
const letters = ['s', 'o', 'n', 'a', 'k', 's', 'h', 'i'];
const allJoined = letters.join('');
console.log(allJoined);