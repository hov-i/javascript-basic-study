const nums = [1, 2, 3, 4, 5];

// at(index)
// 배열의 순번에 접근 ** 음수로 접근 가능 **
// 첫번째
console.log("at", nums.at(0));

// 마지막 요소
console.log("at", nums.at(-1));

// concat(...array)
// 배열에 배열을 이어서 붙일 떄 사용
const nums2 = nums.concat([6], 7, 8);
// const nums2 = [...nums, 6, 7, 8]
console.log("concat", nums.concat(nums2));

// 이터레이터 함수랑 이터레이터 객체는 다름 심볼 이터레이터 함수는 배열의 요소를 순회할 수 있는 이터레이터 객체를 반환하는 함수
// 제네레이터 함수는 동기적으로 이터레이터 객체를 반환하는 함수
// 제네레이터 함수는 aync, await 동기 함수는 비동기적으로 이터레이터 객체를 반환하는 함수
// 인스턴스 메서드와 정적 메서드의 차이

const iterator = nums.entries();
console.log(nums);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);

// 조건을 활용해서 boolean
// every(callback)
console.log(
  "every",
  nums.every((num) => num > 0),
); // true
// some(callback)
console.log(
  "some",
  nums.some((num) => num > 4),
); // true

// Array.map()
// 배열의 모든 요소를 map을 통해 전달한 콜백의 결과값으로 치환하기 위한 함수
const mapArr = nums.map((num) => {
  return num * 2;
});

// Array.flat(depth)
// 중첩된 배열 요소를 입력 받은 매개변수 뎁스 수치가 따라 평탄한 배열 구조로 만들기 위한 함수
const depthArr = [[1, [2, 3]], 4, 5];
console.log("flat", depthArr.flat(2)); // [1, 2, 3, 4, 5]

/** 추가/제거 */
console.log(nums.push(6, 7)); // 끝에 추가
console.log(nums.pop()); // 끝 한자리 제거
console.log(nums.unshift(1, 2)); // 앞에 추가
console.log(nums.shift()); // 앞 한자리 제거
console.log(nums.splice(0, 3, "x", "y")); // 0부터 3까지 제거 해당자리 "x", "y" 대체
console.log(nums.fill("a", 0, 1)); // "a"를 0부터 1까지 채움, start, end없으면 다 채움
console.log(nums);

/** 검색/확인 */
console.log(nums.indexOf("a"));
console.log(nums.lastIndexOf("a", 4));
console.log(nums.includes("a"));
console.log(nums.find((n) => typeof n === "number"));
console.log(nums.findIndex((n) => typeof n === "number"));
console.log(nums.findLast((n) => typeof n === "number"));
console.log(nums.findLastIndex((n) => typeof n === "number"));
console.log(nums.every((n) => typeof n === "number"));
console.log(nums.some((n) => typeof n === "number"));

/** 변환/순회 */
console.log([1, 2, 3].map((n, i) => n * i));
const trueNums = nums.filter((n) => typeof n === "number");
console.log(trueNums.reduce((total, n) => n * 2, 0));
console.log(trueNums.reduceRight((total, n) => n * 2, 0));
console.log(trueNums.forEach((v, i) => console.log(v + i)));
console.log([[1, 2], 3].flat(2));

/** 정렬/역순 */
console.log(trueNums.sort((a, b) => a - b)); // 변경
console.log(trueNums.toSorted((a, b) => a - b)); // 새 배열 반환
console.log(trueNums.reverse()); //역순으로 변경
console.log(trueNums.toReversed()); // 새 배열 반환

/** 추출/병합/복사 */
console.log(trueNums.copyWithin(0, 2, 3));
console.log(trueNums.with(0, "1"));
