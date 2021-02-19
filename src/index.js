module.exports = function reverse (n) {
    let str = n.toString()
    let arr = str.split("")
    let revArr = []
    let reversedString = 0
    let resNumber = 0
    
for (let i = arr.length - 1; i>=0; i--) {
     revArr.push(arr[i]) 
}
    reversedString = revArr.join("")
    return parseInt(reversedString)

}

