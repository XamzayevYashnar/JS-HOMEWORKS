class Account {
    #password = 'yashnar3445';

    checkPassword(password){
        if (this.#password === password){
            console.log('Parol mos tushdi!', password)
        } else {
            console.log('Parol mos tushmadi!', password)
        }
    }

    changePassword(old_password, password){
        if ( this.#password === old_password ){
            this.#password = password;
            console.log('Parol almashdi!', this.#password)
        } else {
            console.log('Parolni notugri terdingiz!', this.old_password)
        }
    }
}

const acc1 = new Account()
acc1.checkPassword('yashnar3445')
acc1.changePassword('yashnar3445', 'yashnar1234')