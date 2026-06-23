class LibraryBook {
    #isBorrowed = false;

    static totalBooks = 0;

    constructor(title) {
        this.title = title;
        LibraryBook.totalBooks++;
    }

    borrow() {
        if (this.#isBorrowed) {
            return `${this.title} allaqachon olingan`;
        }
        this.#isBorrowed = true;
        return `${this.title} olindi`;
    }

    returnBook() {
        if (!this.#isBorrowed) {
            return `${this.title} hali olinmagan edi`;
        }
        this.#isBorrowed = false;
        return `${this.title} qaytarildi`;
    }
}

const book = new LibraryBook("Otkan kunlar");
console.log(book.borrow());
console.log(book.returnBook());
console.log(LibraryBook.totalBooks);