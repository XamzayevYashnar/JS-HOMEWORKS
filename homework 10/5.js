async function retry(fn, attempts){
    let lastError

    for (let i = 0; i < attempts; i++){
        try{
            return await fn()
        } catch (error){
            lastError = error
        }
    }

    throw lastError
}

let count = 0

const unstable = () => {
    count++

    return count < 3
    ? Promise.reject(new Error("xato"))
    : Promise.resolve("muvaffaqiyat")
}

retry(unstable,5)
.then(res => console.log(res))
.catch(err => console.log(err))