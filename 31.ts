// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

const usernames:string[] = [];

if (usernames.length == 0) {
    console.log("We need to find some users!");
}

for (let index = 0; index < usernames.length; index++) {
    const user = usernames[index];

    if (user == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${user}, thank you for logging in again`);
    }
}