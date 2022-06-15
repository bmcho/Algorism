// https://programmers.co.kr/learn/courses/30/lessons/42842
// 카펫

const brown = 24;
const yellow = 24;

function solution(brown, yellow) {
    var answer = [];
    //갈색격자 + 노란격자 = 카펫트의 넓이
    //약수 구하기
    //노란 격자가 나올려면 길이가 세로크기가 3 이상이여야한다(가로는 세로보다 같거나 크기때문에)
    //가로 * 2 + 세로 * 2 - 4 => 갈색 격자의 수 = 비효율
    //갈색이 노랑을 감싸고 있기때문에 각 변의 길이에서 2씩 빼주어 넓이를 구하면 노란격자의 갯수
    //(가로-2) * (세로-2) = 노란격자의 수
    
    const area = brown+yellow;
    const divisor = [];
    for(let i = 3; i < area/2; i++) {
        if(area/i < i) break;
        if(area%i === 0) {
            divisor.push([area/i,i]);
        }
    }

    // (가로-2) * (세로-2) = 노란격자의 수
    answer = divisor.filter(v => (v[0]-2) * (v[1]-2) === yellow).pop();
    return answer;
}

solution(brown, yellow);

//다른사람 풀이 무슨의미일까
function solution1(brown, yellow) {
    var answer = [];
    //가로 + 세로 - 2 = brown/2;
    //즉 가로 + 세로 = brown/2 + 2;
    var xpy=brown/2+2;
    console.log(xpy);
    for(var a=1;a<xpy;a++) if(a*(xpy-a)==brown+yellow)  
    return [Math.max(a,xpy-a),Math.min(a,xpy-a)];
    // return answer;
}

solution1(brown, yellow);
