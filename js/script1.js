function myself(firstName, lastName, age, subject){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.subject = subject;
    }


let introduce = new myself("Sarah Louisse", "Sidamon", 21, "ICS 2609");

console.log('Hello, I am ' + introduce.firstName + " " + introduce.lastName + ".");
console.log('I am ' + introduce.age + ' years old' + ".");
console.log('I am enrolled in ' + introduce.subject + ".");