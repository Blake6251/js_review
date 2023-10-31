// 문자열타입
let string = '문자열타입';
string = `안녕!`;
console.log(string);

// 특수문자 출력하는법
string = '"안녕!"';
console.log(string);

string = "'안녕!'";
console.log(string);

string = '안녕!\n현호야!\t\t내 이름은\\';
console.log(string);

// 템플릿 리터럴 (Template literal)
let id = '현호';
let greetings = "'안녕!," + id + "\n즐거운 하루 보내요!";
console.log(greetings);

greetings = `'안녕, ${id}ㅎㅎ
즐거운 하루 보내요!`;
console.log(greetings);