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

const rect = new Rectangle(5, 10);

console.log("Area:", rect.area());
console.log("Perimeter:", rect.perimeter());
