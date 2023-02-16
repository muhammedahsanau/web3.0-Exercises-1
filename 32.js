// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a
// new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
var current_users = ['John', 'Wali', 'ahsan', 'Aladdin', 'Al'];
var new_users = ['James', 'Wali', 'marry', 'Tom', 'Al'];
//converting all current_users to lower case
var lowercase_current_users = current_users.map(function (item) {
    return item.toLowerCase();
});
for (var index = 0; index < new_users.length; index++) {
    var new_user = new_users[index];
    // converting new_user to lower case and than comparing
    if (lowercase_current_users.indexOf(new_user.toLowerCase()) !== -1) {
        console.log("the person will need to enter a new username");
    }
    else {
        console.log("the username is available");
    }
}
