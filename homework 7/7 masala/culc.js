class Calculator {
    static count = 0;

    add(a, b) {
        Calculator.count++;
        return a + b;
    }

    subtract(a, b) {
        Calculator.count++;
        return a - b;
    }

    multiply(a, b) {
        Calculator.count++;
        return a * b;
    }

    divide(a, b) {
        Calculator.count++;
        if (b === 0) {
            return "Nolga bo'lish mumkin emas";
        }
        return a / b;
    }

    static getStats() {
        return `Jami amallar soni: ${Calculator.count}`;
    }
}

const calc = new Calculator();
console.log(calc.add(5, 3));
console.log(calc.multiply(4, 2));
console.log(Calculator.getStats());