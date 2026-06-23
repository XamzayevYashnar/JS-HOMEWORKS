async function runSequentially(tasks){
    let result = []

    for (let item of tasks){
        let data = await item()
        result.push(data)
    }

    return result
}

const tasks = [
    () => new Promise(resolve => setTimeout(() => resolve(1),300)),
    () => new Promise(resolve => setTimeout(() => resolve(2),100)),
    () => new Promise(resolve => setTimeout(() => resolve(3),200))
]

runSequentially(tasks)
.then(res => console.log(res))