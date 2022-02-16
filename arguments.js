function addNumbers(num1, num2){
    // console.log(arguments[3])
    let result = 0;
    for (const num of arguments){
        result = result + num;
    }
    // arguments.push(45);
    // const result = num1 + num2;
    return result;
}
const sum = addNumbers(20, 16, 21, 48, 45);
// console.log(sum)

function getFullName(firstName, lastName){
    let fullName = '';
    for(const part of arguments){
        fullName = fullName + part + ' ';
    }
    return fullName;
}
const name = getFullName('John', 'Abraham', 'Josh', 'Abraham');
console.log(name);