function compareString(str1, str2){
    if (str1.length !== str2.length){
        return false
    } else {
        const sort1 = str1.split('').sort().join('');
        const sort2 = str2.split('').sort().join('');

        return sort1 === sort2
    }
}
console.log(compareString('yashnar', 'ranhsay'))

function containsDublicate(arr) {
    const newarr = []
    for (el of arr){
        if (arr.includes(el)){
            return true
        }
        newarr.push(el)
    }

    console.log(newarr)
}

containsDublicate([1, 2, 3, 1])