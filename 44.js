// 44. Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.
function makeSandwich() {
    var ingredients = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ingredients[_i] = arguments[_i];
    }
    console.log("Sandwich with:");
    for (var _a = 0, ingredients_1 = ingredients; _a < ingredients_1.length; _a++) {
        var ingredient = ingredients_1[_a];
        console.log("- ".concat(ingredient));
    }
    console.log("Enjoy your sandwich!");
}
// Call the function with different number of arguments
makeSandwich("Ham", "Cheese");
makeSandwich("Turkey", "Lettuce", "Tomato", "Mayo");
makeSandwich("Peanut Butter", "Jelly");
