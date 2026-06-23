function moveZeroes(arr){
    let newArr = []
    let count = 0

    for (let el of arr){
        if (el === 0){
            count++
        } else {
            newArr.push(el)
        }
    }

    for (let i = 0; i < count; i++){
        newArr.push(0)
    }

    return newArr
}

console.log(moveZeroes([0,1,0,3,12]))