//https://programmers.co.kr/learn/courses/30/lessons/12985
//예상 대진표
const n = 8;
const a = 4;
const b	= 7;

function solution(n,a,b)
{
    var answer = 0;

    while(a !== b) {
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);
        console.log(a,b);
        answer++;
    }
    console.log(answer);
    return answer;
}

solution(n,a,b);
