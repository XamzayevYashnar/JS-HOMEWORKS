class EmailValidator {
    static isValid(email) {
        return email.includes('@') && email.includes('.');
    }
}

console.log(EmailValidator.isValid("test@mail.com"));
console.log(EmailValidator.isValid("noto'g'ri-email"));