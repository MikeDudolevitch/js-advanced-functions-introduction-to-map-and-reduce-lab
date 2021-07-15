// Your code here
function mapToNegativize(array) {
    let neg = []
    for (let i = 0; i < array.length; i++) {
        neg.push(-1 * array[i])
    }
    return neg
}
function mapToNoChange(array) {
    let newArr = []
        for (let i = 0; i< array.length; i++) {
            newArr.push(array[i])
        }
    return newArr
}
function mapToDouble(array) {
    let newArr = []
    for (let i = 0; i < array.length; i++) {
        newArr.push(2 * array[i])
    }
    return newArr
}
function mapToSquare(array) {
    let newArr = []
    for (let i = 0; i < array.length; i++) {
        newArr.push(array[i] * array[i])
    }
    return newArr
}
function reduceToTotal(array, start= 0) {
    let total = start
    for (let i = 0; i < array.length; i++) {
        total = total + array[i]
    }
    return total
}
function reduceToAllTrue(array) {
    for (let i = 0; i < array.length; i++) {
        if (!array[i]) return false
    }
    return true
}
function reduceToAnyTrue(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i]) return true
    }
    return false
}