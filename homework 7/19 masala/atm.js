class ATM {
    #cash = 0;

    static atmCount = 0;

    constructor() {
        ATM.atmCount++;
    }

    deposit(amount) {
        this.#cash += amount;
        return `Hisobga qo'shildi: ${amount}. Qoldiq: ${this.#cash}`;
    }

    withdraw(amount) {
        if (amount > this.#cash) {
            return "Mablag' yetarli emas";
        }
        this.#cash -= amount;
        return `Yechib olindi: ${amount}. Qoldiq: ${this.#cash}`;
    }
}

const atm = new ATM();
console.log(atm.deposit(1000000));
console.log(atm.withdraw(1500000));
console.log(atm.withdraw(500000));