var Person = function Person() {
  this.name = 'John';
  this.age = 30;
}
var per = new Person();
console.log(per);

var per2 = Object.create(Person.prototype);
console.log(per2);

console.log("it's a lonely day and it's mine");
