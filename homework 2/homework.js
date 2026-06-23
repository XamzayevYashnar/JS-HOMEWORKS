function formatPhone(phone) {
    return `${phone.slice(0, 4)} (${phone.slice(4, 6)}) ${phone.slice(6, 9)}-${phone.slice(9, 11)}-${phone.slice(11)}`;
}

function longestWord(text) {
    let words = text.split(' ');
    let longest = '';

    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }

    return longest;
}

function checkPassword(password) {
    let hasUpper = /[A-Z]/.test(password);
    let hasNumber = /\d/.test(password);

    return password.length >= 8 && hasUpper && hasNumber;
}

function isAscending(number) {
    let str = String(number);

    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] > str[i + 1]) {
            return false;
        }
    }

    return true;
}

function countSpaces(text) {
    let count = 0;

    for (let char of text) {
        if (char === ' ') {
            count++;
        }
    }

    return count;
}

function swapFirstLast(number) {
    let str = String(number);

    if (str.length < 2) {
        return number;
    }

    return str[str.length - 1] + str.slice(1, -1) + str[0];
}

function generatePromoCode() {
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';

    for (let i = 0; i < 8; i++) {
        code += chars[Math.floor(Math.random() * chars.length)];
    }

    return code;
}

function allDigitsUnique(number) {
    let str = String(number);

    return new Set(str).size === str.length;
}

function capitalizeWords(text) {
    return text
        .split(' ')
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(' ');
}

function isPerfectSquare(number) {
    return Number.isInteger(Math.sqrt(number));
}

function getEmailLogin(email) {
    return email.split('@')[0];
}

function sumNumbersInText(text) {
    let numbers = text.match(/\d+/g);

    if (!numbers) {
        return 0;
    }

    let sum = 0;

    for (let num of numbers) {
        sum += Number(num);
    }

    return sum;
}

function generateOTP() {
    return Math.floor(1000 + Math.random() * 9000);
}

function multiplyDigits(number) {
    let str = String(number);
    let result = 1;

    for (let digit of str) {
        result *= Number(digit);
    }

    return result;
}

function isPalindrome(text) {
    let str = text.toLowerCase().replace(/\s/g, '');

    return str === str.split('').reverse().join('');
}

function createLogin(fullName) {
    let arr = fullName.toLowerCase().split(' ');

    return `${arr[0][0]}.${arr[1]}`;
}

function mostRepeatedChar(text) {
    let obj = {};
    let max = 0;
    let result = '';

    for (let char of text) {
        obj[char] = (obj[char] || 0) + 1;

        if (obj[char] > max) {
            max = obj[char];
            result = char;
        }
    }

    return result;
}

function generateStrongPassword() {
    let chars =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    let password = '';

    for (let i = 0; i < 12; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }

    return password;
}

function sumEvenDigits(number) {
    let str = String(number);
    let sum = 0;

    for (let digit of str) {
        if (Number(digit) % 2 === 0) {
            sum += Number(digit);
        }
    }

    return sum;
}

function roundToNearestTen(number) {
    return Math.round(number / 10) * 10;
}

function getStudentAverage() {
    const student = {
        name: 'Ali',
        scores: [78, 90, 85, 95],

        getAverage() {
            let sum = 0;

            for (let score of this.scores) {
                sum += score;
            }

            return Number((sum / this.scores.length).toFixed(2));
        }
    };

    return student.getAverage();
}

function canWithdraw(amount) {
    const account = {
        balance: 500000,

        canWithdraw(amount) {
            return this.balance >= amount;
        }
    };

    return account.canWithdraw(amount);
}

function checkProduct(count) {
    const product = {
        name: 'Mouse',
        quantity: 17,

        isAvailable(count) {
            return this.quantity >= count;
        }
    };

    return product.isAvailable(count);
}

function getTeamPoints() {
    const team = {
        wins: 10,
        draws: 4,
        losses: 2,

        getPoints() {
            return this.wins * 3 + this.draws;
        }
    };

    return team.getPoints();
}

function getCourseProgress() {
    const course = {
        lessons: 45,
        completed: 18,

        getProgress() {
            return ((this.completed / this.lessons) * 100).toFixed(2);
        }
    };

    return course.getProgress();
}

function getMovieRating() {
    const movie = {
        ratings: [5, 4, 3, 5, 5, 4],

        getRating() {
            let sum = 0;

            for (let rating of this.ratings) {
                sum += rating;
            }

            return (sum / this.ratings.length).toFixed(2);
        }
    };

    return movie.getRating();
}

function phoneNeedsCharging() {
    const phone = {
        battery: 23,

        needsCharging() {
            return this.battery < 20;
        }
    };

    return phone.needsCharging();
}

function checkUserPassword() {
    const user = {
        password: '12345678',

        isStrongPassword() {
            return this.password.length >= 8;
        }
    };

    return user.isStrongPassword();
}

function getStoreProfit() {
    const store = {
        income: 1200000,
        expense: 850000,

        getProfit() {
            return this.income - this.expense;
        }
    };

    return store.getProfit();
}

function getExamPercentage() {
    const exam = {
        correct: 37,
        total: 50,

        getPercentage() {
            return ((this.correct / this.total) * 100).toFixed(2);
        }
    };

    return exam.getPercentage();
}