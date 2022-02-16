function megaFriend(friends){
    let mega = friends[0];
    if(Array.isArray(friends) == false){
        return 'please provide an array with a string';
    }
    for (const friend of friends){
        if(friend.length > mega.length){
            mega = friend;
        }
    }
    return mega;
}
const friends = ['saif', 'wasi', 'azaan', 'jarvin'];
const buddy = megaFriend(1234);
// console.log(buddy)

if(friends.indexOf('jafran') != -1){
    // console.log('azaan here')
}
else{
    // console.log("jafran doesnt exist")
}

// concat
const first = [1, 3, 6];
const second = [2, 5, 7, 8];
const combined = first.concat(second);
console.log(combined);