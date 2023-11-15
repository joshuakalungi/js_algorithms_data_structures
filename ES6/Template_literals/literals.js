// Template literals, introduced in ECMAScript 6 (ES6), 
// are a way to represent strings in JavaScript with a more flexible 
// and convenient syntax. Template literals allow you to embed 
// expressions directly into string literals, making it easier to 
// create dynamic strings. They are enclosed by backticks (` `) 
// instead of single or double quotes.

const student = {
    name: 'John Doe',
    age: 16,
}

// template string
console.log(`Hello, my name is ${student.name} and I'm ${student.age} years old.`);


// NOTE: 
// Template literals support multiline strings without the need for escape characters:
// goto ES6/Template_literals/multi_line.js
// Template literals also support expressions, allowing you to include more 
// complex JavaScript code within the template:
// goto ES6/Template_literals/expressions.js