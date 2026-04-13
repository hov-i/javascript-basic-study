/**
 * class
 * 생성자 함수를 문법적으로 조금 더 깔끔하게 편리하게 사용하기 위한 방법
 */

class Animal {
  constructor(type, legs, gender) {
    this.type = type;
    this.legs = legs;
    this.gender = gender;
  }
}

class Dog extends Animal {
  constructor(name) {
    this.name = name;
  }
}

class Person extends Animal {
  // 초기 값 필요할 때 여기서 넣으면 됨
  name;
  constructor(name, age, type, legs, gender) {
    // 상속을 할 때는 this 선언 이전에 super 클래스 할당이 반드시 필요하다.
    super(type, legs, gender);

    this.name = name;
    this.age = age;
    // 이 부분이 원래 사용하던 생성자 함수의 영역
    // this.setName = function () {};
    // 이렇게 하면 클래스 내부에서 들어감, 주의
  }
  // 프로토타입 메서드 할당 영역
  getName() {
    return this.name;
  }
}
// 함수를 작성하면 자동으로 prototype으로 빠짐

const person = new Person("hongbi", 20, "human", 2, "male");
console.log(person);
console.log("Person", person.getName());
