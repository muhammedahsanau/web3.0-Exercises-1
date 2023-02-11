// 13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list
// to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var vehicles = ["BMW Bikes", "honda civic", "volvo"];
var msg = [" is my favourite", " is the only car that i don't like.", " are not produces in pakistan."];
for (var index = 0; index < vehicles.length; index++) {
    var vehicle = vehicles[index];
    // printing one by one 
    console.log(vehicle + msg[index]);
}
