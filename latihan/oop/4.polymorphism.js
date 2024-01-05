class Animal {
    speak() {
       throw new Error("There is no speak() for animal classes")
    }
}

class Duck extends Animal {
  speak() {
      console.log("Quack!")
  }  
}

class Cat extends Animal {
    speak() {
        console.log("Meow!")
    }
}

class Dog extends Animal {
    speak() {
        console.log("Woof!")
    }
}

const dog = new Dog()
dog.speak()