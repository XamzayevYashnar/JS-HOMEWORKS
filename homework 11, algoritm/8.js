function isValid(str){
    let stack = []
    let obj = {
        ")":"(",
        "]":"[",
        "}":"{"
    }

    for (let el of str){
        if (el === "(" || el === "[" || el === "{"){
            stack.push(el)
        } else {
            if (stack.pop() !== obj[el]){
                return false
            }
        }
    }

    return stack.length === 0
}

console.log(isValid("()[]{}"))