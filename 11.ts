// 11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

const myFriendNames:string[] = ["Wajahat", "Muhammad Ebaad Ali", "muhammd Hassan"];

for (let index = 0; index < myFriendNames.length; index++) {
    const name = myFriendNames[index];

    // printing one by one 
    console.log(name);
}