class Dog { // PascalCase
    name = ""
    color = ""
    eyeColor = ""
    height = 0
    weight = 0
    
    constructor(name, color, eyeColor, height, weight) {
        this.name = name
        this.color = color
        this.eyeColor = eyeColor
        this.height = height
        this.weight = weight
    }
    
    sit() {
        console.log(`${this.name} is sitting`) 
    }
    
    layDown() {
        console.log("The dog is laying down")
    }
    
    shake() {
        console.log("The dog is shaking")
    }
    
    come() {
        console.log("The dog is coming to you")
    }
}
