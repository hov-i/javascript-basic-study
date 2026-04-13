// console.log("ready");

// const dom = document.querySelector("#app");

// console.log(dom);

// document.addEventListener("DOMContentLoaded", function () {
//   const dom = document.querySelector("#app");
//   console.log("dom content loaded", dom);
// });

function person() {}
/**
 * void function
 * return이 존재하지 않는 함수
 * 함수를 실행시키면 무조건 undefined를 반환
 */
console.log("person", person());

/**
 * 앞에 대문자를 넣는 Upper Camel Case 표기법을 사용
 * 대문자를 넣지 않는다고 해도 동작되나 암묵적인 룰로 사용된다.
 */

function Person() {
  // this === {} // 자기 자신인 빈 객체를 암묵적으로 가지고 있다.
  this.name = "hongbi";
}

/**
 * 생성자 함수 호출
 * 반드시 new 키워드를 통해서 호출해야한다.
 *
 * 기본적으로는 자기 자신인 빈 객체를 반환한다.
 */

/**
 * 객체는 생성할 때마다 메모리 영역을 차지한다.
 *
 *
 */
const danbi = new Person();
danbi.name = "danbi";
console.log("Person", danbi);
// Person {}

function Person(name) {
  this.name = name;
  this.getName = function () {
    return name;
  };
  this.setName = function (newName) {
    name = newName;
  };
}

/**
 * 공통적인 로직을 사용하는 함수 영역은 프로토타입 영역으로 배치한다.
 * 프로토타입에서 화살표 함수로 선언하면 this는 기본적으로 Window this이기 때문에 주의가 필요하다.
 */
Person.prototype.getName = function () {
  // prototype 영역에서 this는 생성자 함수 내부 this를 가르킨다.
  // 화살표 함수의 this는 글로벌 영역의 this를 가르킨다.
  console.log(this, "this");
  return this.name;
};
Person.prototype.getName = function (newName) {
  // prototype 영역에서 this는 생성자 함수 내부 this를 가르킨다.
  this.name = newName;
};

// 은닉화
/**
 * 프로토타입으로 getName, setName을 넣으면
 * 상속되서 새로운 참조주소가 생기지 않는다.
 */
