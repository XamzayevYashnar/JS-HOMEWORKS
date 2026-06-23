// 1 bank hisobi

class BancAccount {
    #balance = 0;

    static BankName = 'UzBank'

    deposit(amount){
        this.#balance += amount
        return `Balans depositga quyildi, ${amount}$, Qoldiq: ${this.#balance}`
    }

    withdraw(amount){
        this.#balance -= amount;
        return `Balans minus qilindi, ${amount}$, Qoldiq: ${this.#balance}`
    }

    get getBalance(){
        console.log(this.#balance)
    }
}

const bank = new BancAccount()
console.log(bank.deposit(4565))
console.log(bank.withdraw(135))
console.log('Bank Nomi:', BancAccount.BankName)
bank.getBalance