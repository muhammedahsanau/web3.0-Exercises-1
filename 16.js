// 16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
var Guests = ["Ali", "Junaid", "Kamraan"];
var Invitation = " I’m sending you my warmest invitation to this dinner party. Your presence is all that is required to make this party a success.";
var newMsg = " i have fount new dinning table ";
// adding guest in the beginning
Guests.unshift("Muhammad wali");
// adding to middle of arr
Guests.splice(Guests.length / 2, 0, "Rana Awais");
// adding at the end
Guests.push("Arkam Ali Khan");
for (var index = 0; index < Guests.length; index++) {
    var guest = Guests[index];
    // printing one by one 
    console.log("Hi " + guest + newMsg + Invitation);
}
