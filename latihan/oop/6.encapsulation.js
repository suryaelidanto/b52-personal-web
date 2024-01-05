// protect properties or methods from outside
class Dog {
    #name = ""; // private access modifier
    #color = ""

    set name(val) {
        if (val.length <= 3) {
            return console.error("Dog name cannot under 3 letters")
        }
        this.#name = val
    }

    set color(val) {
        this.#color = val
    }

    get name() {
        return this.#name
    }

    get color() {
        return this.#color
    }
}

const dog = new Dog()
dog.name = "Heli"
console.log(dog.name)