// 15. Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still
// in your list.


const newGuests:string[] = ["Ali", "Junaid", "Kamraan"];
const newInvitation:string =" I’m sending you my warmest invitation to this dinner party. Your presence is all that is required to make this party a success." 

for (let index = 0; index < newGuests.length; index++) {

    if (index == newGuests.length - 1) {
        // replacing last guest name with the new name
        newGuests[index] = "Wajahat"
    }

    const guest = newGuests[index];


    // printing one by one 
    console.log("hi "+ guest + newInvitation);

}