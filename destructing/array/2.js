const person = {
    name: 'harita',
}

// assign default value 26 to age if undefined
const { name, age = 22} = person;

console.log(name); 
console.log(age); 