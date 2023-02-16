// 34. Pizzas: Think of at least three kinds of your favorite pizza. Store these
// pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza
// instead of printing just the name of the pizza. For each pizza you should
// have one line of output containing a simple statement like I like pepperoni
// pizza.
// • Add a line at the end of your program, outside the for loop, that states
// how much you like pizza. The output should consist of three or more lines
// about the kinds of pizza you like and then an additional sentence, such as
// I really love pizza!
var pizza_names = ['papproni', 'deep dish pizza', 'itliean'];
var comments = ['i dont like', 'i just live', 'i hate the'];
for (var index = 0; index < pizza_names.length; index++) {
    var pizza = pizza_names[index];
    var comment = comments[index];
    console.log(comment, pizza);
}
console.log('    I love eating pizza a lot. It is my favorite food. My mother is the person who makes pizza for me.', '\n', 'There are different types of pizza but I love cheese pizza mostly.', '\n', 'Because I think these types of Pizzas are healthy and give me strength. ', '\n', 'Eating a lot of pizza is not good for health. ', '\n', "I really love pizza!");
