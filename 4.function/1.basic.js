function add(a, b){
    return a + b;
}

const result  = add(1,2);
console.log(result);

// 사용예제 2
function fullName (firstName, lastName){
    return `${firstName} ${lastName}`;
}
let lastName1 = '유';
let firstName1 = '현호';
console.log(fullName(lastName1, firstName1));

let lastName2 = '마';
let firstName2 = '호열';
console.log(fullName(lastName2, firstName2));