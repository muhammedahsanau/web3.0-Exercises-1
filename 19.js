// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
// of people you are inviting to dinner.
var ourGuestsList = ["Ali", "Junaid", "Kamraan"];
var ourInvitationMsg = " I’m sending you my warmest invitation to this dinner party. Your presence is all that is required to make this party a success.";
var sorry = " sorry i was not able to arange the table on time you are not invited ";
// adding guest in the beginning
ourGuestsList.unshift("Muhammad wali");
// adding to middle of arr
ourGuestsList.splice(ourGuestsList.length / 2, 0, "Rana Awais");
// adding at the end
ourGuestsList.push("Arkam Ali Khan");
var ourGuestsListLength = ourGuestsList.length;
var numberOfpeopleInviting = 0;
for (var index = 0; index < ourGuestsListLength; index++) {
    if (index > ourGuestsList.length) {
        console.log("hi " + ourGuestsList[index] + ourInvitationMsg);
        numberOfpeopleInviting++;
    }
    else {
        console.log("hi " + ourGuestsList[index] + sorry);
    }
    ourGuestsList.pop();
}
console.log("printing empty array/list :", ourGuestsList);
console.log("number Of people we are Inviting are:", numberOfpeopleInviting);
