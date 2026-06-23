class BankAccount {
    constructor (balance){
        this.balance = balance;
    }

    deposit(amount){
        try{
            if (amount <= 0){
                throw new Error('Iltimos 9 dan kichik pul qushmang!')
            } else {
                this.balance += amount;
                return
            }
        } catch (err){
            console.log(err.message)
        }
    }

    withdraw(amount){
        try{
            if (amount > this.balance){
                throw new Error(`Pul yetarli emas! Balans:${this.balance}!`)
            } else {
                this.balance -= amount;
                return
            }
        } catch (err){
            console.log(err.message)
        }
    }

    getBalance(){
        console.log(this.balance)
    }
}

const acc = new BankAccount(1000);
acc.deposit(-1);
acc.withdraw(1001);
acc.getBalance();