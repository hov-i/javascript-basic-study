// 전역 실행 컨텍스트 (Global Execution Context)
// 실행 컨텍스트는 변수 환경, 렉시컬 환경으로 구분된다.

// var, let, const 변수의 초기화 차이점

// 실행 컨텍스트의 1번째 요소 - 변수 환경
// 변수 환경 (variable environment)
// var, 선언식 함수
// 호이스팅이 이뤄진다.

// var a = undefined;
// 코드 실행 시 var a 변수는 최상단으로 호이스팅되서 undefined로 초기화 된다.

// var a = undefined;
// var b = undefined;
// function c() {};
console.log(a);
var a = 1;

console.log("b", b);
var b = function () {}; // 익명함수, 표현식 함수
console.log("c", c);
c();
// 선언식 함수, 초기화 단계가 없이 함수 자체가 최상단으로 호이스팅 된다.
function c() {}

// 실행 컨텍스트의 2번째 요소 - 렉시컬 환경
// 렉시컬 환경(lexcial environment)
// let, const에 할당된 변수와 함수의 환경을 저장한다. (es6 이후)
// 호이스팅이 이루어지지 않는다. (TDZ, Temporal Dead Zone)

//ReferenceError: Cannot access 'd' before initialization
// console.log("d", d); d 변수가 먼저 초기화 되지 않는 상태에서는 참조할 수 없다.
// TDZ
let d; // 값을 할당하지 않아도 기본적으로 undefined로 초기화 한다.
// let d = 1;
console.log("d", d);

// const e; // 반드시 초기값 할당이 필요하다.
// console.log("e", e); // e 변수가 먼저 초기화 되지 않는 상태에서는 참조할 수 없다.
// TDZ
const e = 2;
console.log("e", e);

// 실행 컨텍스트의 3번째 요소 - this의 바인딩
