const color = 'blue';

const firstLevel = () => {
    let color = 'red';

    const secondLevel = () => {
        let color = 'green';
        console.log(color); // (1)
    };

    secondLevel();
    console.log(color); // (2)
};

firstLevel();
console.log(color); // (3)
/* 예측 : green, red, blue
   실제결과 : green, red, blue
   이유 : (1) - 가장 가까운 스코프에 있는 green 출력.  secondLevel 함수의 스코프
   (2) - firstLevel 함수의 스코프에 있는 color red 사용. 스코프체인에 따라 secondLevel 함수 내부의 color가 영향 x
   (3) - 글로벌 스코프의 color blue 사용.
* */