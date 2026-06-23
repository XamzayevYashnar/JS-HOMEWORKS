// const sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(sonlar.reverse());

// const sonlar = ['yashnar', 'xamzayev', 'zafar', 'jahongir']
// sonlar.sort((a, b) => a.length - b.length)
// console.log(sonlar);

// const sonlar = ['yashnar', 'xamzayev', 'zafar', 'jahongir', 'yashnar']
// const arr = sonlar.filter((el, index) => sonlar.indexOf(el) === index);
// console.log(arr);

// closer function
// function closerFunk(){
//     count = 0;

//     function inner(){
//         return ++count
//     }

//     return inner;

// }

// myFunk = closerFunk()

// IIF - (Immidetily Inkoved Function Expression)

// (function (name){
//     console.log('hello', name);
    
// }('yashnar'))

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// arr.forEach(function(item, index, arr){
//     console.log(item, index, arr);
// });

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// newArr = arr.filter((item) => item === 'as')
// console.log(newArr);

// user = {
//     name: 'Yashnar',
//     age: 16
// }

// for (let i in user){
//     console.log(`Key Name: ${i} ->`, `Object: ${user[i]}`);
// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (array of arr){
//     console.log(arr.indexOf(array));
// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 9]
// const newArr = arr.map((el, index) => arr.indexOf(el) === index)
// console.log(newArr);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newArr = arr.filter((item) => item % 2 === 0)
// console.log(`From this ${newArr} ` + 'to ' + newArr.map((item) => item ** 2));

// buble sort

// const arr = [1, 2, 12, 9, 21];

// console.log(arr.sort(function copmare(a, b){
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
// }));

// console.log(arr)

// function CheckJuftToqArray(arr){
//     const toq = arr.filter((item) => item % 2)
//     const juft = arr.filter((item) => item % 2 == 0)
//     return `Juft ${juft} ` + `Toq ${toq}`
// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(CheckJuftToqArray(arr));

// function ArraySquare(arr){
//     const newArr = arr.map((item) => item ** 2)
//     console.log(newArr);
    
// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// ArraySquare(arr)

// function maxLengthArray(arr){
//     const result = arr.sort()
//     return result[result.length - 1]
// }

// console.log(maxLengthArray(['yash', 'y', 'yas', 'ya', 'yashn', 'yashnar', 'yashna']))

// function softArray(arr){
//     const result = arr.flat(Infinity)
//     return result
// }

// console.log(softArray([1, 2, 3, 4, 5, [[[[[[6, 7]]]]]]]))

// function MusbatSonSanagich(arr){
//     return arr.filter(
//         (item) => item > 0
//     )
// }

// console.log(MusbatSonSanagich([1, -1, -2, -3, 2, 3, 4, 0, 5, 6, -8, 8, -9, 9,10]));

// const isimlar = ['yashnar, kamron, jamool, madina, sarvar, jahon, sarvinoz, zafar'];

// const result = isimlar.filter(item => item.split(', '))
// console.log(result);

// const sonlar = [12, 34, 45, 67, 34, 56, 34, 96, 10]

// const yigindi = sonlar.reduce(
//     function (acc, item){
//         return acc + item
//     }, 0
// );

// console.log(yigindi);

// const ballar = [100, 70, 60, 30, 10, 20, 85, 65, 50, 90];

// function getBetterBalls(arr){
//     return arr.filter(
//         function (item){
//             if (item >= 80){
//                 return item
//             }
//         }
//     )
// }

// console.log(getBetterBalls(ballar))

// const mahsulotlar = [
// { name: "Book", price: 50 },
// { name: "Phone", price: 500 }
// ];

// const newArr = mahsulotlar.reduce(
//     (max, item) => {
//         return item.price > max.price ? item : max;
//     }, mahsulotlar[0]
// );

// console.log(newArr);

// const sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(sonlar.reverse());

// const sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function CheckTubSon(arr){

//     newArr = [];

//     for ( item of arr ){
//         for (let i = 1; i <= item; i++){
//             if ( item % i - 1 != 0 ){
//                 newArr.push(item)
//             }
//         }
//     }

//     return newArr
// }

// console.log(CheckTubSon(sonlar))

// const arr = ['asdsad', 'asdasdsad', 'asdsadadadsad']
// let str = ''
// for ( item of arr ){
//     str += item
// }

// console.log(str.length);

// const arr = [1, 1, 1, 1, 1, 1, 2]
// const arrNew = arr.filter((item, index) => arr.indexOf(item) === index)
// console.log(arrNew)

// const arr = ['asdsad', 'asdasdsad', 'asdsadadadsad']
// const array = arr.map(item => item.toUpperCase().at(0))
// console.log(array);