var person = require("./person");
var person1 = new person ("Takes", "Ismail", "takesismail@lc.com");
var person2 = new person ("Lakes", "Brown", "lakesbrown@lc.com");
var person3 = new person ("Ethan", "Lesakes", "ethanlesakes@lc.com");
console.log (person1.fullName());
console.log (person2.fullName());
console.log (person3.fullName());