class Card {
    #cardNumber;

    constructor(cardNumber) {
        this.#cardNumber = cardNumber;
    }

    getMaskedNumber() {
        const last4 = this.#cardNumber.slice(-4);
        return `**** **** **** ${last4}`;
    }

    static generateId() {
        return `ID-${Math.floor(Math.random() * 1000000)}`;
    }
}

const card = new Card("8600123456789012");
console.log(card.getMaskedNumber());
console.log(Card.generateId());