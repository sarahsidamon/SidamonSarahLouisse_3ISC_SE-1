class Animal{
   eat(food){
    }


}

class Dog extends Animal{
    eats(food){
        console.log(`${this.name} likes ${food}`);
    }
}

let d = new Animal();
this.name = "Bantay";
let a = new Dog();
d = a;
d.eats("fish");