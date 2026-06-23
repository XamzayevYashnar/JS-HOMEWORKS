function flatten(obj, parent = ""){
    let newObj = {}

    for (let key in obj){
        let current = parent + key

        if (typeof obj[key] == "object"){
            let result = flatten(obj[key], current + ".")

            for (let item in result){
                newObj[item] = result[item]
            }
        } else {
            newObj[current] = obj[key]
        } 
    }

    return newObj
}

console.log(flatten({
    a:1,
    b:{
        c:2,
        d:{
            e:3
        }
    }
}))