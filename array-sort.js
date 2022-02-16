const numbers = [6, 4, 7, 1, 3, 9, 2, 5];
const sortedNumbers = numbers.sort();
// console.log(sortedNumbers)

const actors = ['tom cruise', 'hrithik roshan', 'chuck norris', 'zayn malik', 'brad pitt', 'aamir khan'];
const sortedFriends = actors.sort();
// console.log(sortedFriends)
// const reversedFriends = actors.reverse();
// const actorsSortedReversed = actors.sort().reverse();
// console.log(actorsSortedReversed);

// numbers sorting fun
const twoDigits = [10, 14, 66, 72, 55, 43, 37, 18, 25, 80];
const sortedTwoDigits = twoDigits.sort(function(a, b){
    return a - b;
}); // function ta na dileo sort hoto
console.log(sortedTwoDigits)