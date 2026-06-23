function firstUnique(arr){
    return arr.filter(item => {
        if (arr.indexOf(item) === arr.lastIndexOf(item)){
            return true
        } else {
            return null
        }
})
}

console.log(firstUnique([1, 2, 2, 3, 1, 4]))
console.log(firstUnique(['a', 'b', 'b', 'a']))