// 37. Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.

function make_shirt(message: string = "I love TypeScript", size: string = "large"): void {
    console.log(`A ${size} shirt will be printed with the message "${message}".`);
}
  
// Call the function to make a large shirt with the default message
make_shirt();
  
// Call the function to make a medium shirt with the default message
make_shirt("I also love JavaScript", "medium");
  
// Call the function to make a small shirt with a custom message
make_shirt("TypeScript is awesome", "small");
  