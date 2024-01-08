function callbackFunction() {
    console.log("Halo saya adalah callback function")
}

function higherOrderFunction(callback) {
    console.log("Ini adalah console dari higher order function")
    callback()
}

higherOrderFunction(callbackFunction)

// custom HOF

const radius = [1, 2, 3, 4, 5]
const radius2 = [10, 20, 30]

const area = function (radius) {
    return Math.PI * radius * radius
}

const diameter = function (radius) {
    return 2 * radius
}

const kelilinglingkaran = function (radius) {
    return 2 * Math.PI * radius * radius
}

const calculate = function (radius, logic) {
    const output = []
    for (let index = 0; index < radius.length; index++) {
        output.push(logic(radius[index]))
    }
    return output
}

console.log(calculate(radius, area))
console.log(calculate(radius2, kelilinglingkaran))
