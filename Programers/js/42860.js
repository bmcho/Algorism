//https://programmers.co.kr/learn/courses/30/lessons/42860
//문제 이상 ㅇㅇㅇ 그냥 나중에 그리드는 많이 나오지 않는다...
//조이스틱
// const name = "JEROEN";
// const name = "JAN";
const name = "ABAAB";

function solution(name) {
    var answer = 0;

    //name을 아스키 코드 배열로 변경
    const asciiArr = name.split('').map(v => v.charCodeAt())
    //A로만 이뤄진 name 이라면 
    if(asciiArr.reduce((a,c) => a+c)/asciiArr.length === 65) return 0;
    
    const moveCalc = (arr, index, move, flag) => {
        if(arr[index] !== 65) return move
        return moveCalc(arr, flag ? index+1 : index-1, move+1, flag);
    }
    let moveDirection = true;
    //true : 오른방향, false : 왼 방향
    //항상 커서는 맨앞 or 맨뒤에만 있다.
    while(asciiArr.length) {
        let char = moveDirection ? asciiArr.shift() : asciiArr.pop();
        //A:65, Z:90
        //위 아래 판단
        if(char !== 65) {
            if((char - 65) < (90 - char + 1)) answer += (char - 65)
            else answer += (90 - char + 1)
        }

        if(!asciiArr.length) break;
        //왼 오 판단
        if(asciiArr[0] !== 65) {
            answer ++;
            continue;
        } else {
            let left = moveCalc(asciiArr, asciiArr.length-1, 1, false);
            let right = moveCalc(asciiArr, asciiArr.length-1, 1, false);

            moveDirection = left < right ? false : true;
            answer += moveDirection ? right : left;
            console.log(answer);
            moveDirection ? asciiArr.splice(0,right) : asciiArr.splice(asciiarr.length-1-left)
        }
    }

    console.log(answer);
    return answer;
}

solution(name);