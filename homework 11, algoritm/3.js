function containsDuplicate(arr){
    let newArr = []

    for (let el of arr){
        if (newArr.includes(el)){
            return true
        }

        newArr.push(el)
    }

    return false
}

console.log(containsDuplicate([1,2,3,1]))