/**
 * 함수 실행 컨텍스트
 * 변수 환경, 렉시컬 환경, this의 바인딩과 **scope chain**으로 구성된다.
 */

/**
 * 함수 스코프, 블록 스코프
 */

// var 변수를 사용하는 경우, 함수 스코프에 영향을 받는다.
// let, const를 사용하는 경우 블록 스코프에 영향을 받는다.

/**
 * 함수 스코프
 * 변수 환경 중에 var 변수는 함수 스코프에서 동작
 * 변수의 참조가 함수의 범위 바깥까지는 벗어나지 못한다.
 * 다만, 함수 내부에서는 계속 참조가 가능하다.
 */
function varScope() {
  if (true) {
    var a = 1;
    function b() {}
  }
  console.log(a);
  console.log(b);
}

varScope();

/**
 * 블록 스코프
 * 선언식 함수와 렉시컬 환경에서의 동작
 * {} 이 형태의 블록을 넘어가서는 참조를 할 수 없다.
 * 선언식 함수의 호이스팅은 블록스코프 범위에서만 동작된다.
 */

function blockScope() {
  //console.log(a);
  if (true) {
    let a = 1;
    console.log("a", a);
  }
}

blockScope();

/**
 * 스코프 체인
 * 현재의 스코프 범위에서 부모의 스코프 범위를 가르키는 영역
 */

function a() {
  const a = 10;
  // a 변수 발견, c 함수에서 console을 반환한다.
  function b() {
    // a 변수를 찾기 위해 b 스코프 탐색, 아직 a 변수는 없음
    // b의 상위 스코프인 a 스코프를 탐색한다.
    // b scope -> a scope
    function c() {
      console.log("a", a);
      // c 함수내에 a라는 변수는 없다.
      // scope chain에 의해 상위 스코프를 탐색한다.
      // c scope -> b scope
    }
    c();
  }
  b();
}
a();

// this 바인딩
