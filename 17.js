// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
// of your program.
var guestsList = ["Ali", "Junaid", "Kamraan"];
var invitationMsg = " I’m sending you my warmest invitation to this dinner party. Your presence is all that is required to make this party a success.";
var sorryMsg = " sorry i was not able to arange the table on time you are not invited ";
// adding guest in the beginning
guestsList.unshift("Muhammad wali");
// adding to middle of arr
guestsList.splice(guestsList.length / 2, 0, "Rana Awais");
// adding at the end
guestsList.push("Arkam Ali Khan");
var guestsListLength = guestsList.length;
for (var index = 0; index < guestsListLength; index++) {
    if (index > guestsList.length) {
        console.log("hi " + guestsList[index] + invitationMsg);
    }
    else {
        console.log("hi " + guestsList[index] + sorryMsg);
    }
    guestsList.pop();
}
console.log("printing empty array/list :", guestsList);
