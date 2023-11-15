// 함수내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 좋지X
// 상태변경이 필요한 경우에는, 새로운 상태를(오브젝트, 값) 만들어서 반환해야함
// 원시값 - 값에 의한 복사
// 객체값 - 참조에의한 복사(메모리주소)

function display(num) {
    num = 5; // ❌
    console.log(num);
}
const value = 4;
display(value);
console.log(value);

function dispalyObj(obj){
    obj.name = 'Bob';
    console.log(obj);
}
const blake = {name: 'Blake'};
dispalyObj(blake);
console.log(blake);

function changeName(obj) { 
    return {...obj, name: 'bbb'};
}