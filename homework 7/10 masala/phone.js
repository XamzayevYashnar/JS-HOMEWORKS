class Phone {
    #battery = 100;

    static maxBattery = 100;

    charge(amount) {
        this.#battery = Math.min(this.#battery + amount, Phone.maxBattery);
        return `Batareya: ${this.#battery}%`;
    }

    use(amount) {
        this.#battery = Math.max(this.#battery - amount, 0);
        return `Batareya: ${this.#battery}%`;
    }
}

const phone = new Phone();
console.log(phone.use(30));
console.log(phone.charge(50));