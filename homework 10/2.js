function daysBetween(date1, date2){
    let first = new Date(date1)
    let second = new Date(date2)

    let result = Math.abs(first-second)

    return result / (1000*60*60*24)
}

console.log(daysBetween("2025-01-01", "2025-01-10"))
console.log(daysBetween("2025-03-10", "2025-03-01"))