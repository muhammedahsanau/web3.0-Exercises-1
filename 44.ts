// 44. Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.

function makeSandwich(...ingredients: string[]): void {
  console.log("Sandwich with:");
  for (const ingredient of ingredients) {
    console.log(`- ${ingredient}`);
  }
  console.log("Enjoy your sandwich!");
}
  
// Call the function with different number of arguments
makeSandwich("Ham", "Cheese");
makeSandwich("Turkey", "Lettuce", "Tomato", "Mayo");
makeSandwich("Peanut Butter", "Jelly");
  