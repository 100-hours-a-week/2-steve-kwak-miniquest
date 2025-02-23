const message = 'Hello, JavaScript!';

const showMessage = () => {
    console.log(message); // A
    let message = 'Hello, ES6!';
    console.log(message); // B
};
showMessage();
/* 예측 : error가 뜰거 같음
   실행결과 : ReferenceError가 발생. message가 초기화되기 전에 접근할려고 시도했기 떄문.
* */