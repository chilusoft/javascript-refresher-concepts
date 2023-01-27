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

// Spread Operator
// merges values of objects/arrays
var data_set_one = [1,2,3,4];
var data_set_two = [7,8,9];
var merged_data_set = [...data_set_one, ...data_set_two, 10, 11, 12]

console.log(
    `Dataset One ----> ${data_set_one}\nDataset Two ----> ${data_set_two}\nMerege Dataset --> ${merged_data_set}`
);