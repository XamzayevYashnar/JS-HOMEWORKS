function maxProfit(arr){
    let min = arr[0]
    let profit = 0

    for (let i = 1; i < arr.length; i++){
        if (arr[i] < min){
            min = arr[i]
        }

        if (arr[i] - min > profit){
            profit = arr[i] - min
        }
    }

    return profit
}

console.log(maxProfit([7,1,5,3,6,4]))