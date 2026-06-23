function merge(arr1, arr2){
    let newArr = []

    for (let el of arr1){
        newArr.push(el)
    }

    for (let el of arr2){
        newArr.push(el)
    }

    for (let i = 0; i < newArr.length; i++){
        for (let j = i + 1; j < newArr.length; j++){
            if (newArr[i] > newArr[j]){
                let temp = newArr[i]
                newArr[i] = newArr[j]
                newArr[j] = temp
            }
        }
    }

    return newArr
}

console.log(merge([1,3,5], [2,4,6]))