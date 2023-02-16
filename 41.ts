// 41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.

function show_magicians(magicians: string[]): void {
  for (let magician of magicians) {
    console.log(magician);
  }
}
  
// Create an array of magician names
const magicians: string[] = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];
  
// Call the show_magicians function with the magician array
show_magicians(magicians);
  