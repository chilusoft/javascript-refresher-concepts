// Ternary
// condition ? 'true' : 'false'
var num1 = 8;
var num2 = -1;

console.log(num1 > num2 ? `${num1} is greater than ${num2}`: `${num2} is greater than ${num1}`);

// Destructuring
// Helps unpack values from objects or arrays

const objects = ['Lenovo', 'MIT', 'Indian Ocean'];
const [company, university, waterBody] = objects;
console.log(
    `${company} is a computer company\n${university} is an Engineering institute in America\n${waterBody} is an ocean bordered by eastern coast of Africa and the Southern coast of Asia.`
);