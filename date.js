const myFavDate = new Date('2019-2-8');
// console.log(myFavDate);
const anotherDate = new Date(2019,2,8, 9,0,30,50);
console.log(anotherDate)

if(myFavDate.getTime() < anotherDate.getTime()){
    console.log('favorite is earlier')
};