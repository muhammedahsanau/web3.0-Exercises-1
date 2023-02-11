// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to
// invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guests = ["Ali", "Junaid", "Kamraan"];
var invitations = [" I’m sending you my warmest invitation to this dinner party. Your presence is all that is required to make this party a success.",
    " On [Date], we will host a dinner party at our lovely home. We are looking for your presence to make it memorable!",
    " All we request is your presence as we celebrate the night of [Date] with our friends and loved ones. Please come and share in our happiness!"];
for (var index = 0; index < guests.length; index++) {
    var guest = guests[index];
    // printing one by one 
    console.log("hi " + guest + invitations[index]);
}
