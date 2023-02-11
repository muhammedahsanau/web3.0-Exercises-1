// 12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message
// should be the same, but each message should be personalized with the person’s name.
var friendNames = ["Wajahat", "Muhammad Ebaad Ali", "muhammd Hassan"];
var messages = [" Stop crying because it is over. Start smiling because that ungrateful loser is someone else problem.",
    " Don't be sad that he chose her over you, stop counting your thunderstorms, and start counting your rainbows!",
    " Please remember, do not take life too seriously. You will never get out of it alive.", " wanna hear a joke? \"Two strands of DNA are walking down the street. One says to the other: \"Do these genes make me look fat?\""];
for (var index = 0; index < friendNames.length; index++) {
    var friend = friendNames[index];
    var randomMessageIndex = Math.floor(Math.random() * (messages.length));
    // printing one by one 
    console.log("hey " + friend + messages[randomMessageIndex]);
}
