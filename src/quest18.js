/*if (true) {
    let isRaining = true;
}

console.log(isRaining);  -> 오류 발생
let으로 선언된 변수는 블록 스코프를 가지므로 외부에서 사용하려 하면 오류 발생
 */

let isRaining;

if (true) {
    isRaining = true;
}

console.log(isRaining);

/*
 let이나 const를 블록 외부에서 선언하여 사용 가능
 */