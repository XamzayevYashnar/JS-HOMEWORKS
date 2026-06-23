class Course {
    #students = [];

    static totalCourses = 0;

    constructor(title) {
        this.title = title;
        Course.totalCourses++;
    }

    enroll(studentName) {
        this.#students.push(studentName);
        return `${studentName} "${this.title}" kursiga yozildi`;
    }

    getStudentsCount() {
        return this.#students.length;
    }
}

const course = new Course("JavaScript Basics");
console.log(course.enroll("Olim"));
console.log(course.enroll("Dilnoza"));
console.log(course.getStudentsCount());