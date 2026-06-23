// 1-masala
class Animal {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

class Dog extends Animal {
    breed = "Xaski"

    getInfo() {
        return this.breed
    }
}

const animal = new Dog()
console.log(animal.getInfo())

// 2-masala
class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
}

class ElectronicProduct extends Product {
    constructor(name, price, warranty) {
        super(name, price)
        this.warranty = warranty
    }

    getWarrantyPrice() {
        let hisob = this.price / this.warranty
        return this.price - hisob
    }
}

const phone = new ElectronicProduct("Iphone", 10000000, 10)
console.log(phone.getWarrantyPrice())

// 3-masala
class Account {
    constructor(owner, balance) {
        this.owner = owner
        this.balance = balance
    }
}

class SavingAccount extends Account {
    interestRate = 0.1

    get getFoiz() {
        let result = this.balance * this.interestRate
        return this.balance - result
    }
}

const acc1 = new SavingAccount("Xamzayev Yashnarbek", 10000000)
console.log(acc1.getFoiz)

// 4-masala
class Person {
    constructor(name) {
        this.name = name
    }
}

class Teacher extends Person {
    constructor(name, subject, experience) {
        super(name)
        this.subject = subject
        this.experience = experience
    }

    getInfo() {
        if (this.experience >= 5) {
            return "Senior developer"
        } else if (this.experience >= 3) {
            return "Middle developer"
        } else {
            return "Junior developer"
        }
    }
}

const teacher1 = new Teacher("Yashnarbek", "Software developer", 10)
console.log(teacher1.getInfo())

// 5-masala
class Device {
    constructor(brand, model) {
        this.brand = brand
        this.model = model
    }
}

class Laptop extends Device {
    constructor(brand, model, ram) {
        super(brand, model)
        this.ram = ram
    }

    getInfo() {
        if (this.ram >= 16) {
            return "This strong laptop"
        } else if (this.ram >= 8) {
            return "This good laptop"
        } else {
            return "This weak laptop"
        }
    }
}

const laptop1 = new Laptop("HP", "fx00-1212", 8)
console.log(laptop1.getInfo())

// 6-masala
class User {
    constructor(name) {
        this.name = name
    }
}

class Customer extends User {
    constructor(name, ordersCount) {
        super(name)
        this.ordersCount = ordersCount
    }

    checkVIP() {
        return this.ordersCount > 20 ? "VIP Customer" : "Customer"
    }
}

const customer1 = new Customer("Ali", 25)
console.log(customer1.checkVIP())

// 7-masala
class Book {
    constructor(title, author) {
        this.title = title
        this.author = author
    }
}

class EBook extends Book {
    constructor(title, author, fileSize) {
        super(title, author)
        this.fileSize = fileSize
    }

    info() {
        return `${this.title} ${this.author} ${this.fileSize}MB`
    }
}

const book1 = new EBook("Python", "Yashnar", 20)
console.log(book1.info())

// 8-masala
class Course {
    constructor(name) {
        this.name = name
    }
}

class ProgrammingCourse extends Course {
    constructor(name, language, studentsCount) {
        super(name)
        this.language = language
        this.studentsCount = studentsCount
    }

    popularity() {
        return this.studentsCount > 100 ? "Mashhur kurs" : "Oddiy kurs"
    }
}

const course1 = new ProgrammingCourse("Backend", "Python", 150)
console.log(course1.popularity())

// 9-masala
class Payment {
    constructor(amount) {
        this.amount = amount
    }

    info() {
        return `To'lov: ${this.amount}`
    }
}

class CardPayment extends Payment {
    constructor(amount, cardNumber) {
        super(amount)
        this.cardNumber = cardNumber
    }

    info() {
        return `${super.info()} Karta: ${this.cardNumber}`
    }
}

class UzCardPayment extends CardPayment {
    info() {
        return `${super.info()} UzCard`
    }
}

const pay1 = new UzCardPayment(50000, "8600123412341234")
console.log(pay1.info())

// 10-masala
class Account2 {
    constructor(balance) {
        this.balance = balance
    }

    info() {
        return `Balans: ${this.balance}`
    }
}

class DepositAccount extends Account2 {
    constructor(balance, percent) {
        super(balance)
        this.percent = percent
    }

    info() {
        return `${super.info()} Foiz: ${this.percent}%`
    }
}

class PremiumDepositAccount extends DepositAccount {
    constructor(balance, percent, bonus) {
        super(balance, percent)
        this.bonus = bonus
    }

    info() {
        return `${super.info()} Bonus: ${this.bonus}`
    }
}

const dep1 = new PremiumDepositAccount(1000000, 20, 50000)
console.log(dep1.info())

// 11-masala
class Character {
    constructor(name) {
        this.name = name
    }
}

class Warrior extends Character {
    constructor(name, attackPower) {
        super(name)
        this.attackPower = attackPower
    }

    damage() {
        return this.attackPower * 2
    }
}

class Mage extends Character {
    constructor(name, mana, spellPower) {
        super(name)
        this.mana = mana
        this.spellPower = spellPower
    }

    spellDamage() {
        return this.mana * this.spellPower
    }
}

const war1 = new Warrior("Garen", 50)
console.log(war1.damage())

const mage1 = new Mage("Lux", 20, 15)
console.log(mage1.spellDamage())

// 12-masala
class Vehicle {
    constructor(name) {
        this.name = name
    }
}

class Taxi extends Vehicle {
    constructor(name, pricePerKm) {
        super(name)
        this.pricePerKm = pricePerKm
    }

    calculatePrice(distance) {
        return distance * this.pricePerKm
    }
}

const taxi1 = new Taxi("Yandex", 3000)
console.log(taxi1.calculatePrice(10))

// 13-masala
class Product2 {
    constructor(name) {
        this.name = name
    }
}

class Food extends Product2 {
    constructor(name, expirationDays) {
        super(name)
        this.expirationDays = expirationDays
    }

    checkExpiration() {
        return this.expirationDays > 0 ? "Yaroqli" : "Yaroqsiz"
    }
}

const food1 = new Food("Non", 3)
console.log(food1.checkExpiration())

// 14-masala
class Person2 {
    constructor(name) {
        this.name = name
    }

    info() {
        return this.name
    }
}

class Student extends Person2 {
    constructor(name, faculty) {
        super(name)
        this.faculty = faculty
    }

    info() {
        return `${super.info()} ${this.faculty}`
    }
}

class GraduateStudent extends Student {
    constructor(name, faculty, thesis) {
        super(name, faculty)
        this.thesis = thesis
    }

    info() {
        return `${super.info()} ${this.thesis}`
    }
}

const st1 = new GraduateStudent("Yashnar", "IT", "AI")
console.log(st1.info())

// 15-masala
class Movie {
    constructor(title, duration) {
        this.title = title
        this.duration = duration
    }
}

class Series extends Movie {
    constructor(title, duration, episodes) {
        super(title, duration)
        this.episodes = episodes
    }

    totalDuration() {
        return this.duration * this.episodes
    }
}

const serial1 = new Series("Naruto", 25, 500)
console.log(serial1.totalDuration())

// 16-masala
class Employee {
    constructor(baseSalary) {
        this.baseSalary = baseSalary
    }

    calculateSalary() {
        return this.baseSalary
    }
}

class Developer extends Employee {
    calculateSalary() {
        return this.baseSalary + 1000
    }
}

class Designer extends Employee {
    calculateSalary() {
        return this.baseSalary + 700
    }
}

class Manager extends Employee {
    calculateSalary() {
        return this.baseSalary + 1500
    }
}

console.log(new Developer(5000).calculateSalary())
console.log(new Designer(5000).calculateSalary())
console.log(new Manager(5000).calculateSalary())

// 17-masala
class Vehicle2 {
    constructor(distance) {
        this.distance = distance
    }
}

class Car extends Vehicle2 {
    fuel() {
        return this.distance * 0.08
    }
}

class Bus extends Vehicle2 {
    fuel() {
        return this.distance * 0.2
    }
}

class Truck extends Vehicle2 {
    fuel() {
        return this.distance * 0.35
    }
}

console.log(new Car(100).fuel())
console.log(new Bus(100).fuel())
console.log(new Truck(100).fuel())

// 18-masala
class Person3 {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

class Doctor extends Person3 {
    constructor(name, age, specialization) {
        super(name, age)
        this.specialization = specialization
    }
}

class Patient extends Person3 {
    constructor(name, age, disease) {
        super(name, age)
        this.disease = disease
    }
}

const doctor1 = new Doctor("Akmal", 40, "Kardiolog")
const patient1 = new Patient("Ali", 25, "Gripp")

console.log(doctor1)
console.log(patient1)