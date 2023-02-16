// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.
// Function to show magicians
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Function to make the magicians great
function make_great(magicians) {
    var great_magicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        great_magicians.push("The Great ".concat(magician));
    }
    return great_magicians;
}
// Array of magicians
var magicians = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];
// Make the magicians great and store the result in a new array
var great_magicians = make_great(magicians.slice());
// Show the original magicians
console.log("Original Magicians:");
show_magicians(magicians);
// Show the great magicians
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
