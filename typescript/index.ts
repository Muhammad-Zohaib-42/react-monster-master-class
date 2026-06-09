class Dog {
    bark(): void {
        console.log("barking...")
    }
}

class Cat {
    meow(): void {
        console.log("meow...")
    }
}

function animalsSound(animal: Dog | Cat):void {
    if (animal instanceof Dog) {
        animal.bark()
    } else {
        animal.meow()
    }
}

const dog = new Dog()
const cat = new Cat()

animalsSound(dog)
animalsSound(cat)