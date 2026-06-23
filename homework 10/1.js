// 1 masala

function mostFrequentChar(str){
    let obj = new Map()

    for (let char of str){
        if (char != " "){
            if (obj.has(char)){
                obj.set(char, obj.get(char)+1)
            } else {
                obj.set(char, 1)
            }
        }
    }

    let max = 0
    let result = ""

    for (let [key, value] of obj){
        if (value > max){
            max = value
            result = key
        }
    }

    return {
        char: result,
        count: max
    }
}

console.log(mostFrequentChar("javascript"))
console.log(mostFrequentChar("aabbb"))