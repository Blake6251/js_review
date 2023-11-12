// while(조건) {}
// 조건이 false가 될때까지 {} 코드를 반복실행
let num = 5;
while(num>=0){
    console.log(num);
    num--;
}

let isActive = true;
let i = 0;
while(isActive){
    console.log('아직살아있다!');
    if(i===1000){
        console.log('1000번 완료');
        break;
    }
    i++;
}

do{
    console.log('아직 살아있따!');
} while (isActive){

}