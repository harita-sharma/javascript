function Per() {
    this.name = 'harita',
    this.age = 22,

    this.main = function(){
    console.log('hello');
    },
    this.city = 'bhilwara';
}

 const person = new Per();
console.log(person.name);
console.log(person.age);
person.main();
