function createCounter() {
    let count = 0;
    // 메서드들
    return {
        increment: function() {
            count++; // 1씩 증가
        },
        decrement: function() {
            count--; // 1씩 감소
        },
        getCount: function() {
            return count; // 현재 count 값을 반환
        }
    };
}

// 사용 예시
const counter = createCounter();

counter.increment();
counter.increment();
console.log(counter.getCount());

counter.decrement();
console.log(counter.getCount());
