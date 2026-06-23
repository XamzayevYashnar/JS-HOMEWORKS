class Cart {
    #items = [];

    static currency = 'UZS';

    addItem(name, price) {
        this.#items.push({ name, price });
        return `${name} savatga qo'shildi`;
    }

    removeItem(name) {
        this.#items = this.#items.filter(item => item.name !== name);
        return `${name} savatdan olib tashlandi`;
    }

    getTotalPrice() {
        const total = this.#items.reduce((sum, item) => sum + item.price, 0);
        return `${total} ${Cart.currency}`;
    }
}

const cart = new Cart();
console.log(cart.addItem("Telefon", 5000000));
console.log(cart.addItem("Quloqchin", 200000));
console.log(cart.getTotalPrice());