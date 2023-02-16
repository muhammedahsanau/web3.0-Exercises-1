// 41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Create an array of magician names
var magicians = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];
// Call the show_magicians function with the magician array
show_magicians(magicians);
