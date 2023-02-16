// 42. Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.


function show_magicians(magicians: string[]): void {
  for (let magician of magicians) {
    console.log(magician);
  }
}
  
function make_great(magicians: string[]): string[] {
  const great_magicians: string[] = [];
  for (let magician of magicians) {
    great_magicians.push(`the Great ${magician}`);
  }
  return great_magicians;
}
  
// Create an array of magician names
const magicians: string[] = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];
  
// Call the make_great function to modify the magician array
const great_magicians: string[] = make_great(magicians);
  
// Call the show_magicians function with the great magician array
show_magicians(great_magicians);
  