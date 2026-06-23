class Product {

    static products = [];

    static getAllProducts(){
        return Product.products
    }

    constructor (name, price){
        this.name = name;
        this.price = price;
    }
}

const pr = new Product('non', 3000)
const pr1 = new Product('cola', 5000)
console.log(Product.getAllProducts())