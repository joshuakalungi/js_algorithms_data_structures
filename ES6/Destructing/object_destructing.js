// program to demonstrate object destructuring

// object declaration
const student = {
    name: 'John Doe',
    age: 16,
    class: '10th'
};

// Destructuring assignment
const {name,age} = student;
// Here, the name and age properties of the person object 
// are extracted and assigned to variables with the same names.

// output
console.log(name, age); // John Doe

