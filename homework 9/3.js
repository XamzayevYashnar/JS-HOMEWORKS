function deepReverse(arr){
    if (Array.isArray(arr)){
        return arr.reverse()
    } else {
        return 'Iltimos array bering!'
    }
}

console.log(deepReverse([1, 2, 3, 4, 5]))