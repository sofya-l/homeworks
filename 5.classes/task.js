class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.type = null;
        this.state = 100;
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set state(newState){
        if(newState < 0) {
            this._state = 0;
        } else if(newState > 100) {
            this._state = 100;
        } else {
            this._state = newState;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if(book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        return this.books.find(book => book[type] == value) || null;
    }

    giveBookByName(bookName) {
        let book = this.findBookBy('name', bookName);
        if(book) {
            let index = this.books.indexOf(book);
            if(index != -1) {
                this.books.splice(index, 1);
            }
        }
        return book;
    }
}


const library = new Library("Библиотека имени Ленина");

library.addBook(
 new DetectiveBook(
   "Артур Конан Дойл",
   "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
   2019,
   1008
 )
);
library.addBook(
 new FantasticBook(
   "Аркадий и Борис Стругацкие",
   "Пикник на обочине",
   1972,
   168
 )
);



class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark(mark, subject) {
        if(mark >= 2 && mark <= 5) {
            if(!this.marks.hasOwnProperty(subject)) {
                this.marks[subject] = [];
            }
            this.marks[subject].push(mark);
        } else {
            return;
        }
    }

    getAverageBySubject(subject) {
        if(!this.marks.hasOwnProperty(subject)) {
            return 0;
        }
        let marksSum = this.marks[subject].reduce((acc, mark) => acc + mark);
        return marksSum / this.marks[subject].length;
    }

    getAverage() {
        let subjects = Object.keys(this.marks);
        let marksSum = 0;
        if(subjects.length === 0) {
            return 0;
        }
        for (let subject of subjects) {
            marksSum += this.getAverageBySubject(subject);
        }
        return marksSum / subjects.length;
    }
}


const student = new Student("Олег Никифоров");
student.addMark(5, "химия");
student.addMark(5, "химия");
student.addMark(5, "физика");
student.addMark(4, "физика");
student.addMark(6, "физика"); // Оценка не добавится, так как больше 5

console.log(student.getAverageBySubject("физика")); // Средний балл по предмету физика 4.5
console.log(student.getAverageBySubject("физика")); // Средний балл по предмету физика 4.5
console.log(student.getAverageBySubject("биология")); // Вернёт 0, так как по такому предмету нет никаких оценок.

console.log(student.getAverage());

