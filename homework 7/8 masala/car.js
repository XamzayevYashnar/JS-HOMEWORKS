class Car {
    #speed = 0;

    static maxSpeed = 300;

    constructor(brand) {
        this.brand = brand;
    }

    accelerate(value) {
        this.#speed = Math.min(this.#speed + value, Car.maxSpeed);
        return `${this.brand} tezligi: ${this.#speed} km/h`;
    }

    brake(value) {
        this.#speed = Math.max(this.#speed - value, 0);
        return `${this.brand} tezligi: ${this.#speed} km/h`;
    }

    getSpeed() {
        return this.#speed;
    }
}

const car = new Car("Chevrolet");
console.log(car.accelerate(120));
console.log(car.brake(40));
console.log(car.getSpeed());