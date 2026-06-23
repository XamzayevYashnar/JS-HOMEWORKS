class Employee {
    #salary;

    static companyName = "Najot Ta'lim";

    constructor(name, salary) {
        this.name = name;
        this.#salary = salary;
    }

    increaseSalary(percent) {
        this.#salary += this.#salary * (percent / 100);
        return `${this.name}ning yangi maoshi: ${this.#salary}`;
    }

    getSalary() {
        return this.#salary;
    }
}

const emp = new Employee("Aziz", 5000000);
console.log(emp.increaseSalary(10));
console.log(Employee.companyName);