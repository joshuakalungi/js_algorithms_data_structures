// In JavaScript, destructuring is a way to extract values from arrays or objects 
// and assign them to variables in a more concise and convenient manner. 
// It allows you to unpack values from arrays or properties from objects, 
// creating shorter and cleaner code.

// There are two main types of destructuring in JavaScript:

// 1. Array Destructing
// Open array_destructing.js and add the following code:

// 2. Object Destructing
// Open object_destructing.js and add the following code:

// You can also use destructuring in function parameters:

function printStudent({name, age, className}) {
    console.log(`Name: ${name}, Age: ${age}, ClassName: ${className}`);
}

const Student = {
    name: 'John Doe',
    age: 16,
    className: '10th'
};

printStudent(Student);


