function messageMaker(startMessage) {
    return function(makeMessage) {
        return startMessage + makeMessage;
    };
}

// 사용 예시
const result = messageMaker("안녕, ");

const Message1 = result("반가워!");
const Message2 = result("내 이름은 곽동윤이야");

console.log(Message1);
console.log(Message2);
