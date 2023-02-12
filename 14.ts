// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to
// invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

const guests:string[] = ["Ali", "Junaid", "Kamraan"];
const invitation:string = " I’m sending you my warmest invitation to this dinner party. Your presence is all that is required to make this party a success." 

for (let index = 0; index < guests.length; index++) {
    const guest = guests[index];

    // printing one by one 
    console.log("hi "+ guest + invitation);
}