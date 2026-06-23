// Descriptors 1

const car = {}
Object.defineProperty(car, 'model', {
    value: 'BMW'
})

console.log(Object.getOwnPropertyDescriptor(car, 'model'))

// 2

const employee = {
    name: 'Ali',
    age: 20
}

console.log(Object.getOwnPropertyDescriptors(employee))

// 3

const book = {}

Object.defineProperty(book, 'isbn', {
    value: '123456',
    writable: false,
    configurable: false
})

// 4

const settings = {}

Object.defineProperty(settings, 'theme', {
    value: 'dark',
    writable: false
})

settings.theme = 'light'

// 5

const account = {}

Object.defineProperty(account, 'balance', {
    value: 1000,
    enumerable: false
})

// 6

const user = {}

Object.defineProperties(user, {
    name: {
        value: 'Ali'
    },
    age: {
        value: 20
    },
    city: {
        value: 'Toshkent'
    }
})

// 7

const obj = {
    a: 1,
    b: 2
}

for (let key in obj) {
    console.log(key)
}

// 8

const person = {
    name: 'Ali',
    age: 20
}

Object.defineProperties(person, {
    name: {
        value: 'Ali',
        writable: false
    },
    age: {
        value: 20,
        writable: false
    }
})

// 9

console.table(Object.getOwnPropertyDescriptors(person))

// 10

const test = {}

Object.defineProperty(test, 'name', {
    value: 'Ali',
    enumerable: false
})

console.log(Object.keys(test))

for (let key in test) {
    console.log(key)
}

// 11

const salaryObj = {}

Object.defineProperty(salaryObj, 'salary', {
    value: 5000,
    writable: false,
    enumerable: false,
    configurable: false
})

// 12

function checkDescriptors(obj) {
    return Object.getOwnPropertyDescriptors(obj)
}

// 13

function writableProps(obj) {
    let arr = []

    for (let key in Object.getOwnPropertyDescriptors(obj)) {
        if (Object.getOwnPropertyDescriptor(obj, key).writable) {
            arr.push(key)
        }
    }

    return arr
}

// 14

function configurableProps(obj) {
    let arr = []

    for (let key in Object.getOwnPropertyDescriptors(obj)) {
        if (Object.getOwnPropertyDescriptor(obj, key).configurable) {
            arr.push(key)
        }
    }

    return arr
}

// 15

const bank = {
    owner: 'Ali',
    balance: 1000
}

Object.defineProperty(bank, 'accountNumber', {
    value: '111222',
    writable: false,
    configurable: false
})

// 16

const user2 = {
    id: 1,
    username: 'ali'
}

Object.defineProperty(user2, 'password', {
    value: '12345',
    enumerable: false
})


// Getter Setter 1

const person2 = {
    firstName: 'Ali',
    lastName: 'Valiyev',

    get fullName() {
        return this.firstName + ' ' + this.lastName
    }
}

// 2

const rectangle = {
    width: 10,
    height: 5,

    get area() {
        return this.width * this.height
    }
}

// 3

const temperature = {
    celsius: 20,

    get fahrenheit() {
        return this.celsius * 9 / 5 + 32
    }
}

// 4

const user3 = {
    username: 'ali',

    get upperName() {
        return this.username.toUpperCase()
    }
}

// 5

const student = {
    math: 90,
    english: 80,
    physics: 100,

    get average() {
        return (this.math + this.english + this.physics) / 3
    }
}

// 6

const bankAccount = {
    balance: 1000,

    get money() {
        return this.balance
    }
}

// 7

const car2 = {
    brand: 'BMW',
    model: 'X5',
    year: 2024,

    get info() {
        return this.brand + ' ' + this.model + ' (' + this.year + ')'
    }
}

// 8

const circle = {
    radius: 5,

    get diameter() {
        return this.radius * 2
    }
}

// 9

const book2 = {
    title: 'JS',
    author: 'Ali',

    get description() {
        return this.title + ' ' + this.author
    }
}

// 10

const employee2 = {
    salary: 1000,
    bonus: 300,

    get totalIncome() {
        return this.salary + this.bonus
    }
}

// 11

const person3 = {
    firstName: '',
    lastName: '',

    set fullName(value) {
        let arr = value.split(' ')
        this.firstName = arr[0]
        this.lastName = arr[1]
    }
}

// 12

const temperature2 = {
    celsius: 0,

    set fahrenheit(value) {
        this.celsius = (value - 32) * 5 / 9
    }
}

// 13

const bankAccount2 = {
    balance: 0,

    set money(value) {
        if (value >= 0) {
            this.balance = value
        }
    }
}

// 14

const student2 = {
    grade: 0,

    set ball(value) {
        if (value >= 0 && value <= 100) {
            this.grade = value
        }
    }
}

// 15

const employee3 = {
    salary: 0,

    set money(value) {
        if (value >= 0) {
            this.salary = value
        }
    }
}

// 16

const user4 = {
    username: '',

    set name(value) {
        this.username = value.toLowerCase()
    }
}

// 17

const product = {
    price: 0,

    set newPrice(value) {
        if (typeof value === 'string') {
            return 'Xato'
        }

        this.price = value
    }
}

// 18

const car3 = {
    year: 2024,

    set newYear(value) {
        if (value >= 1900) {
            this.year = value
        }
    }
}

// 19

const circle2 = {
    radius: 0,

    set newRadius(value) {
        if (value >= 0) {
            this.radius = value
        }
    }
}

// 20

const book3 = {
    title: '',

    set newTitle(value) {
        if (value !== '') {
            this.title = value
        }
    }
}

// 21

const bankAccount3 = {
    balance: 0,

    get money() {
        return this.balance
    },

    set money(value) {
        if (value > 0) {
            this.balance = value
        }
    }
}

// 22

const user5 = {
    password: '',

    get showPassword() {
        return '********'
    },

    set newPassword(value) {
        this.password = value
    }
}

// 23

const student3 = {
    score: 0,

    get grade() {
        if (this.score >= 90) {
            return 'A'
        }

        if (this.score >= 80) {
            return 'B'
        }

        return 'C'
    },

    set grade(value) {
        this.score = value
    }
}

// 24

const product2 = {
    price: 1000,
    discount: 200,

    get finalPrice() {
        return this.price - this.discount
    }
}

// 25

const employee4 = {
    salary: 1000,

    get annualSalary() {
        return this.salary * 12
    }
}

// 26

const user6 = {
    email: '',

    set newEmail(value) {
        if (value.includes('@')) {
            this.email = value
        }
    }
}

// 27

const movie = {
    age: 18,

    get isAdult() {
        return this.age >= 18
    }
}

// 28

const rectangle2 = {
    width: 10,
    height: 5,

    get perimeter() {
        return (this.width + this.height) * 2
    },

    set size(value) {
        this.width = value
        this.height = value
    }
}

// 29

const inventory = {
    stock: 0,

    get isAvailable() {
        return this.stock > 0
    },

    set newStock(value) {
        if (value >= 0) {
            this.stock = value
        }
    }
}

// 30

const secureUser = {
    firstName: 'Ali',
    lastName: 'Valiyev',
    _password: '',

    get password() {
        return '********'
    },

    set password(value) {
        if (value.length >= 8) {
            this._password = value
        }
    },

    get fullName() {
        return this.firstName + ' ' + this.lastName
    }
}