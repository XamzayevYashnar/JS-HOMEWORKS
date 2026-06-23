// 1
const students = new Map([
    ["Ali", 85],
    ["Vali", 95],
    ["Hasan", 90]
]);

let topStudent = "";
let maxScore = 0;

for (const [name, score] of students) {
    if (score > maxScore) {
        maxScore = score;
        topStudent = name;
    }
}

console.log(topStudent, maxScore);


// 2
const products = new Map([
    ["Olma", 50],
    ["Telefon", 300],
    ["Noutbuk", 500]
]);

const expensiveProducts = new Map(
    [...products].filter(([name, price]) => price > 100)
);

console.log(expensiveProducts);


// 3
const text = "salom";

const letters = new Map();

for (const char of text) {
    letters.set(char, (letters.get(char) || 0) + 1);
}

console.log(letters);


// 4
const numbers = [2, 3, 4, 5];

const squares = new Map();

for (const num of numbers) {
    squares.set(num, num ** 2);
}

console.log(squares);


// 5
const users = [
    { login: "ali", age: 20 },
    { login: "vali", age: 22 },
    { login: "hasan", age: 25 }
];

const userMap = new Map(
    users.map(user => [user.login, user.age])
);

console.log(userMap);


// 6
const map1 = new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3]
]);

const map2 = new Map([
    ["b", 5],
    ["c", 7],
    ["d", 9]
]);

const commonKeys = [];

for (const key of map1.keys()) {
    if (map2.has(key)) {
        commonKeys.push(key);
    }
}

console.log(commonKeys);


// 7
const map = new Map([
    ["a", 1],
    ["b", 2],
    ["c", 1],
    ["d", 1],
    ["e", 2]
]);

const countMap = new Map();

for (const value of map.values()) {
    countMap.set(value, (countMap.get(value) || 0) + 1);
}

let mostValue;
let count = 0;

for (const [value, qty] of countMap) {
    if (qty > count) {
        count = qty;
        mostValue = value;
    }
}

console.log(mostValue);


// 8
const phones = new Map([
    ["Ali", "998901111111"],
    ["Vali", "998902222222"],
    ["Hasan", "998903333333"]
]);

const searchNumber = "998902222222";

for (const [name, number] of phones) {
    if (number === searchNumber) {
        console.log(name);
    }
}


// 9
const arr = [1, 2, 2, 3, 3, 4, 5];

const unique = [...new Set(arr)];

console.log(unique);


// 10
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

const intersection = [...new Set(arr1)].filter(num =>
    new Set(arr2).has(num)
);

console.log(intersection);


// 11
const nums = [1, 2, 2, 3, 4, 4, 5];

console.log(new Set(nums).size);


// 12
const word = "javascript";

console.log(new Set(word).size);


// 13
const numbers2 = [1, 2, 3, 4, 2];

console.log(new Set(numbers2).size !== numbers2.length);


// 14
const first = [1, 2, 3];
const second = [3, 2, 1];

const same =
    first.length === second.length &&
    [...new Set(first)].every(el => second.includes(el));

console.log(same);


// 15
const arr3 = [1, 2, 2, 3, 3, 3, 4];

let mostRepeated;
let maxCount = 0;

for (const value of new Set(arr3)) {
    const count2 = arr3.filter(el => el === value).length;

    if (count2 > maxCount) {
        maxCount = count2;
        mostRepeated = value;
    }
}

console.log(mostRepeated);


// 16
const arr4 = [1, 2, 2, 3, 4, 4, 5];

const singleValues = arr4.filter(
    item => arr4.filter(el => el === item).length === 1
);

console.log(singleValues);


// 17
const user1 = { name: "Ali" };
const user2 = { name: "Vali" };

const loginTimes = new WeakMap();

loginTimes.set(user1, new Date());
loginTimes.set(user2, new Date());

console.log(loginTimes.get(user1));


// 18
const book1 = { title: "JS" };
const book2 = { title: "Python" };

const bookStatus = new WeakMap();

bookStatus.set(book1, true);
bookStatus.set(book2, false);

console.log(bookStatus.get(book1));


// 19
const emp1 = { name: "Ali" };
const emp2 = { name: "Vali" };

const ids = new WeakMap();

ids.set(emp1, "EMP001");
ids.set(emp2, "EMP002");

console.log(ids.get(emp1));


// 20
const product1 = { name: "Telefon" };
const product2 = { name: "Noutbuk" };

const discounts = new WeakMap();

discounts.set(product1, 10);
discounts.set(product2, 20);

console.log(discounts.get(product2));


// 21
const products2 = [product1, product2];

let bestProduct = null;
let biggestDiscount = 0;

for (const product of products2) {
    const discount = discounts.get(product);

    if (discount > biggestDiscount) {
        biggestDiscount = discount;
        bestProduct = product;
    }
}

console.log(bestProduct);


// 22
const u1 = { name: "Ali" };
const u2 = { name: "Vali" };

const ratings = new WeakMap();

ratings.set(u1, 80);
ratings.set(u2, 95);

let bestUser = u1;

if (ratings.get(u2) > ratings.get(bestUser)) {
    bestUser = u2;
}

console.log(bestUser);


// 23
const onlineUsers = new WeakSet();

const a = { name: "Ali" };
const b = { name: "Vali" };

onlineUsers.add(a);

console.log(onlineUsers.has(a));
console.log(onlineUsers.has(b));


// 24
const doc1 = { id: 1 };
const doc2 = { id: 2 };

const checkedDocs = new WeakSet();

checkedDocs.add(doc1);

console.log(checkedDocs.has(doc1));
console.log(checkedDocs.has(doc2));


// 25
const p1 = { name: "Olma" };
const p2 = { name: "Banan" };

const cart = new WeakSet();

cart.add(p1);

console.log(cart.has(p1));
console.log(cart.has(p2));


// 26
const processed = new WeakSet();

const obj = {};

processed.add(obj);

console.log(processed.has(obj));


// 27
const student = {
    firstName: "Ali",
    lastName: "Valiyev",
    age: 20,
    score: 95
};

const { firstName, score } = student;

console.log(firstName, score);


// 28
const data = {
    user: {
        name: "Ali",
        address: {
            city: "Tashkent"
        }
    }
};

const {
    user: {
        address: { city }
    }
} = data;

console.log(city);


// 29
const numbers3 = [10, 20, 30, 40, 50];

const [firstNum, secondNum, , , lastNum] = numbers3;

console.log(firstNum, secondNum, lastNum);


// 30
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4));


// 31
const students2 = [
    { name: "Ali", age: 20, score: 90 },
    { name: "Vali", age: 22, score: 95 },
    { name: "Hasan", age: 21, score: 85 }
];

let best = students2[0];

for (const student of students2) {
    const { name, ...rest } = student;

    console.log(name);
    console.log(rest);

    if (student.score > best.score) {
        best = student;
    }
}

console.log(best);


// 32
const products3 = [
    { name: "Telefon", price: 1000, color: "Black" },
    { name: "Noutbuk", price: 2000, color: "Gray" }
];

const result = products3.map(({ name, ...rest }) => rest);

console.log(result);


// 33
const set1 = new Set([1, 2, 3]);
const set2 = new Set([3, 4, 5]);

const union = new Set([...set1, ...set2]);

const intersection2 = new Set(
    [...set1].filter(el => set2.has(el))
);

const difference = new Set(
    [...set1].filter(el => !set2.has(el))
);

console.log(union);
console.log(intersection2);
console.log(difference);


// 34
const sentence = "ali vali ali hasan ali vali";

const words = sentence.split(" ");

const wordMap = new Map();

for (const word of words) {
    wordMap.set(word, (wordMap.get(word) || 0) + 1);
}

let topWord = "";
let topCount = 0;

for (const [word, count3] of wordMap) {
    if (count3 > topCount) {
        topCount = count3;
        topWord = word;
    }
}

console.log(topWord);


// 35
const userA = { name: "Ali" };
const userB = { name: "Vali" };

const activity = new WeakMap();

activity.set(userA, 120);
activity.set(userB, 250);

let activeUser = userA;

if (activity.get(userB) > activity.get(activeUser)) {
    activeUser = userB;
}

console.log(activeUser);