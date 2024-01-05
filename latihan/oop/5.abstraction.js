// hiding implementation details

class Dog {
    name = "";
    
    setName(val) {
        if(val.length <= 3) {
            return console.error("Dog name cannot under 3 letters")
        }
        this.name = val
    }
    
    getName() {
        return this.name
    }
}

const dog = new Dog()
dog.setName("Heli")
console.log(dog.getName())