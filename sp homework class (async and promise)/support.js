// const promise = new Promise( (res, rej) => setTimeout(() => res(`Salom Dunyo!`), 2000))
//     .then((res)=> console.log(res))

// function checkAge(age){
//     if (age >= 18){
//         return Promise.resolve('Ruxsat berildi');
//     } else {
//         return Promise.reject('Yosh yetarli emas')
//     }
// }

// checkAge(18)
//     .then((res)=>console.log(res))
//     .catch((err)=>console.log(err))

// async function getUser(id){
//     return await new Promise((res)=>setTimeout(()=>
//         res({
//         id: id,
//         name: 'Yashnar',
//     })), 
//     2000)
// }

// getUser(1)
//     .then((data)=>console.log(data))
//     .catch((err)=> console.log(err))

// function sayHello(name){
//     return new Promise(
//         (res, rej)=>{
//             setTimeout(()=>res(`Salom ${name}`), 2000)
//         }
//     )
// }

// async function main(){
//     const name = await sayHello('yashnar');
//     console.log(name)
// }

// main()

// async function getKvadrat(number){
//     if (number > 0){
//         return await new Promise(
//             (res, rej)=>{
//                 res(number*number)
//             }
//         )
//     } else {
//         return await new Promise(
//             (res, rej)=>{
//                 rej('Xatolik! manfiy son kiritmang!')
//             }
//         )
//     }
// }

// getKvadrat(-1)
//     .then(
//         (res)=>{
//             console.log(res)
//         }
//     )

//     .catch(
//         (rej)=>{
//             console.log(rej)
//         }
//     )

// async function deplay(ms){
//     if (ms > 0){
//         return await setTimeout(()=>new Promise(
//             (res, rej)=>{
//                 res('promisify')
//         },
//         ms))
//     } else {
//         console.log('Iltimos 0 dan kichik bulmasin!')
//     }
// }

// deplay(1000)
//     .then((res)=>console.log(res))
//     .catch((res)=>console.log(rej))