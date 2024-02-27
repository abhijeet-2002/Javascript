// Immediately Invoked Function Expressions (IIFE)


(function vinni(){
    // named IIFE
    console.log(`DATABASE CONNECTED`);
})();

( (name) => {
    console.log(`DATABASE CONNECTED TWO ${name}`);
} )('Abhijeet')