const a = { x: 1 };
const b = { y: 2, z: 3 };
const c = [1, 2, 3];

/*복사/병합*/
//Object.assign(target, ...sources)
Object.assign(a, b);

/* 생성/프로토타입 */
const animal = {
  eat() {
    return "냠냠";
  },
};
const dog = Object.create(animal);
console.log(dog.eat());

Object.getPrototypeOf(a);
Object.getPrototypeOf(c);
Object.setPrototypeOf(a, Array.prototype);

/*키/값 추출*/
Object.keys(a); // [x]
Object.values(a); //[1]
const enties = Object.entries(b); // [[y,2], [z,3]]
Object.fromEntries(enties); // {y:2, z:3}

/** 속성 정의/서술자 */
const obj = Object.defineProperty({}, "id", {
  value: 32,
  writable: false, //수정불가
  enumeralbe: false, //열거불가
  configureable: false, // 재정의불가
});

// proxy 핸들러를 많이 씀

const obj2 = Object.defineProperties(
  {},
  { x: { value: 32, writable: true }, y: { value: 42, writable: false } },
);

const obj3 = console.log(Object.getOwnPropertyDescriptor(obj2, "x"));

console.log(Object.getOwnPropertyDescriptors(obj2));
console.log(Object.getOwnPropertyNames(obj2)); // 열거불가속성포함
const id = Symbol("test");
const obj4 = { [id]: 123, name: "철수" };
console.log(Object.getOwnPropertySymbols(obj4));
console.log(Object.keys(obj4));

/** 동결/봉인/확장 */
const test1 = { a: 1 };
const test2 = { b: 2 };
const test3 = { c: 3 };
Object.freeze(test1); //동결, 접근만 가능
console.log(test1.a);
console.log(Object.isFrozen(test1));
Object.seal(test2); // 수정만 가능
console.log(Object.isSealed(test2));
console.log(Object.preventExtensions(test3)); // 새속성 추가만 불가
console.log(Object.isExtensible(test3));

/** 비교/그룹 */
console.log(Object.is(1, 1));
console.log(Object.is(NaN, NaN));
console.log(Object.is(+0, -0));
const group = [1, 2, 3, 4, 5];
console.log(Object.groupBy(group, (n) => (n % 2 === 0 ? "짝수" : "홀수")));
console.log(Object.hasOwn(test1, "a"));
console.log(Object.hasOwn(test1, null));
console.log(Object.hasOwnProperty(test1, toString()));
console.log(Object.hasOwnProperty(test1, null));

console.log(Object.isPrototypeOf());
