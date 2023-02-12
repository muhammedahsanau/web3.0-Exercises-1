// 18. Seeing the World: Think of at least five places in the world you’d like to visit.

// • Store the locations in a array. Make sure the array is not in alphabetical order.

const favPlaces:string[] = ["tokyo japan", "lahore Pakistan", "sydney Australia", "sawat Pakistan", "Gujranwala Pakistan"]

// • Print your array in its original order.
console.log("array in original order ", favPlaces);


// • Print your array in alphabetical order without modifying the actual list.
const alphabeticalOrder:string[] = [...favPlaces].sort()
console.log("array in alphabetical order ", alphabeticalOrder);

// • Show that your array is still in its original order by printing it.
console.log("array still in original order ", favPlaces);


// • Print your array in reverse alphabetical order without changing the order of the original list.
const reverseAlphabeticalOrder:string[] = [...favPlaces].reverse()
console.log("reverse alphabetical order ", reverseAlphabeticalOrder);


// • Show that your array is still in its original order by printing it again.
console.log("still in its original order ", favPlaces);


// • Reverse the order of your list. Print the array to show that its
// order has changed.
const reverceOrder:string[] = favPlaces.reverse()
console.log("reverce order ", reverceOrder);
console.log("original array is also reversed", favPlaces);


// • Reverse the order of your list again. Print the list to show it’s back to its original order.
const againReverceOrder:string[] = favPlaces.reverse()
console.log("back to original", favPlaces);

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
const alphabeticalOrderArray:string[] = favPlaces.sort()
console.log("alphabetical Order Array", alphabeticalOrderArray);
console.log("original array is also in alphabetical Order", alphabeticalOrderArray);



// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
const reverseAlphabeticalOrderArray:string[] = favPlaces.reverse()
console.log("reverse alphabetical order ", reverseAlphabeticalOrderArray);
console.log("original array is also in reverse alphabetical order ", favPlaces);