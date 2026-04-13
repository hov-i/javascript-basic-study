const text = "The quick brown fox jumps over the lazy dog.";

/* 문자 접근 */
// .at(index)
// 인덱스 위치의 문자 반환, 음수 인덱스 지원
console.log(text.at(-1));
console.log(text.at(0));

// charAt(index)
// 인덱스 위치의 문자 반환(음수 미지원)
console.log(text.charAt(0));
console.log(text.charAt(-1)); // 빈 문자열 반환

// charCodeAt(index)
// 인덱스 위치 문자의 UTF-16 코드 반환
console.log(text.charCodeAt(0));

// codePointAt(index)
// 해당 위치의 유니코드 코드 포인트 반환
// 이모지, 한글 등 2바이트 이상의 문자를 정확히 반환
console.log(text.codePointAt(0));
console.log("😀".codePointAt(0));

/* 검색/탐색 */

// indexOf(str)
// 처음 발견된 인덱스 반환, 없으면 -1
console.log(text.indexOf("o")); // 31 (첫 번째 'the' 위치)
console.log(text.indexOf("o", 5)); // 12 (5번째 인덱스 이후의 'o' 위치)

// lastIndexOf(str)
// 마지막으로 발견된 인덱스 반환
console.log(text.lastIndexOf("o"));
console.log(text.lastIndexOf("x"));

// includes(str)
// 문자열 포함 여부 bool 타입 반환
console.log(text.includes("o")); // true
console.log(text.includes("test")); //false

// startsWith(str)
// 해당 문자열로 시작하는지 여부를 bool값을 반환
console.log(text.startsWith("o")); //false;
console.log(text.startsWith("The")); // true;
console.log(text.startsWith("quick", 4));

// endsWith(str)
// 해당 문자열로 끝나는지 여부를 bool값을 반환
console.log(text.endsWith("dog.")); // true;
console.log(text.endsWith("lazy")); // false;
console.log(text.endsWith("The", 3)); // true;

// search(regexp)
// 정규식으로 검색하고 매칭 인덱스를 반환한다.
console.log(text.search(/The/)); // 0
console.log(text.search(/quick/)); // 4

/* 추출/분리 */
// slice(start, end)
// start가 없으면 0부터 시작
// 음수 인덱스를 지원한다.
console.log(text.slice(0, 3)); // The
console.log(text.slice(3)); //The

// substring(start, end)
// 두 인덱스 사이의 문자열 반환
// 음수 인덱스를 지원하지 않는다.
console.log(text.substring);

// split(sep, limit)
// 구분자 기준으로 분리하여 배열을 반환한다.
console.log(text.split(" "));
console.log(text.split(" ", 2));

/* 변환 */

// toUpperCase()
// 모든 문자를 대문자로 변환
console.log(text.toUpperCase());

// toLowerCase()
// 모든 문자를 소문자로 변환
console.log(text.toLowerCase());

// replace(a, b)
// 첫번째 항목을 두번째 항목으로 변경
// 첫번째 항목에 정규식 입력 가능
// 첫번째 항목만 변경
console.log(text.replace("o", "a"));

// replaceAll(a, b)
// 모든 일치 항목을 치환
console.log(text.replaceAll("o", "b"));

// normalize(form)
// 같아 보이는 문자가 메모리에서 다르게 저장 될 수 있음,
// 완성된 하나의 문자 저장하냐(1개의 코드 포인트) 따로따로 저장하냐 (n개의 코드 포인트)\
// 눈으로 보면 같은 문자이나 컴퓨터 입장에서는 다른 문자임 a !== a
// NFC : 완성형으로 합치기, 조합형을 완성형으로 합침 웹/DB에서 많이 쓰임
// NFD : 조합형으로 분해하기, 완성형을 기본문자 + 결합 기호로 분해함, 문자 처리, 검색에 용이
console.log("\u00e9".normalize("NFD"));
console.log("\u00e9".normalize("NFC"));

// toWellFormed()
// 깨진 유니코드를 올바른 유니코드로 반환
console.log("\ud3434".toWellFormed());

/* 연결/반복/패딩 */
// concat(...strs)
// 두개 이상의 문자열을 결합 (+ 연산자 권장)
console.log(text.concat("", "test"));
console.log(text.concat("test", "test"));

// repeat(count)
// 문자열을 count만큼 반복
console.log(text.repeat(4));

// padStart(len, str)
// text길이 - len만큼 앞쪽을 str로 채움
console.log(text.padStart(3, "0"));
console.log("hello".padStart(3, "x"));

// padEnd(len, str)
// text길이 - len만큼 뒷쪽 문자열을 str로 채움
console.log(text.padEnd(30, "0"));

/* 공백/정규식/기타 */

//trim()
// 공백 제거
console.log(text.trim());

// trimStart()
// 앞쪽 공백 제거
console.log(text.trimStart());

// trimEnd()
// 뒤쪽 공백 제거
console.log(text.trimEnd());

// match(regexp)
// 정규식 매칭 결과 배열 반환
console.log("test123".match(/\d+/));
console.log("test123".match("123"));

// matchAll(regexp)
// 모든 정규식 매칭 이터레이터 반환(g플래그 필수)
console.log("test123".matchAll(/\d+/g));

//localCompare(str)
// 로케일 기준 비교, 음수/0/양수 반환
console.log("a".localeCompare("b"));
console.log("b".localeCompare("b"));
console.log("a".localeCompare("a"));

//isWellFormed()
// 유니코드 형식이 맞는지 반환
console.log(text.isWellFormed());
console.log("\ud999".isWellFormed());

// valueOf()
//문자열 객체의 원시값 반환
// 주로 숫자 연산에 사용
console.log(text.valueOf());

// toString()
// 문자열 객체의 원시값 반환
// 문자열 변환 상황에서 호출
console.log(text.toString());

// at(index)
// 문자열 접근
console.log(text.at(1));
console.log(text.at(-1));
console.log(text.charAt(1));
console.log(text.charCodeAt(1));
console.log(text.codePointAt());

// 검색/탐색
console.log(text.indexOf("a"));
console.log(text.indexOf("a", 3));
console.log(text.lastIndexOf("a"));
console.log(text.includes("a"));
console.log(text.startsWith("a", 4));
console.log(text.endsWith("a"));
console.log(text.search(/\d+/));

// 추출/분리
console.log(text.slice(-1, 4));
console.log(text.substring(0, 4));
console.log(text.split("", 3));

// 변환
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.replace("a", "b"));
console.log(text.replaceAll("a", "b"));
console.log(text.normalize("NFC"));
console.log(text.normalize("NFD"));
console.log(text.toWellFormed());

// 연결/반복/패딩
console.log(text.concat("", "text"));
console.log(text.concat("", "abc"));
console.log(text.repeat(3));
console.log(text.padStart(40, "a"));
console.log(text.padEnd(50, "a"));

// 공백/정규식/기타
console.log(text.trim());
console.log(text.trimStart());
console.log(text.trimEnd());
console.log(text.match(/\d+/));
console.log(text.matchAll(/\d+/g));
console.log(text.localeCompare("a"));
console.log(text.isWellFormed());
console.log(text.valueOf());
console.log(text.toString());
