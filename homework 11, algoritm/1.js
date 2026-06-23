function getIndexNumber(arr, num){
    let count = [];
    let repeat = 0

    const Newarr = [];

    for (el of arr){
        if (repeat != 2){
            count.push(el)
            repeat++
        } else {
            repeat = 0
            count.reduce(
                (acc, item)=>{
                    if (acc + item === num){
                        Newarr.push(acc)
                        Newarr.push(item)
                    } else {
                        count = [];
                    }
                }
            )
        }
    }

    const result = [];

    arr.forEach((element, index) => { 
        for (item of Newarr){
            if (item === element){
                result.unshift(index)
            }
        }
    });
    return arr + ' => Index: ' + result
}

console.log(getIndexNumber([1, 2, 3, 4, 5, 6], 9))