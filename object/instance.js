const person = new Object ( {
    name : 'harita',
    age : 22,
    greet : function() {
        console.log('hello');
    },
    skills : {
        javascript : 3,
        react : 3   
 }
}
);


console.log(person.name);
person.greet();
console.log(person.skills.javascript);
