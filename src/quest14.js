// 1. let 키워드를 사용한 변수의 호이스팅 확인하기
console.log(messageLet); // 무엇이 출력될까요?
let messageLet = "Hello with let!";

// 2. const 키워드를 사용한 변수의 호이스팅 확인하기
console.log(messageConst); // 무엇이 출력될까요?
const messageConst = "Hello with const!";

// 3. 화살표 함수의 호이스팅 확인하기
console.log(greet()); // 무엇이 출력될까요?
const greet = () => "Hello, Arrow Function!";

/*
셋 다 Referenece Error가 발생합니다.
1. let으로 선언된 변수는 호이스팅되어 메모리에 예약되지만 초기화되지 않은 상태로 존재.
2. const로 선언된 변수는 호이스팅이 발생하지만 초기화전에는 접근 x
3. 화살표 함수는 const로 선언됨으로 호이스팅은 발생하지만 마찬가지로 초기화전에는 사용 x
* */