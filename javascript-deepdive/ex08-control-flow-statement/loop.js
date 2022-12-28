// for
for(let i=1; i<=6; i++){
    for (let j = 1; j <= 6; j++) {
        if(i+j === 6) console.log(`[${i}, ${j}]`)
    }
}

// while

let count = 0;
while(true){
    console.log(count);
    count++;

    if(count===3) break;
}


// do while : 코드 블럭 실행 후 평가
let result = 0;
do{
    console.log(result);
    result++;
} while (result<3);