class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    // 면적 계산 메서드
    area() {
        return this.width * this.height;
    }

    // 둘레 계산 메서드
    perimeter() {
        return 2 * (this.width + this.height);
    }
}
class Square extends Rectangle{
    constructor(width,height) {
        super(width,height);
    }
    isSquare() {
        return this.width === this.height; // 가로와 세로가 동일한지 확인
    }
}

const square = new Square(5,10);
console.log("Area of square:", square.area());
console.log("Perimeter of square:", square.perimeter());
console.log("Is this a square?", square.isSquare());