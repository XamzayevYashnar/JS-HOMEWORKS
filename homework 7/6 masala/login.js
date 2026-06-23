class LoginSystem {
    #attempts = 0

    static max_attempts = 3

    getAttepms(){
        if (LoginSystem.max_attempts > 0){
            LoginSystem.max_attempts -= 1
            console.log(this.#attempts)
        } else {
            console.log('Urinishlar qolmadi!')
        }
    }

    resetAttepms(){
        this.#attempts = 0;
            console.log(`Attemps: ${this.#attempts}`)
    }
}

const log = new LoginSystem()
log.getAttepms()
log.getAttepms()
log.getAttepms()
log.getAttepms()

log.resetAttepms()