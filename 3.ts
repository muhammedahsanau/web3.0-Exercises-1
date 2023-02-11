// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

const personName:string = "rana Muhammad ahsan"


function toLocaleTitleCase (name: string) {
    // i have writen a method that first splits the string into an array and 
    // then make each work capital and them combines them back.
    return name.toLowerCase()
        .split(' ') 
        .map(function(word) {
            return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(' ');
}


const n:string = toLocaleTitleCase(personName);
console.log("in lowercase", personName.toLocaleLowerCase());

console.log("in uppercase", personName.toLocaleUpperCase());

console.log("in Title Case", n);
