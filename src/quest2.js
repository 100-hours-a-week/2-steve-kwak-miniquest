class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// 인스턴스 생성
const person1 = new Person("Jane Doe", 25);

// greet 메서드 호출
person1.greet();
