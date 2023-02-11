// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var personName = "Rana Muhammad ahsan";
function toLocaleTitleCase(name) {
    return name.toLowerCase()
        .split(' ')
        .map(function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}
var n = toLocaleTitleCase(personName);
console.log("in lowercase", personName.toLocaleLowerCase());
console.log("in uppercase", personName.toLocaleUpperCase());
console.log("in Title Case", n);
