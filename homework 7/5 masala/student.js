class Student {
    #grades = [];

    static maxGrade = 100

    addGrade(score){
        if (typeof score === 'number'){
            this.#grades.push(score);
            return `Bu baho qushildi ${score}`
        }
        else {
            return 'Iltimos matn kiritmang faqat son! (2 dan 5 gacha)'
        }
    }

    getAverage(){
        let number = 0
        for (let el of this.#grades){
            number += el;
        }

        return `Urtacha baho: ${Math.floor(number / this.#grades.length)}`
    }
}

const st = new Student()
console.log(st.addGrade(5))
console.log(st.addGrade(5))
console.log(st.addGrade(3))
console.log(st.getAverage())