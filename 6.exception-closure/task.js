function parseCount(num) {
    const error = new Error("Невалидное значение");
    let parseNum = Number.parseFloat(num);
    if(isNaN(parseNum)) {
        throw error;
    } else {
        return parseNum;
    }
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    }
}

class Triangle {
    constructor(A, B, C) {
        if((A + B) < C || (A + C) < B || (C + B) < A) {
            throw new Error("Треугольник с такими сторонами не существует");;
        }
        this.A = A;
        this.B = B;
        this.C = C;
    }

    get perimetr() {
        return this.A + this.B + this.C;
    }

    get area() {
        let P = this.perimetr / 2;
        let S = Math.sqrt(P * (P - this.A) * (P - this.B) * (P - this.C));
        return Number(S.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        let triangle = new Triangle(a, b, c);
        return triangle;
    } catch (Error) {
        return {
            get area() { return "Ошибка! Треугольник не существует" },
            get perimetr() { return "Ошибка! Треугольник не существует" }
        }
    }

}
