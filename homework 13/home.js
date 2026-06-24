// 1-masala

function tubmi(son){
    if (son <= 1) return false

    for (let i = 2; i < son; i++){
        if (son % i == 0){
            return false
        }
    }

    return true
}


// 2-masala

function tubSonlar(a, b){
    let newArr = []

    for (let i = a; i <= b; i++){
        let tub = true

        if (i <= 1){
            tub = false
        }

        for (let j = 2; j < i; j++){
            if (i % j == 0){
                tub = false
            }
        }

        if (tub){
            newArr.push(i)
        }
    }

    return newArr
}


// 3-masala

function ekub(a, b){
    let son = 1

    for (let i = 1; i <= a && i <= b; i++){
        if (a % i == 0 && b % i == 0){
            son = i
        }
    }

    return son
}


// 4-masala

function anagramma(a, b){
    let soz1 = a.split('').sort().join('')
    let soz2 = b.split('').sort().join('')

    soz1 === soz2
}


// 5-masala

function fibonachchi(n){
    let arr = [0,1]

    if (n == 1){
        return [0]
    }

    for (let i = 2; i < n; i++){
        arr.push(arr[i - 1] + arr[i - 2])
    }

    return arr
}


// 6-masala

function armstrong(son){
    let str = String(son)
    let yigindi = 0

    for (let el of str){
        yigindi += el ** 3
    }

    if (yigindi == son){
        return true
    }

    return false
}


// 7-masala

function ikkilik(son){
    let natija = ""

    while (son > 0){
        natija = son % 2 + natija
        son = Math.floor(son / 2)
    }

    return natija
}


// 8-masala

function noyob(arr){
    let newArr = []

    for (let el of arr){
        if (!newArr.includes(el)){
            newArr.push(el)
        }
    }

    return newArr
}


// 9-masala

function engKopTakror(arr){
    let count = 0
    let son

    for (let i = 0; i < arr.length; i++){
        let temp = 0

        for (let j = 0; j < arr.length; j++){
            if (arr[i] == arr[j]){
                temp++
            }
        }

        if (temp > count){
            count = temp
            son = arr[i]
        }
    }

    return son
}


// 10-masala

function harfChastotasi(soz){
    let obj = {}

    for (let el of soz){
        if (obj[el]){
            obj[el]++
        } else {
            obj[el] = 1
        }
    }

    return obj
}